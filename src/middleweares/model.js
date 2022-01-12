const fs = require('fs')
const path = require('path')

const model = (req,res,next) =>{
    req.select = function(filename){
        let files = fs.readFileSync(path.join(process.cwd(),"src","database",filename+".json"))
        files = files ? JSON.parse(files):[]
        return files
    }
    return next()
}



module.exports = model