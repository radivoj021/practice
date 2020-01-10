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

var niz = [NaN, 0, 15, false, -22, "", undefined, 47, null];
var niz1 = [];
var nan = NaN;

for (var i = 0; i < niz.length; i++) {
  if (typeof niz[i] === "number" && isNaN(niz[i]) === false) {
    niz1.push(niz[i]);
  }
}

console.log(niz1);
