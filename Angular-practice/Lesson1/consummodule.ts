//use class defined in another typescript file
//first have to tsc classdemo.ts
//then tsc consummodule.ts
import * as Mathmodule from "./classdemo";

var obj = new Mathmodule.Circle(2);  //12.56
console.log(obj.getArea());  //12.56
console.log(Mathmodule.pi);  //3.14