/*
=========Promises==========
The Promise object represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value.
*/

//we pass execuor function to promise
var prm1 = new Promise(function(resolve, reject){
    //either resolve or reject
    setTimeout(()=>{
        let roll_no = [899, 455, 23, 45, 67]; 
        //resolve(roll_no);
        reject("Error in getting roll_no");
    },5000); //5000 = 5 seconds
});

//----------------------------
prm1.then((rollRes)=>{console.log("Promise Resolved: Roll no " + rollRes)})
.catch((rollNoError)=>{console.log("Error " + rollNoError)}) //if reject, then catch error
