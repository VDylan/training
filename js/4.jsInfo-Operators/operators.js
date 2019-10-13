let a = 1, b = 1;

let c = ++a;
let d = b++;

alert(a); // 2
alert(b); // 2
alert(c); // 2
alert(d); // 1

/* ============================== */
let a = 2;

let x = 1 + (a *= 2);

// a = 4
// x = 5