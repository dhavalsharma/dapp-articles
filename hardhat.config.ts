import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: process.env.INFURA_RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    mainnet: {
      url: process.env.INFURA_MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: process.env.BASE_ETHERSCAN_API_KEY,
  },

};

export default config;
