# CrytoLit : Decentralised article funding app.

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.
## Introduction

The main purpose of this project is to demonstrate a basic Hardhat use case and provide a sample project for creating decentralized applications (dApps) with Ethereum smart contracts. The project includes:

* A sample contract (`contracts/Donation.sol` and `contracts/Flagging.sol`)
* A test for the contract (`test/donation.js`)
* A Hardhat Ignition module for deploying the contract (`ignition/modules/Donation.js` and `ignition/modules/Donation.ts`)
* A Next.js application (`don-onchainkit-app`) that integrates with Coinbase's OnchainKit for wallet and identity management

The project aims to provide a starting point for developers to build and deploy their own dApps using Hardhat and Next.js. The `README.md` file provides basic instructions for running tasks with Hardhat, and the `don-onchainkit-app/README.md` file mentions that the Next.js application is bootstrapped with `create-onchain`. The project also includes configuration files for Hardhat (`hardhat.config.ts`), Tailwind CSS (`don-onchainkit-app/tailwind.config.ts`), and TypeScript (`tsconfig.json` and `don-onchainkit-app/tsconfig.json`).

## Setup Instructions

To set up this project, you need to ensure you have the following prerequisites:

* Node.js and npm: Ensure you have Node.js and npm installed on your machine. You can download and install them from the official Node.js website.
* Hardhat: This project uses Hardhat for Ethereum development. You can install Hardhat globally using npm with the command `npm install -g hardhat`.
* TypeScript: The project uses TypeScript, so you need to have TypeScript installed. You can install it globally using npm with the command `npm install -g typescript`.
* Next.js: The project includes a Next.js application. You can install Next.js globally using npm with the command `npm install -g next`.
* Environment variables: The project requires certain environment variables to be set. Create a `.env` file in the root directory and add the necessary environment variables such as `INFURA_RINKEBY_URL`, `INFURA_MAINNET_URL`, and `PRIVATE_KEY`.
* Dependencies: Install the project dependencies by running `npm install` in the root directory and in the `don-onchainkit-app` directory.

These prerequisites will ensure that you have the necessary tools and dependencies to set up and run the project.

## Deploying Smart Contracts

To deploy the smart contracts in this project, follow these steps:

* Ensure you have the prerequisites installed: Node.js, npm, Hardhat, TypeScript, and Next.js.
* Set up the environment variables by creating a `.env` file in the root directory and adding the necessary variables such as `INFURA_RINKEBY_URL`, `INFURA_MAINNET_URL`, and `PRIVATE_KEY`.
* Install the project dependencies by running `npm install` in the root directory.
* Compile the smart contracts using Hardhat by running `npx hardhat compile`.
* Deploy the smart contracts using the provided Hardhat script by running `npx hardhat run scripts/deploy.js`.
* Note the deployed contract addresses from the console output for further use in the Next.js application.

## Key Features of `CrytoLit`

The `CrytoLit` has several key features that make it a robust and user-friendly application for managing articles and donations. Here are the main features:

* **Wallet and identity management**: The application integrates with Coinbase's OnchainKit for wallet and identity management, allowing users to connect their wallets, view their identity information, and manage their Ethereum balances. This is implemented in files like `don-onchainkit-app/app/page.tsx` and `don-onchainkit-app/components/Layout.tsx`.
* **Article management**: Users can create, view, and manage articles. The `don-onchainkit-app/pages/create-article.tsx` file provides the functionality for creating new articles, while `don-onchainkit-app/pages/articles.tsx` allows users to view and donate to existing articles.
* **Donation functionality**: The application allows users to donate to articles using Ethereum. This is handled in `don-onchainkit-app/pages/articles.tsx`, where users can enter donation amounts and send donations to the specified articles.
* **Next.js framework**: The application is built using Next.js, providing a modern and efficient framework for building React applications. This is evident from the project structure and configuration files like `don-onchainkit-app/next.config.mjs` and `don-onchainkit-app/package.json`.
* **Tailwind CSS integration**: The application uses Tailwind CSS for styling, as seen in `don-onchainkit-app/tailwind.config.ts` and `don-onchainkit-app/app/globals.css`, providing a utility-first approach to styling.
* **TypeScript support**: The project is written in TypeScript, ensuring type safety and better development experience. This is evident from the presence of TypeScript configuration files like `don-onchainkit-app/tsconfig.json` and `don-onchainkit-app/next-env.d.ts`.
* **Environment variable management**: The application uses environment variables to manage sensitive information like API keys and contract addresses. This is indicated by the `.env` entry in `don-onchainkit-app/.gitignore` and the usage of environment variables in various files like `don-onchainkit-app/pages/articles.tsx` and `don-onchainkit-app/pages/create-article.tsx`.

## Future Improvements

Here are the future improvements planned for this project:

* **Enhanced article management**: Implement additional features for article management, such as editing and deleting articles. This will allow authors to update their content and remove articles if necessary.
* **Improved donation tracking**: Add more detailed tracking and reporting of donations, including a history of donations for each article and user. This will provide better transparency and accountability for donations.
* **User reputation system**: Introduce a reputation system for users based on their activity, such as article creation, donations, and flagging. This will help promote positive behavior and reward active contributors.
* **Advanced flagging and moderation**: Enhance the flagging system to include more sophisticated moderation tools, such as automated content analysis and community-driven moderation. This will help maintain the quality and integrity of the platform.
* **Integration with other blockchain networks**: Expand the project's compatibility with other blockchain networks beyond Ethereum, such as Binance Smart Chain or Polygon. This will increase the project's reach and provide more options for users.
* **Mobile app development**: Develop a mobile application for the project to provide a more accessible and user-friendly experience for users on the go.
* **Enhanced UI/UX**: Continuously improve the user interface and user experience of the `don-onchainkit-app` to make it more intuitive and visually appealing. This includes refining the design, adding animations, and optimizing performance.
* **Additional payment options**: Integrate support for additional payment options, such as stablecoins or other cryptocurrencies, to provide more flexibility for users when making donations.
* **Multilingual support**: Add support for multiple languages to make the platform accessible to a broader audience. This includes translating the user interface and providing localized content.
* **Smart contract upgrades**: Regularly review and upgrade the smart contracts to incorporate new features, improve security, and optimize performance. This includes updating the `contracts/Donation.sol` and `contracts/Flagging.sol` contracts as needed.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```
