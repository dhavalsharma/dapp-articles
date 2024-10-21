import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("DonationaModule", (m) => {
    const donation = m.contract('Donation');
    const flagging = m.contract('Flagging');

    return { donation, flagging };
  });