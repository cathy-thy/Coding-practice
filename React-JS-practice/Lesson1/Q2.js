//Question 2
function Product(pId, pName, pPrice, pDescription)
{
    this.productId = pId;
    this.productName = pName;
    this.productPrice = pPrice;
    this.productDescription = pDescription;
    this.printAllProduct = function ()
    {
        return "Id: " + this.productId + '\n' + 
                "Name: " + this.productName + '\n' + 
                "Price: " + this.productPrice + '\n' + 
                "Description: " + this.productDescription + '\n';
    };
};

function Product1 (pType)
{
    this.productType = pType;
    this.printAllProduct1 = function()
    {
        return this.printAllProduct() + 
        "Type: " + this.productType;
    };
}

function Product2 (pCategory)
{
    this.productCategory = pCategory;
    this.printAllProduct2 = function()
    {
        return this.printAllProduct() + 
        "Type: " + this.productCategory;
    };
}

const readline = require('readline');

const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

r2.question('Enter Product type number (1/2)', (typeAnswer) =>{
    if (typeAnswer == 1){
        console.log('\n');
        r2.question('For product 1, Enter product id, name, price, description and product type. \n Separate your response by semi-colon ";"\n', (answer) => {
            if (answer){
                const answerArr = answer.split(";");
                Product1.prototype = new Product(answerArr[0], answerArr[1], answerArr[2], answerArr[3]);
                var product1 = new Product1 (answerArr[4]);
                console.log(product1.printAllProduct1());
            }
        r2.close();
        }); 
    }
    else if (typeAnswer == 2){
        console.log('\n');
        r2.question('For product 2, Enter product id, name, price, description and product category. \n Separate your response by semi-colon ";"\n', (answer) => {
            if (answer){
                const answerArr = answer.split(";");
                Product2.prototype = new Product(answerArr[0], answerArr[1], answerArr[2], answerArr[3]);
                var product2 = new Product2 (answerArr[4]);
                console.log(product2.printAllProduct2());
            }
        r2.close();
        }); 
    }
    else{
        console.log('Invalid Input. Exit.');
    }

r2.close;
});
