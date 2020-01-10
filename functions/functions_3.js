/* 1. Write a program to insert a string within a string at a particular position (default is 1,
    beginning of a string).
    "My random string", "JS " -> "JS My random string"
    "My random string", "JS ", 10 -> "My random JS string" */

/* function add(string, added, pos) {
  var a = string.slice(0, pos);
  var b = added;
  var c = string.slice(pos);
  var d = a + " " + b + " " + c;
  console.log(d);
}

var str = "This is my random string";
add(str, "JS", 10);
 */
/* 
var array = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9];

function remove(niz) {
  var b = [];
  for (var i = 0; i < niz.length; i++) {
    if (b.indexOf(niz[i]) === -1) {
      b.push(niz[i]);
    }
  }
  console.log(b);
}

remove(array);
 */

/* 2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity. */

/* var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function string(niz) {
  var res = "";
  for (var i = 0; i < niz.length; i++) {
    if (typeof niz[i] === "number" && niz[i] !== NaN) {
      res += niz[i];
    }
  }
  console.log(res + " " + typeof res);
}

string(array);
 */

/* 3. Write a program to filter out falsy values from the array .
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */

/* var niz = [NaN, 0, 15, false, -22, "", undefined, 47, null];
var niz1 = [];
var nan = NaN;

for (var i = 0; i < niz.length; i++) {
  if (typeof niz[i] === "number" && isNaN(niz[i]) === false) {
    niz1.push(niz[i]);
  }
}

console.log(niz1);
 */

/* 4. Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number
 */

/* function reverse(num) {
  var numStr = num.toString();
  var res = "";

  for (var i = numStr.length - 1; i >= 0; i--) {
    res += parseInt(numStr[i]);
  }
  var rez = parseInt(res);

  return rez;
}

var num2 = reverse(54321);
console.log(num2);
 */

/* 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the
last 'n' elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] */

/* var niz = [7, 9, 0, -2];
var array = [];

for (var i = niz.length - 1; i >= 0; i--) {
  array.push(niz[i]);
}

console.log(array);
 */
