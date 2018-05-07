function angkaPrima(angka){
var check = false;
for(var i = 2; i <= angka; i++){
    if(i >= 2){
        check = true;
    } 
    for(var j = 2; j < i; j++){
        if(i%j === 0){
        check = false;
        }
    
    }
}
    if(angka === 1){
        check = true;
    }
        return check;
}



console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(1)); //true
console.log(angkaPrima(2)); //true