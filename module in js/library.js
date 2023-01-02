

function sum(...args){
    let sum = 0;
    for(let i in args) sum +=args[i];
    return sum
}

function mul(...args){
    let sum = 1;
    for(let i in args) sum *=args[i];
    return sum
}

export {sum,mul}

