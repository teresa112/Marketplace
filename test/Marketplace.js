var Marketplace = artifacts.require("./Marketplace.sol"); // import MArketplace contract 

//start contract testing always be the same
contract("Marketplace", function(accounts) { //accounts not used articleCounter because it is external, accounts relate to ganache accounts which it calls internally 

    var articleName = "test_article";
    var articleDescription = "this is a test";
    var articlePrice = web3.toWei(10, "ether"); //web3 is a global variable 
    
    //start first test 
    it("articleCounter is initially zero", function() { //Moca JavaScript testing framework ("it" is function of the framework and always used at the beginning)  )
        
        // get an instance of the contract, then makes the process wait for the first task to finaish and then calls next function
        return Marketplace.deployed().then(function(instance) {  // instance is what is returned by funciton
            
            //cal the getNumberOfArticles funciton 
            return instance.getNumberOfArticles(); // we only use the instance once 
        
        //pass on return value of getNumberOfArticles function    
        }).then(function(articleCounter) {
            
            //check condition articleCounter = 0, if not return phrase
            assert.equal(articleCounter, 0, "inital articleCounter not equal to zero");
        });
    });

    it("should have one article for sale", function(){ // when using "it" function
        var MarketplaceInstance;
        return Marketplace.deployed().then(function(instance){ //instance = return of the deployed contract 
            MarketplaceInstance = instance; //we want to use instance more than once that's why we save it into a var
            return MarketplaceInstance.sellArticle(
                articleName,
                articleDescription,
                articlePrice,
                {'from': accounts[0]}
            );
        
        //test if event was triggered (would be include in receipt)
        }).then(function(receipt) {
            //insert receipt 
        }).then(function() {    
            return MarketplaceInstance.getNumberOfArticles();
        }).then(function(articleCounter){
            assert.equal(articleCounter, 1, "articleCounter has not increased correctly");
        }).then(function(){
            return MarketplaceInstance.articles(1)
        }).then(function(article){
            assert.equal(article[0], 1, "id is not 1"); //article of zero is the id 
            assert.equal(article[1], articlePrice, "articlePrice is not 10 ether");
            assert.equal(article[2], accounts[0], "seller is not correct");
            assert.equal(article[3], 0x0, "buyer is not unknown");
            assert.equal(article[4], articleName, "id is not correct");
            assert.equal(article[5], articleDescription, "articleDescription is not correct");
        });

    }); 
});
