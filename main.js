//                                 1-vazifa
// function ortaSon(bir, ikki, uch) {
//     if ((bir <= ikki && bir >= uch)) {
//         return bir
//     }
//     if (bir >= ikki && bir <= uch) {
//         return bir
//     }
//     if ((ikki <= bir && ikki >= uch)) {
//         return ikki;
//     }
//     if (ikki >= bir && ikki <= uch) {
//         return ikki
//     }
//     else {
//         return uch
//     }
// }
// console.log(ortaSon(1, 5, 4));

//                                     2-vazifa

// function hisoblash(arr) {
//     let musbat = 0;
//     let manfiy = 0;

//     for (let i of arr) {
//         if (i > 0) {
//             musbat++;
//         }
//          if (i < 0) {
//             manfiy++;
//         }
//     }

//     console.log("Musbat " + musbat);
//     console.log("Manfiy " + manfiy);
// }

// let testArray = [5, -3, -5,];
// hisoblash(testArray);





//                          3-vzifa


// function chiqargich (arr){
//     let nol = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr [i] < 0){
//             nol += arr[i];
//         }
//     }
//     return nol;
// }

// console.log(chiqargich([-1, -9,  5]));




// 4-vazifa

 function bilgich(bir, ikki, uch) {
     if ((bir > ikki && bir > uch)) {
         return bir
     } 
     if(ikki > bir && ikki > uch) {
         return ikki
     }
      if ((uch > bir && uch > ikki)) {
         return uch;
     }
 }
 console.log(bilgich(60, 400, 90));