import { Contract, Signer, BigNumber as BN } from 'ethers'
import * as hre from 'hardhat'
import { XTestToken  } from '../types/typechain'
import { use, should } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { solidity } from 'ethereum-waffle'
import { deploy } from '../utils/deploy-helpers'
import {setup} from './helpers/setup'

use(chaiAsPromised)
use(solidity)
should()
 

describe('0xTestToken', function () {
  let testTokenContract: XTestToken
  
  let user: Signer
  let filler: Signer
   

  beforeEach(async () => {
    const result = await setup()
    testTokenContract = result._0xTestToken
    
    user = result.user
   
  })

    
  

  describe('0xTestToken', () => {
    it('should have the tokenAddr address set', async () => {
      const tokenAddr = testTokenContract.address
      tokenAddr.should.exist
    })
  })

   
 
})
