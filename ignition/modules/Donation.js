// ignition/deploy.js
/*
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule('DeployModule', (m) => {
    const donation = m.contract('Donation');
    const flagging = m.contract('Flagging');

    m.afterDeploy(async ({ contracts, log }) => {
        log(`Donation contract deployed to: ${contracts.Donation.address}`);
        log(`Flagging contract deployed to: ${contracts.Flagging.address}`);
    });
});
*/
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DonationaModule", (m) => {

  const donation = m.contract('Donation');
  const flagging = m.contract('Flagging');

  return { donation,  flagging };
});