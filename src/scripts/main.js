// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js';
import {PotteryList} from './PotteryList.js';
 


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

// Determine which ones should be sold, and their price
potteryFired .forEach((pottery, index) => {
    console.log(`Pottery ${index + 1}:`, pottery);
    toSellOrNotToSell(pottery);
});



const itemsToSell = usePottery();
itemsToSell.forEach((pottery) => {
    console.log("Pottery Item:");
    console.log(`  Shape: ${pottery.shape}`);
    console.log(`  Weight: ${pottery.weight}`);
    console.log(`  Height: ${pottery.height}`);
    console.log(`  ID: ${pottery.id}`);
    console.log(`  Fired: ${pottery.fired}`);
    console.log(`  Cracked: ${pottery.cracked}`);
   
    console.log(`  Price: $${pottery.price}`);
  
    console.log("----------------------------");
});

// Invoke the component function that renders the HTML list

const potteryHTML = PotteryList()
const potteryContainer = document.querySelector('.potteryList');
potteryContainer.innerHTML = potteryHTML;