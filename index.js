#!/usr/bin/env node
console.log("Awesome Command");
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
console.log(__dirname)