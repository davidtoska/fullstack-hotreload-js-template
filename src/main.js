require("babel-runtime/regenerator");
// @ts-ignore
require("./main.css");
// @ts-ignore
require("./index.html");
console.log("hello world 2asdf ");
console.log("yalla yalla");

const a = async () => {
  await console.log("hello from the future");
  console.log("Done");
};

a();
