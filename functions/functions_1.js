/* 2. Write a program that checks if a given number is odd. */

/* function check(a) {
  var res = "";
  if (a % 2 === 0) {
    res = "Odd";
  } else {
    res = "Even";
  }

  console.log(res);
}

check(10);
check(11);
check(12); */

/* 
3. Write a program that checks if a given number is a three digit long number. */

/* function check(a) {
  var res = "";
  if (a > 99 && a < 1000) {
    res = "Three digit";
  } else {
    res = "not three";
  }
  console.log(res);
}

check(10);
check(100);
check(1000);
 */

/* 4. Write a program that calculates an arithmetic mean of four numbers. */

/* function calc(a, b, c, d) {
  var res = "";
  var z = a + b + c + d;

  res = z / 4;
  console.log(res);
}

calc(20, 30, 40, 10);
 */

/* 5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
***** */

/* function stars(a, b) {
  var res = "";

  for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
      if (i > 0 && i < a - 1) {
        if (j > 0 && j < b - 1) {
          res += " ";
        } else {
          res += "*";
        }
      } else {
        res += "*";
      }
    }
    res += "\n";
  }

  console.log(res);
}

stars(10, 12);
 */

/* 6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * */

/* function three(a, b, c) {
  var res1 = "";
  var res2 = "";
  var res3 = "";

  for (var i = 0; i < a; i++) {
    res1 += "*";
  }
  for (var j = 0; j < b; j++) {
    res2 += "*";
  }
  for (var x = 0; x < c; x++) {
    res3 += "*";
  }

  console.log(res1);
  console.log(res2);
  console.log(res3);
}

three(7, 3, 10);
three(1, 3, 5);
three(50, 30, 50);
 */

/* 7. Write a program that calculates a number of digits of a given number. */

/* function calc(a) {
  var num = a;
  var number = String(a);
  var niz = [];
  var res = 0;

  for (var i = 0; i < number.length; i++) {
    niz.push(parseInt(number[i]));
  }

  for (var i = 0; i < niz.length; i++) {
    res += niz[i];
  }

  console.log(res);
}

calc(123456);
calc(123);
calc(88888);
 */

/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

/* function count(num) {
  var niz = [2, 4, 7, 8, 7, 7, 1, 4, 1, 2, 3, 4, 5, 6, 7, 8];
  var e = num;
  var niz2 = [];
  var res = "";
  for (var i = 0; i < niz.length; i++) {
    if (niz[i] === e) {
      niz2.push(niz[i]);
    }
  }

  res = niz2.length;

  console.log("Broj " + e + " ponavlja se " + res + " puta");
}

count(7);
 */

/* 9. Write a program that calculates the sum of odd elements of a given array. */

/* var niz = [1, 3, 4, 5, 6, 7, 8, 9, 11];

function calc(array) {
  var res = 0;

  for (var i = 0; i < niz.length; i++) {
    if (niz[i] % 2 === 0) {
      res += niz[i];
    }
  }

  console.log("Broj parnih brojeva je " + res);
}

calc(niz); */

/* 10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A . */
/* 
var str =
  "Write a program that calculates the number of appearances of a letter a in a given string..";
var b = "n";

function count(letter, txt) {
  var array = [];
  for (var i = 0; i < txt.length; i++) {
    if (txt[i] === b) {
      array.push(str[i]);
    }
  }

  console.log(
    "The number of appearances of a letter " + letter + " is " + array.length
  );
}

count(b, str);
 */

/* 11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc. */

/* var aaa = "abc";
var sss = 4;
var res = "";

function conc(txt, num) {
  for (var i = 0; i < num; i++) {
    res += txt;
  }

  console.log(res);
}

conc("hah", 30);
 */
