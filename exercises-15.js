function changeVocals (str) {
  var vokal = 'aiueoAIUEO';
  var hurufNext = 'bjvfpBJVFP';
  var tampung = "";
    for(var i = 0; i < str.length; i++){
      // console.log(str[i]);
      // console.log(vokal[i]);
        for(var j = 0; j < hurufNext.length; j++){
          // console.log(hurufNext[j]); //bjvfp
          if(str[i] === vokal[j]){
            tampung = tampung + hurufNext[j];
            break;
            // console.log(tampung); //bjvfp
          }
        }
        // console.log('ini tampung.length' + tampung.length);
        // console.log('ini i ' + i+1);
        if ( tampung.length < i+1 ) { //jika panjang sitampung kurang dari 0+1
          tampung = tampung + str[i]; 
          
      }
      
    }
    return tampung;
    
  }
  
  
  function reverseWord (str) {
    var result = "";
    
      for(var u = str.length-1; u >=0; u--){
          result = result + str[u];
          
      }
      return result;
  }
  
  function setLowerUpperCase (str) {
      var hasil = '';
      for(var m = 0; m < str.length; m++){
        if(str[m] === str[m].toUpperCase()){
          hasil = hasil + str[m].toLowerCase();
        }
        else{
          hasil = hasil + str[m].toUpperCase();
        }
      }
        return hasil;
  }
  
  function removeSpaces (str) {
      var hapus = "";
      for(var n = 0; n < str.length; n++){
        if( str[n] !== " "){
          hapus = hapus + str[n];
        }
           
      }

      return hapus;
  }
  
  function passwordGenerator (name) {
    var vocal = changeVocals(name);
    var balikkata = reverseWord(vocal);
    var besarKecil = setLowerUpperCase(balikkata);
    var deletespace = removeSpaces(besarKecil);
    return deletespace;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
//   console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'