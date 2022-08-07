import xyz from './module.mjs'  // when we import default we can give any name
console.log(xyz)
 
import {b,a,c} from './module.mjs'  // after import we need to give those name which we already given in export file
console.log(b,a,c)