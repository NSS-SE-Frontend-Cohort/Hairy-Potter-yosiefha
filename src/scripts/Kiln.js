export const firePottery = (pottery, temperature) => ({
    ...pottery,
    cracked: temperature > 2200
});