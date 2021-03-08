/******************
 * YOUR CODE HERE *
 ******************/
function xify (str){
let newstr = "";
  for (let char of str){
   char =  "x";
   newstr += char
  }
    return newstr;
}

function yellingChars (str){
  let output = "";
  for ( let letter of str){
   letter = letter + "!";
  output += letter;
  }
  return output;
}

function indexedChars (str){
  let addIndex = '';
  for (let i = 0; i < str.length ; i++) {
   const  char = str [i];
    addindex += char;
  }
  return addIndex;
}

function numberedChars (str){

}
function exclaim (str){
let output = "";
for (let char of str){
 if (char === '.' && char === '?'){
  char = "!";
  output += char;
 }
 return output;
}
}
function repeatIt (str, n){
let repeatStr = '';
let numOfRepetition = n;
for (let i = 0; i < n; i++){
  repeatStr += str;
 }
return repeatStr;
}


function truncate (str){

}

function ciEmailify (str){
let email = '';
for (let fullname of str){
  fullname = str + '@codeimmersives.com';
  email += fullname;
}
return email;
}


function reverse (str){
 let output = '';
 for (let i = str.length -1; i <= 0; i--){
output += str;
}
return output;
}

function onlyVowels (str){
  let newstr = '';
  for (const char of str){
    if (char === 'a' || char === "e" || char === "i" || char === 'o' || char === 'u'){
    newstr += char
    }
    return newstr;
  }

}
function crazyCase (str){
let 
}
function titleCase(){

}
function camelCase(){

}
function crazyCase2ReturnOfCrazyCase (){

}
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
