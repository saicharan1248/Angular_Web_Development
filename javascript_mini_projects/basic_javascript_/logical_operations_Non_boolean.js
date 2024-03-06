//  falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

let usercolor = undefined;
let customercolor = "blue";

let currentcolor = usercolor || customercolor;
console.log(currentcolor); // red

// （Short-Circuiting Operators）
