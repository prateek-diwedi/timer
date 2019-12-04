//const args = process.argv.slice(2);
// let bString = parseInt(args[1]);
// let cString = parseInt(args[2]);
// function compareNumbers(a, b) {
//   return a - b;
// }
// const compare = function(a, b) {
//   if (a.length < b.length) {
//     return -1;
//   }
//   if (a.length > b.length) {
//     return 1;
//   }
//   if (a < b){
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// }
// let numbers = args.sort((a, b) => a - b);
const args = process.argv.slice(2);
for (const time of args) {
  const numTime = Number(time);
  if (Number.isNaN(numTime)) {
    // console.log("cannot timer with time =", time)
    continue
  } else {
    const f = () => {
      process.stdout.write('\x07');
    }
    setTimeout(f, numTime * 1000);
  }
}