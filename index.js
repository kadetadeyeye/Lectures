/**
 * Arrays are special variables that can hold multiple value at once.
 * They are special type of object. Arrays are like containers that holds
 * multiple items at once. We have different types of Array methods.
 * 1. Push() 2. Pop() 3. unshift() 4. shift() 5. reverse() 6. sort()
 * 7. indexOf 8. lastIndexOf() etc
  */


var colors = ["blue","green"]
 //To append indigo to the end
 colors[2] = ["indigo"]; /**or */ colors.push("indigo");
console.log(colors);

//replace the middle with red

colors.splice(Math.floor(colors.length/2), 1, "red")

console.log(colors);

//To remove the first element from array
colors.shift()
console.log(colors);
//To prepnd new colors
colors.unshift("gold","orange")
console.log(colors);


