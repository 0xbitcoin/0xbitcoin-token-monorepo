import { DeployFunction } from 'hardhat-deploy/types'

import { deploy } from 'helpers/deploy-helpers'
import { BigNumberish, BigNumber as BN } from 'ethers'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { getTokens, getNetworkName} from '../config'

const deployOptions: DeployFunction = async (hre) => {
  const { getNamedSigner, run, network, log } = hre
  const deployer = await getNamedSigner('deployer')
 

  // Make sure contracts are compiled
  await run('compile')

  log('')
  log('********** Deploying **********', { indent: 1 })
  log('')
 

  const tokenDeploy = await deploy({
    contract: '_0xBitcoinToken',
    args: [ ],
    skipIfAlreadyDeployed: false,
    hre,
    
  })

  const testTokenDeploy = await deploy({
    contract: '_0xTestToken',
    args: [ ],
    skipIfAlreadyDeployed: false,
    hre,
    
  })
}

deployOptions.tags = ['primary']
deployOptions.dependencies = []

export default deployOptions
