function changeMe(arr){
    var objek = {};
    var firstName = [];
    var lastName = [];
    var gender = [];
    var age = [];
    var nama = "";
    
    if(arr.length === 0){
        console.log('""');
    }
    else{

        for(var i = 0; i < arr.length; i++){
            firstName.push(arr[i][0]);
            lastName.push(arr[i][1]);
            gender.push(arr[i][2]);
            age.push(2018 - arr[i][3]); 
            nama =  (i+ 1) + " "+ firstName[i]  + " " + lastName[i] + ":";
            objek.firstName = firstName[i];
            objek.lastName = lastName[i];
            objek.gender = gender[i];
            if(arr[i][3] === undefined || arr[i][3] > 2018){
                objek.age = "invalid Birth Years";
            } 
            else{
                objek.age = age[i];
            }
            console.log(nama);
            console.log(objek);
                
        }

    }

                
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""