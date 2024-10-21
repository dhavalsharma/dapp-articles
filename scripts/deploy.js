// scripts/deploy.js

async function main() {
    const Donation = await ethers.getContractFactory("Donation");
    const donation = await Donation.deploy();
    await donation.deployed();
    console.log("Donation contract deployed to:", donation.address);

    const Flagging = await ethers.getContractFactory("Flagging");
    const flagging = await Flagging.deploy();
    await flagging.deployed();
    console.log("Flagging contract deployed to:", flagging.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
