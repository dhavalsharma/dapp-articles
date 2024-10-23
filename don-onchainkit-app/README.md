# CrytoLit

## Introduction

The `CrytoLit` is a Next.js application that integrates with Coinbase's OnchainKit for wallet and identity management. It is part of a larger project that demonstrates a basic Hardhat use case and provides a sample project for creating decentralized applications (dApps) with Ethereum smart contracts. The project includes:

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
*  Ensure that a copy of the artifacts folder is kept in the ./artifacts directory. This is necessary to access contract JSON files such as 'DonationModule#Donation.json'.

These prerequisites will ensure that you have the necessary tools and dependencies to set up and run the project.

## Future Improvements

Here are the future improvements planned for this project:

* **Enhanced article management**: Implement additional features for article management, such as editing and deleting articles. This will allow authors to update their content and remove articles if necessary.
* **Improved donation tracking**: Add more detailed tracking and reporting of donations, including a history of donations for each article and user. This will provide better transparency and accountability for donations.
* **User reputation system**: Introduce a reputation system for users based on their activity, such as article creation, donations, and flagging. This will help promote positive behavior and reward active contributors.
* **Advanced flagging and moderation**: Enhance the flagging system to include more sophisticated moderation tools, such as automated content analysis and community-driven moderation. This will help maintain the quality and integrity of the platform.
* **Integration with other blockchain networks**: Expand the project's compatibility with other blockchain networks beyond Ethereum, such as Binance Smart Chain or Polygon. This will increase the project's reach and provide more options for users.
* **Mobile app development**: Develop a mobile application for the project to provide a more accessible and user-friendly experience for users on the go.
* **Enhanced UI/UX**: Continuously improve the user interface and user experience of the `CrytoLit` to make it more intuitive and visually appealing. This includes refining the design, adding animations, and optimizing performance.
* **Additional payment options**: Integrate support for additional payment options, such as stablecoins or other cryptocurrencies, to provide more flexibility for users when making donations.
* **Multilingual support**: Add support for multiple languages to make the platform accessible to a broader audience. This includes translating the user interface and providing localized content.
* **Smart contract upgrades**: Regularly review and upgrade the smart contracts to incorporate new features, improve security, and optimize performance. This includes updating the `contracts/Donation.sol` and `contracts/Flagging.sol` contracts as needed.
