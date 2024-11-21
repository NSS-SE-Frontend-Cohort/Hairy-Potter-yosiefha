//Define a variable to have the value of the primary key for each piece of pottery. 
let potteryId = 1;
// Define and export a function named makePottery
export const makePottery = (shape, weight, height) => ({
    shape,
    weight,
    height,
    id: potteryId++ // Increment potteryId inline
});
