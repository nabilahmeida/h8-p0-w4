function sorting(arrNumber) {
    var large = [];  
    for(var i = arrNumber.length; i >= 0; i--){
        if(arrNumber[i] > arrNumber[i-1] || arrNumber[i] === arrNumber[1]){
                large.push(arrNumber[i]);
        }    
    } 
    return large;
  }
  
  function getTotal(arrNumber) {
      var total = [];
      if(arrNumber.length !== 1){
        for(var j = 0; j < arrNumber.length; j++){
            if(arrNumber[j] === arrNumber[0]){
                total.push(arrNumber[j]);          
            }
                var result = total.slice(0,1);
        }
         return "angka yang paling besar adalah " + result + " dan jumlah muncul sebanyak " + total.length + " kali";
    }
      else {
            return '""';
      } 
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''