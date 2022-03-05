
import { BigNumberish, Signer } from 'ethers'
import hre from 'hardhat'
import { XTestToken  } from '../types/typechain'
import { use, should } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { solidity } from 'ethereum-waffle'
 


import BigNumber from 'bignumber.js'

use(chaiAsPromised)
use(solidity)
should()
 
const { getNamedSigner, getNamedAccounts, ethers, toBN, deployments, tokens } =
  hre

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SetupOptions {}

interface SetupReturn {
  testToken: XTestToken
}


const setup = deployments.createFixture<SetupReturn, SetupOptions>(
  async (hre, _opts) => {
    await hre.deployments.fixture(['primary'], {
      keepExistingDeployments: false,
    })

    const testToken = await hre.contracts.get<XTestToken>('_0xTestToken')
   

    return {
      testToken
    }
  }
)


describe('0xTestToken', function () {
  let testTokenContract: XTestToken
  
  let deployer: Signer
    

  before(async () => {
    const result = await setup()
    testTokenContract = result.testToken
    
    deployer = await getNamedSigner('deployer')
   
  })
  
  

  describe('0xTestToken', () => {
    it('should have the tokenAddr address set', async () => {
      const tokenAddr = testTokenContract.address
      tokenAddr.should.exist
    })


    it('should predict mining target changes', async () => {

      const originalTarget = new BigNumber('27606985387162255149739023449108101809804435888681546220650096895197184')

      let blocksDelta = 46491

      let newTargetResult = await testTokenContract.calculateDifficultyChange(originalTarget.toFixed(0),blocksDelta )

      const newTarget = new BigNumber(newTargetResult._hex)
       
      console.log('originalTarget',originalTarget.toFixed(0) )
      console.log('newTarget',newTarget.toFixed(0) )
    })
  })

   
 
})
