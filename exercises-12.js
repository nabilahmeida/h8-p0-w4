function shoppingTime(memberId, money){
    var batasUang = 50000;
    var objek = {};
    var Purchase = [];
    var arr = [['Sepatu brand stacattu', 1500000],['Baju brand Zoro', 500000 ],['Baju brand H&N', 250000],['Sweater brand uniklooh', 175000],['Casing handphone', 50000]];

   
    if(memberId === undefined && money === undefined){
       return "Mohon maaf toko X hanya berlaku untuk member saja";
    } else if( money < batasUang){
        return "Mohon maaf uang tidak cukup";
     }
     else{
        objek.memberId = memberId;
        objek.money = money;
        objek.listPurchase = [];
        objek.changeMoney = money;

        for(var i = 0; i < arr.length; i++){
            if(objek.changeMoney >= arr[i][1]){
                objek.changeMoney =  objek.changeMoney - arr[i][1];
                objek.listPurchase.push(arr[i][0]);
            }
            
        }
     
     

    }  
        
     return objek;
}


console.log(shoppingTime('1820RzKrnWn08',2475000 ));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
