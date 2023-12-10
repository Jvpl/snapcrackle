function SnapCrackle(maxValue){
    let result = '';
    for(let i = 1; i <= maxValue; i++ ){
        if(i % 2 === 1 && i % 5 === 0 ){
            result += 'SnapCrackle';
        }
        if(i % 5 === 0){
            result += 'Crackle';
        }
        if(i % 2 === 1){
            result += 'Snap'; 
        }
        if(i % 2 !== 1 && i % 5 !== 0){
            result += i;
        }
        if(i !== maxValue){
            result += ', '
        }
    }
    return result;
}

console.log(SnapCrackle(15));