process.stdout.write('hello from spinner2.js... \rheyyy\n');
const array =  ['|', '/', '-', '\\','|', '/', '-', '\\','|'];

let timeDelay = 0;
for (const char in array){
   setTimeout(() => {
     process.stdout.write(`\r${array[char]}   `);
   },timeDelay);
   timeDelay+=200;

}

setTimeout(() => {
  console.log('');
}, 2000);
