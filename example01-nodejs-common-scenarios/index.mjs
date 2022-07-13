
const stdin = process.stdin
.on('data', msg => console.log('terminal input was', msg))

const stdout = process.stdout
.on('data', msg => console.log(msg.toString().toUpperCase()))

stdin.pipe(stdout)