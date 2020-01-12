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

/* 6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

/* function array(n, val) {
  var niz = [];
  for (var i = 0; i < n; i++) {
    if (val === undefined) {
      val = null;
      niz.push(val);
    } else {
      niz.push(val);
    }
  }
  return niz;
}

var array = array(3);
console.log(array); */

/* 7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself). */
/* 
function sum(n) {
  var res = 0;
  for (var i = 0; i <= n; i++) {
    if (n % i === 0) {
      res += i;
    }
  }
  console.log(n);
  if (res / 2 === n) {
    console.log("Number is perfect");
  } else {
    console.log("Number is not");
  }
}

sum(496);
 */

/* 8. Write a function to find a word within a string.
'The quick brown fox', 'fox' -> "'fox' was found 1 times"
' a, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times" */

/* function search(text, word) {
  var x = 0,
    y = 0;

  for (var i = 0; i < text.length; i++) {
    if (text[i] == word[0]) {
      for (j = i; j < i + word.length; j++) {
        if (text[j] == word[j - i]) {
          y++;
        }
        if (y == word.length) {
          x++;
        }
      }
      y = 0;
    }
  }
  return word + " was found " + x + " times.";
}

var txt = "this is fox is this fox";
var l = "fox";
var search = search(txt, l);
console.log(search);
 */

/* 9. Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

/* function protect(email) {
  var avg, splitted, part1, part2;
  splitted = email.split("@");
  part1 = splitted[0];
  avg = part1.length / 2;
  part1 = part1.substring(0, part1.length - avg);
  part2 = splitted[1];

  return part1 + "...@" + part2;
}

var protect = protect("rapic.021@gmail.com");
console.log(protect);
 */

/* 10. Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
 */
/* [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3] */

var array = ["a", "s", "d", "f", "g", "a"];
var m = 0;
for (var i = 0; i < array.length; i++) {
  for (var j = i; j < array.length; j++) {
    if (array[i] === array[j]) {
      m++;
    }
  }
}

console.log(m);
