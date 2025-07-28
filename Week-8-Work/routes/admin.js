const {Router} = require('express');
const adminRouter = new Router();

adminRouter.use(admiMiddleware)

adminRouter.post("/signup", function(req,res){
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("signin", function(req,res){
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/course", function(req,res){
    res.json({
        message: "See all the courses"
    })
})

adminRouter.put("/updatecourse", function(req,res){
    res.json({
        message: "course editing route"
    })
})
adminRouter.get("/course/bulk", function(req,res){
    res.json({
        message: "to see all the created coursese by the admin"
    })
})

module.exports = {adminRouter}