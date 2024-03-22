// let name1 = "Musaib";
// let split = name1.split("").reverse().join("");
// console.log(split);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let a = array.splice(3, 1, 22);
// console.log(array);

// let funsction = (a) => {
//   new Promise((resolve, reject) => {
//     if (a) {
//       resolve(console.log("reject"));
//     } else {
//       reject(console.log("reject"));
//     }
//   });
// };
// funsction(true);

// let ref = document.getElementById("id");

// ref.addEventListener("click", () => {
//   console.log("clicked");
// });
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(20));
