// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1.5, 4);
let bowl= makePottery("Bowl", 2, 3.5);
let plate = makePottery("Plate", 1, 1);
let vase= makePottery("Vase", 3, 8);
let platter = makePottery("Platter", 5, 2);
console.log(mug);



// Fire each piece of pottery in the kiln

const potteryFired = [
    firePottery(mug, 2000),
    firePottery(bowl, 2300),
    firePottery(plate, 2200),
    firePottery(vase, 2400),
    firePottery(platter, 2100),
   
];
potteryFired .forEach((pottery, index) => {
    console.log(`Pottery ${index + 1}:`, pottery);
});
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

