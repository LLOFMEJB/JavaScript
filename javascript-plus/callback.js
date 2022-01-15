function movement(array, callback){
    let total = 0;
    let arrDeposits = [];
    let arrWithdraws = [];
    for (let i = 0; i < array.length; i++) {
        total += array[i];
        if (array[i]>0) {
            arrDeposits.push(array[i]);
            callback(`You deposited ${array[i]} dollars`);
        } else {
            arrWithdraws.push(array[i]);
            callback(`You withdrew ${array[i]} dollars`);

        };
    };
    callback(`Total amount is ${total} usd`)
    callback(`arrDeposit ===> ${arrDeposits}`)
    callback(`arrWithdraws ===> ${arrWithdraws}`)
};
movement([100, 300, -200, 500, -400, 225, 1000, -700], (val) => {
    console.log(val)
});