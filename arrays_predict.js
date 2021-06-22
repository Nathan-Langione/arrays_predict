/* i is set to 0 and while i is less than the length of the array it will print out each element in the array. 
Output: 8,6,7,5,3,0,9 */
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}



/* i is set to 0 and while i is less than the length of the array it will print out the number stores in i if divisible by 2 otherwise it will print "That is odd!" 
Output: odd!, odd!, 8, 4, 2, 0, odd!*/
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}




/* Iterates though each element in var arr. If i is less than 0 then i is added to newArr and i in arr is updated to i * -1.
If i is equal to 0 i is updated to "Zero". Otherwise i is updated to i * -1. Arr and newArr are then printed to the console. 
Output: [-1,-3,-8,5,'zero',2,-4,1] [-5, -2, -1]
*/
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);




