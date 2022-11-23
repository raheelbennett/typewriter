const sentence = "hello there from lighthouse labs";

//Our goal is to animate the sentence, revealing one character at a time. This would make it look as though it is being typed in by someone, as shown in the GIF above.


//Let's loop through each character of the string and output it to the console.
//process.stdout.write will not add a new line at the end of each character unlike console.log()
let timer = 0;
for (const char of sentence) {
  timer += 50; // the timer will increment by 50 ms on each iteration
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
}


//This code will be queued with the value of timer after all the iterations of the dor loop
setTimeout(() => {
  process.stdout.write('\n');
}, timer + 50);