namespace spreadopr 
{
    let arr1:number[]=[11,22,33];
    let copyArr:number[]=[...arr1];

    for(let value of copyArr)
    {
        console.log(value);
    }

    let mergedArr:number[]=[...arr1,...copyArr];
    console.log("--------merger arr --------");
    for (let value of mergedArr)
    {
        console.log(value);

    }
}