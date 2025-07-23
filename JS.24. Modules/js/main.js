// Modules
// They're usually used to export some codes from 1 file to the other.

//import playGuitar from "./guitar.js";
//import { shredding as shred, plucking as fingerPicking } from "./guitar.js";
import * as Guitars from "./guitar.js"
import User from "./user.js";
const me = new User("email@email.com", "Dave");
console.log(me);
console.log(me.greeting());


console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
