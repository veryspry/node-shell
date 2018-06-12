const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
process.stdout.write('prompt > ');


process.stdin.on('data', (data) => {
  const cmd = data.toString().split(' ')[0].trim();
  const arg = data.toString().split(' ')[1].trim();
  console.log(arg);

  if (cmd === 'pwd') {
    pwd(cmd);
  } else if (cmd === 'ls') {
    ls(cmd);
  } else if (cmd === 'cat') {
    cat(cmd, arg);
  } else {
    process.stdout.write('You wrote: ' + cmd);
    process.stdout.write('\nprompt > ');
  }


  // process.stdout.write('\nprompt > ');
})
