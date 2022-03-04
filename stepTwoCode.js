

// Problem 1----Sum Zero--------------------------------------------

function addToZero(arr){
let diffArr = arr


for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] + diffArr[j] === 0){
            return true
        } 
    }
    
}
return false


}

// console.log(addToZero([1,2,3,-2]))




// Problem 2----Unique Characters-----------------------------------


function hasUniqueChars(arr){
    
    
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                return false;
            } 
        }
        
    }
    return true
    
    
    }
    
// console.log(hasUniqueChars('Monday'))






// Problem 3----Pangram Sentence------------------------------------


function isPangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
 }
// console.log(isPangrams("I like cats, but not mice"))







// Problem 4----Longest Word----------------------------------------


function findLongestWord(str) {
    var longestWord = str.sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  console.log(findLongestWord(["hi", "hello"])) ;


