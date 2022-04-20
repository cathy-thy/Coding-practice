//Question 1
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


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter product id, name, price and description. \n Separate your response by semi-colon ";"\n', (answer) => {
    if (answer){
        const answerArr = answer.split(";");
        //console.log(answerArr[0] + '\n' + answerArr[1] + '\n' + answerArr[2]+ '\n' +answerArr[3]);
        var productItem = new Product(answerArr[0], answerArr[1], answerArr[2], answerArr[3]);
        console.log(productItem.printAllProduct());
    }
  rl.close();
});
