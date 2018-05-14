function checkAB(str){
    var tampung = [];
    var posisi = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] === 'b'){
            tampung.push(i); 
        } else if (str[i] === 'a'){
            posisi.push(i)
        }

    }

    if(tampung.length === 0 || posisi.length === 0){
        return false;
    }
    var hitung = []
    for(var j=0; j < tampung.length; j++){
        for(var k=0; k < posisi.length; k++){
            if(tampung[j] > posisi[k]){
            hitung.push(tampung[j] - posisi[k]);
            } else if(posisi[k] > tampung[j]){
                hitung.push(posisi[k]- tampung[j])
            }
        
        }

        console.log(hitung)
        for(var a = 0; a < hitung.length; a++){
            if(hitung[a] === 4){
                return true;
            }
        }
        
        
    }
    
  console.log(hitung);
  return false;
}   

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false