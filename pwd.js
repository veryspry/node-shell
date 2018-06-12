
function pwd(cmd) {

  if (cmd === 'pwd') {
      process.stdout.write(process.cwd());
  } else {
      process.stdout.write('You typed: ' + cmd);
  }
}


module.exports.pwd = pwd;
