function greet(name) {
  return `Hello, ${name}!`;
}

// 👈 تصحيح module بدلاً من model
module.exports = greet;

// if (require.main === module) {
//   console.log(greet("World"));
// }
