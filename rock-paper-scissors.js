function getComputerChoice(){
    let a = Math.random();
    if (a < (1/3)){
        return "r";
    }
    else if (a < (2/3)){
        return "p";
    }
    else{
        return "s";
    }
}