//const args = process.argv.slice(2);
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
let makeBeep = function(){
  process.stdout.write('\x07'); 
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
stdin.on('data', (key) => {
  //console.log(Number(key));
  if (key === 'b') {
    makeBeep();
  }
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!')
    process.exit();
  } 
  if (numbers.includes(Number(key))) {
    const f = () => {
      makeBeep(); 
    }
      setTimeout(f, key * 1000);
  } 
});