pragma solidity ^0.4.23;

contract Marketplace {
    struct Article {
        uint id;
        uint price; ///Is 16 necessary? And if so must I use uint16 whenever I call it? -->yes but safer to use uint
        address seller;
        address buyer;
        string name;
        string description;
    }


///4. Define a mapping that maps an integer to an Article and call it articles
    mapping (uint => Article) articles;

///5. Define a state variable called articleCounter. Think about its data type 
    uint articleCounter;

///11. Define an event called SellArticleEvent that contains the articles's 
///    (id, seller, name, price)
    event SellArticleEvent(uint id, address seller, string name, uint price);


///6. Define a function called sellArticle; arguments: name of the article, 
///   description of the article, price
///7. sellArticle should only be called from the outside (external?)
///8. First, sellArticle increases the articleCounter by 1   
///9. Next it stores the new article in the mapping "articles" which maps the 
///   articleCounter to the struct Article. The seller can be set 0x0 all other 
///   parameters are either inputs to the function or global variables.
//12. Include the triggering of the event inside the sellArticle function
    
    function sellArticle(string name, string description, uint16 price) external { ///6+7
        articleCounter++; ///8 When using .add(1) I have to call safemath before 
        articles[articleCounter] = Article(articleCounter,price, msg.sender,0x0, name, description);///9
        emit SellArticleEvent(articleCounter, 0x0, name,price);///12
    }

///10. Define another function called "getNumberOfArticles" without input 
///    arguments that returns articleCounter It can only be called from the outside 
///    --> Does it allert any variables?

    function getNumberOfArticles() external view returns (uint) {
        return articleCounter;
    }



}