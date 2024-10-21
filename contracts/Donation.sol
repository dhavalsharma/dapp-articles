// contracts/Donation.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Donation is Initializable {
    struct Article {
        uint256 id; // Unique identifier for the article
        address author;
        string title;
        string content;
        uint256 donationsReceived;
        bool exists;
    }

    mapping(uint256 => Article) public articles;
    mapping(address => uint256) public authorDonations;
    uint256 public articleCount = 0;

    event ArticleUploaded(uint256 articleId, string title, address author);
    event DonationMade(uint256 articleId, address supporter, uint256 amount);

    function uploadArticle(string memory title, string memory content) public {
        articleCount++;
        articles[articleCount] = Article({
            id: articleCount,
            author: msg.sender,
            title: title,
            content: content,
            donationsReceived: 0,
            exists: true
        });
        emit ArticleUploaded(articleCount, title, msg.sender);
    }

    function donateToArticle(uint256 articleId) public payable {
        require(articles[articleId].exists, "Article does not exist");
        articles[articleId].donationsReceived += msg.value;
        authorDonations[articles[articleId].author] += msg.value;
        emit DonationMade(articleId, msg.sender, msg.value);
    }

    function withdrawDonations() public {
        uint256 donationAmount = authorDonations[msg.sender];
        require(donationAmount > 0, "No donations available for withdrawal");
        authorDonations[msg.sender] = 0;
        payable(msg.sender).transfer(donationAmount);
    }

    function getArticleDetails(uint256 articleId) public view returns (uint256, address, string memory, string memory, uint256) {
        require(articles[articleId].exists, "Article does not exist");
        Article memory article = articles[articleId];
        return (article.id, article.author, article.title, article.content, article.donationsReceived);
    }

    function getArticles() public view returns (Article[] memory) {
        Article[] memory _articles = new Article[](articleCount);
        for (uint256 i = 1; i <= articleCount; i++) {
            _articles[i - 1] = articles[i];
        }
        return _articles;
    }

    function getMyArticles() public view returns (Article[] memory) {
        Article[] memory _articles = new Article[](articleCount);
        uint256 count = 0;
        for (uint256 i = 1; i <= articleCount; i++) {
            if (articles[i].author == msg.sender) {
                _articles[count] = articles[i];
                count++;
            }
        }
        Article[] memory myArticles = new Article[](count);
        for (uint256 i = 0; i < count; i++) {
            myArticles[i] = _articles[i];
        }
        return myArticles;
    }

    function getMyDonations() public view returns (Article[] memory) {
        Article[] memory _articles = new Article[](articleCount);
        uint256 count = 0;
        for (uint256 i = 1; i <= articleCount; i++) {
            if (authorDonations[msg.sender] > 0) {
                _articles[count] = articles[i];
                count++;
            }
        }
        Article[] memory myDonations = new Article[](count);
        for (uint256 i = 0; i < count; i++) {
            myDonations[i] = _articles[i];
        }
        return myDonations;
    }
}
