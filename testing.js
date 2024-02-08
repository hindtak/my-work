// TO SEEclea
function isIsogram(str) {
    var i,j;
    str = str.toLowerCase();
    for(i=0; i < str.lentgh; i++) {
      for(j= i+1; j < str.length; j++) {
        if(str[i] === str[j]){
          return false
        }
      }
    }
      return true
    }
  console.log(isIsogram("hello"));
function myArray(input) {
    const result = [];
    let count = 1
    for(let i = 0; i < input.length - 1; i++){
        if(input[i] === input[i + 1])
        {
            count++;
            
        } else {
            result.push(count);
            count = 1; // Reset count for the next group
        }
    }
    
    result.push(count);
    while (input.length  > 1) {
       return myArray(result)
    }
    
    return result;
}


// problem solved



const inputArray = [0, 4, 6, 8, 8, 8, 5, 5, 7];
const outputArray = myArray(inputArray);
console.log(outputArray); 
/**
 if(count >1){
    result[index] = count
    index++
 } else {
    result[index]= 1
    index++
 }
 return result,
 */
// codewars challenche day into to node
// function group(arr) {
//     let dubArry = [];
//     for(let i = 1; i < arr.lentgh - 1; i++){
//         // func to control dublacated numbeers
//        let arrdubl = (number) => {
//         if()
//        }
//     }

// }

 function group(arr) {
  let dubArray = []
  arr.forEach((item) => {
    let itemArr = []
    arr = arr.filter((repeatItem)=>{
      if(item === repeatItem) {
        itemArr.push(item) // Push the repeated item to the current group
        return false // Exclude the repeated item from the filtered array
      } 
      return true
    })
    if(itemArr.length > 0 )
	  dubArray.push(itemArr)
  })
  return dubArray
}

console.log(group([3, 2, 6, 2, 1, 3]))

