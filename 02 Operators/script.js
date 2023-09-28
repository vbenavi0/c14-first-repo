let x = 5; y = 10;
console.log('X:  '+x);
console.log('Y:  '+y);
x = y;
console.log('X:  '+x);
console.log('Y:  '+y);
x += y;
console.log('X:  '+x);
console.log('Y:  '+y);
x-= y;
console.log('X:  '+x);
console.log('Y:  '+y);
x *= y;
console.log('X:  '+x);
console.log('Y:  '+y);
x /= y;
console.log('X:  '+x);
console.log('Y:  '+y);
x%=y;
console.log('X:  '+x);
console.log('Y:  '+y);

let markM1 = 78;
let markH1 = 1.69;

let johnM1 = 92;
let johnH1 = 1.95;

let markBMI1 = markM1/(markH1*markH1);
let johnBMI1  = johnM1/(johnH1*johnH1);

let markHigherBMI = markBMI1>johnBMI1;

console.log('Mark BMI: '+markBMI1);
console.log('John BMI: '+johnBMI1);
console.log('Does mark have a higher BMI than john?: '+markHigherBMI);

let markM2 = 95;
let markH2 = 1.88;

let johnM2 = 85;
let johnH2 = 1.76;

let markBMI2 = markM2/(markH2*markH2);
let johnBMI2  = johnM2/(johnH2*johnH2);

markHigherBMI = markBMI2>johnBMI2;

console.log('Mark BMI: '+markBMI2);
console.log('John BMI: '+johnBMI2);
console.log('Does mark have a higher BMI than john?: '+markHigherBMI);