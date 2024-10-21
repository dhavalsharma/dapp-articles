// test/donation.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Donation", function () {
    it("Should allow users to upload articles and donate", async function () {
        const [owner, supporter] = await ethers.getSigners();
        const Donation = await ethers.getContractFactory("Donation");
        const donation = await Donation.deploy();
        await donation.deployed();

        await donation.connect(owner).uploadArticle("Test Title", "Test Content");

        let article = await donation.articles(1);
        expect(article.title).to.equal("Test Title");

        await donation.connect(supporter).donateToArticle(1, { value: ethers.utils.parseEther("1.0") });
        article = await donation.articles(1);
        expect(article.donationsReceived).to.equal(ethers.utils.parseEther("1.0"));
    });
});
