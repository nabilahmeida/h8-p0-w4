function kaliTerusRekursif(angka) {
    var str = angka.toString();
    var kaliTerus = 1;
    if (angka < 10) {
        return angka;
    }
    else {
        for(var i = 0; i < str.length; i++){
            kaliTerus = kaliTerus * Number(str[i]);
        }  
        return kaliTerusRekursif(kaliTerus);     
    }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6