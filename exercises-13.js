function countProfit(shoppers) {
    var arr = [];
    var profit = {};
    var simpan = 0;
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];

    for(var n = 0; n < listBarang.length; n++){
        profit = {};
        profit.product = listBarang[n][0];
        profit.shoppers = [];
        profit.leftOver = listBarang[n][2];
        profit.totalProfit = 0;
        arr.push(profit);
        
        
        for(var k = 0; k < shoppers.length; k++){
            if(shoppers[k].product === listBarang[n][0]){
                if(shoppers[k].amount > listBarang[n][2]){
                    profit.shoppers = [];
                }
                else{
                    simpan += shoppers[k].amount 
                    profit.shoppers.push(shoppers[k].name);
                    profit.leftOver = profit.leftOver - shoppers[k].amount;
                    profit.totalProfit = simpan * listBarang[n][1];

                }
               
                
                
            }
        }

    }

        return arr;
    
    
        
    // for(var i = 0; i < listBarang.length; i++){
    //     for(var j = 0; j < shoppers.length; j++){
    //         if(shoppers[j].product === listBarang[i][0]){
    //             profit.product = listBarang[i][0];
    //             profit.shoppers = shoppers[j].name;
    //             profit.leftOver = listBarang[i][2] - shoppers[j].amount;   
    //             profit.totalProfit = profit.leftOver * listBarang[i][1];
               
    //         }
    //         else {
    //             profit.product = listBarang[i][0];
    //             profit.shoppers = [];    
    //             profit.leftOver = listBarang[i][2];
    //             profit.totalProfit = 0;
    //         }
            
    //     }
       
    // }
             
    
}


  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
// console.log(countProfit([])); //[]
