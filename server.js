const { config } = require("./myDotenv")

config()


console.log(process.env.GOOD)

console.log('server.js file is running')