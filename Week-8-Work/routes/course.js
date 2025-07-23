// function createCourseRoutes(app){

//     app.post("/course/purcahse", function(req,res){
//         res.json({
//             message:"Try To purchase something"
//         })
//     }),

//     app.get("/course/preview", function(req,res){
//         res.json({
//             message: "Endpoint to get all the courses"
//         })
//     })

// }

// module.exports = {
//    createCourseRoutes: createCourseRoutes
// }

const { Router } = require('express');
const courseRouter = Router();

courseRouter.post("/course/purchase", function(req,res){
    res.json({
        message: "Course purchased"
    })
})

courseRouter.get("/course/preview", function(req,res){
    res.json({
        message: "Course Preview"
    })
})

module.exports = {courseRouter}