/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


function isAnagram(str1,str2){

    if (str1.length !== str2.length) {
        return false;
    }

    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

    for (let i = 0; i < str1.length; i++) {
        arr1[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for(let i=0;i<str2.length;i++){
        arr2[str2.charCodeAt(i)-'a'.charCodeAt(0)]++;
    }
    for(i=0;i<26;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;
}