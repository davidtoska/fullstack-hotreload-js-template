require("babel-runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");
// @ts-ignore
require("./main.css");
// @ts-ignore
require("./index.html");
console.log("yalla yalla asdfasdf");

const a = async () => {
  await console.log("hello from the future");
  console.log("Done");
};

a();
