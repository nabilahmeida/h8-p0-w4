function digitPerkalianMinimum(angka) {
    var fpb = 0;
    var arr = [];
    var result = [];
    var hasilBagi = 0;
    var baru = [];
    for(var i = 1; i <= angka; i++){
        if(angka % i === 0){
            arr = [];
            fpb = i;
            arr.push(fpb);
            result.push(arr);
            // console.log(result);  
        }
        
        
    }
               
        for(var j = 0; j < result.length; j++){
            hasilBagi = angka / result[j];
            result[j].push(hasilBagi);
            // console.log(result);
        }

            // var hanbun = result.length / 2;
            // var hasil = result.splice(hanbun);
            

        //    for(var x =0; x < result.length; x++){
        //        for(var y = 0; x < result[x].length; y++){
        //            console.log(result[x][y]);
        //        }
        //    }
        // console.log(result);
        var terkecil = (result[0][0].toString() + result[0][1].toString()).length
            for(var p = 1; p < result.length; p++){
                var kosong = [];
                var string = (result[p][0].toString() + result[p][1].toString());
                // console.log(string)
                if(string.length < terkecil){
                    terkecil = string.length;
                }
                
            }
            
        
        
    
        
    return terkecil;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2