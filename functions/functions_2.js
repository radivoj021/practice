/* 1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false */

/* function check(txt) {
  if (typeof txt === "string") {
    console.log(true);
  } else {
    console.log(false);
  }
}

check("aaaaaaaaaaa");
 */

/* 2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false */

/* function check(str) {
  if (typeof str === "string" && str !== " ") {
    console.log(false + " this is full");
  } else if (typeof str && str === " ") {
    console.log(true + " empty string");
  } else if (typeof str === "number") {
    console.log(false + " Number");
  } else if (typeof str === "boolean") {
    console.log(false + " This is Boolean");
  }
}

check(true);
 */

/* 3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa" */

/* function haha(txt, num) {
  var res = "";
  for (var i = 0; i < num; i++) {
    res += txt;
  }
  console.log(res);
}

haha("Ha", 30);
 */

/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

/* function count(str, letter) {
  var niz = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      niz.push(str[i]);
    }
  }
  console.log("Slovo " + letter + " se pojavljuje " + niz.length + " puta.");
}

count("This is some random string at all, count letter appearance. ", "i");
 */

/* 5. Write a function to find the position of the first occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
the function should return -1. */

/* function find(txt, letter) {
  for (var i = 0; i < txt.length; i++) {
    if (txt[i] === letter) {
      console.log(txt.indexOf(txt[i]));
      break;
    }
  }
}

find("ababababababa", "a"); */

/* 6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

/* function find(txt, letter) {
  for (var i = txt.length - 1; i < txt.length; i--) {
    if (txt[i] === letter) {
      console.log(txt.indexOf(txt[i]));
    }
  }
}

find("ovo je neki txt", "x");
 */

/* 7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array. */

/* function convert(string) {
  var array = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      array.push('"null"');
    } else {
      array.push(string[i]);
    }
  }
  console.log(array);
}

convert("random is cool"); */

/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */

/* function prime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var prime = prime(10);
console.log(prime); */

/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
" */

/* function change(string, sep) {
  var output = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      output += "-";
    } else {
      output += string[i];
    }
  }
  console.log(output);
}

change("this is my string", "-");
 */

/* 11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */

/* function filter(array) {
  var array1 = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      array1.push(parseInt(array[i]));
    }
  }
  return array1;
}

var niz = ["1", "21", undefined, "42", "1e+3", Infinity];
var filter = filter(niz);
console.log(filter);
 */

/* 12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed. */

function dob(y, sex) {
  var d = new Date();
  var yearNow = d.getFullYear();
  var old = yearNow - y;

  if (sex === "male") {
    if (old < 65) {
      return "You (male) have " + (65 - old) + " more years";
    } else if (old >= 65) {
      return "You (male) are allready retired " + (old - 65) + " years ago";
    }
  } else if (sex === "female") {
    if (old < 60) {
      return "You (female) have " + (60 - old) + " more years";
    } else if (old >= 60) {
      return "You are (female) allready retired " + (old - 60) + " years ago";
    }
  }
}

var dob = dob(1960, "male");
console.log(dob);
