function kaliTerusRekursif(angka) {
// manual  
    var str = angka.toString();
    var tampung = 1;
//    for(var i = 0; i < str.length; i++){
//        console.log(str[i]);
//         tampung =  Number(str[i]) * Number(str[i]);
       
//    }    
        if(angka < 10){
            return angka;
        }
        else{
              for(var i = 0; i < str.length; i++){
                  tampung = tampung * Number(str[i]);
              }  

              return kaliTerusRekursif(tampung);
              
        }
    

  
//     if(angka.length === 1){
//         return angka;
//     }
//     else{
//         return 
//     }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6