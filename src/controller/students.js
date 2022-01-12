const GET = (req,res,next) =>{
    try{
        const { userId } = req.params
        const { page = 1,limit = 5} = req.query

        let students = req.select('users')
        if(userId){
            const stud = students.find(student => student.id == userId)
            return res.json(stud)
        }
        else{
            const paginated = students.slice(limit*page-limit,limit*page)
            return res.json(paginated)
        }


        return res.json(students)
    }
    catch(error){
        next(error)
    }
}


module.exports = {
    GET
}