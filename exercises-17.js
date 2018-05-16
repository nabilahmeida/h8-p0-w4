function totalDigitRekursif(angka) {
    
    // var tampung = 0;
    // for(var i = 0; i < str.length; i++){
    //     tampung = tampung + Number(str[i]);
    // }
    //     console.log(tampung);
    var str = angka.toString();
    if( angka < 10){
        return angka;
    }
    else{ 
       //console.log(Number(str[0]) + Number(str[1]) + Number(str[2]));
        // console.log(str[str.length-1]);
        // return str[str.length-1] + totalDigitRekursif(-str[str.length-1]);
        // console.log('take one == >' + str.slice(1)); //12
        // console.log('take two == >' + str.slice(2)); //2
        // console.log('take three == >' + str.slice(3)); // empty
        // console.log('panjang angka ==>' + str.length);    // 3 digit
        // console.log('take 1 sepanjang angka kurang 1' + str.slice(str.length-1));
        // console.log('take 1 sepangjang angka kurang 1 ' + str.slice(str.length));
        return Number(str[0]) + totalDigitRekursif(Number(str.slice(1)));

    }

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5