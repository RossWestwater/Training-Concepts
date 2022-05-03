// my way to do this...

var romanToInt = function(s) {
  let newTotal = 0 
  let addMe = []
  if (s.includes("IV", 0)) {
    addMe.push(-2)
  }
  if (s.includes("IX", 0)) {
    addMe.push(-2)
  }
  if (s.includes("XL", 0)) {
    addMe.push(-20)
  }
  if (s.includes("XC", 0)) {
    addMe.push(-20)
  }
  if (s.includes("CD", 0)) {
    addMe.push(-200)
  }
  if (s.includes("CM", 0)) {
    addMe.push(-200)
  }
  const splitMe = s.split("")
  splitMe.forEach(element => {
    switch (element) {
      case "I":
        addMe.push(1);
        break;
      case "V":
        addMe.push(5);
        break;
      case "X":
        addMe.push(10);
        break;
      case "L":
        addMe.push(50);
        break;
      case "C":
        addMe.push(100);
        break;
      case "D":
        addMe.push(500);
        break;
      case "M":
        addMe.push(1000);
        break;

      default: null
        break;
    }
  });
  for (let i = 0; i < addMe.length; i++) {
    let total = addMe[i] + newTotal;
    newTotal = total
  }
  return newTotal;
};
romanToInt("XIV")

// the "proper/efficient" way to do this...

var romanToInt = function(s) {
  let romanVal = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
  };
  let result = 0;
  if (s === '') return;
  let inputs = Array.of(...s);
  let inputsVal = [];
  inputs.map((e) => ((e = romanVal[e]), inputsVal.push(e)));
  for (let i = 0; i < inputsVal.length; i++) {
  inputsVal[i] < inputsVal[i + 1] ?
  (result -= inputsVal[i]) :
  (result += inputsVal[i]);
  }
  return result;
  };
  romanToInt('III');