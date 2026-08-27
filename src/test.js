const greet = require("./src/app");

const expected = "Hello, Test!";
const result = greet("Test");

if (result === expected) {
  console.log("✅ Test passed");
  process.exit(0); // الخروج بنجاح
} else {
  console.error(`❌ Test failed! Expected "${expected}" but got "${result}"`);
  process.exit(1); // الخروج بكود خطأ ليُفشل الـ Action إذا لم يتطابق
}
