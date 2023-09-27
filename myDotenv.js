
const fs = require('fs')


function config(){

    const obj = {}
        const data = readEnvFile()
        const res = data.split('\n')
        for(let i=0; i<res.length; i++){
            const eachOne = res[i].split('=')
            if(eachOne.length> 1){
                console.log(typeof eachOne[0])
                obj[eachOne[0].trim()] = eachOne[1].trim()
            }
        }
        process.env = {...process.env, ...obj}
}

function readEnvFile(){
    return fs.readFileSync('./.env', 'utf-8', (err, data)=>{
        if(err) throw err
        return data
    })
}

module.exports = {config}

