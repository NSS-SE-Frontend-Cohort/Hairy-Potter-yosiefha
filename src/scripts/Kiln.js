export const firePottery=(pottery,temperature)=>{
    

    
    if (temperature > 2200) {
        pottery.cracked = true;
    } else {
        pottery.cracked = false;
    }

   
    return pottery;

}