// contracts/Flagging.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Flagging {
    struct Article {
        uint256 id;
        uint256 flagCount;
        bool removed;
    }

    mapping(uint256 => Article) public flaggedArticles;
    mapping(address => uint256) public flaggedUsers;
    uint256 public constant FLAG_THRESHOLD = 5;

    event ArticleFlagged(uint256 articleId, uint256 flagCount);
    event ArticleRemoved(uint256 articleId);
    event UserFlagged(address user, uint256 flagCount);

    function flagArticle(uint256 articleId) public {
        Article storage article = flaggedArticles[articleId];
        article.flagCount++;

        if (article.flagCount >= FLAG_THRESHOLD) {
            article.removed = true;
            emit ArticleRemoved(articleId);
        } else {
            emit ArticleFlagged(articleId, article.flagCount);
        }
    }

    function flagUser(address user) public {
        flaggedUsers[user]++;
        if (flaggedUsers[user] >= FLAG_THRESHOLD) {
            // Logic to disable user account if needed.
        }
        emit UserFlagged(user, flaggedUsers[user]);
    }

    function isArticleRemoved(uint256 articleId) public view returns (bool) {
        return flaggedArticles[articleId].removed;
    }
}
