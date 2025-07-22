const express = require('express')
const app = express()
const port = 3000

//Post  endpoints to ceate something
app.post("/user/signup", function(req,res){
    res.json({
        message: "signup endpoint"
    })
})
app.post("/user/signin", function(req,res){
    res.json({
        message: "signin endpoint"
    })
})

//Get endpoints to get the data
app.get("/allcourses", function(req,res){
    res.json({
        message: "Endpoint to get all the courses"
    })
})

app.get("/user/purchases", function(req,res){
    res.json({
        message:"Courses Purchased by the user"
    })
})

//When user try to purchase a course
app.post("/course/purcahse", function(req,res){
    res.json({
        message:"Try To purchase something"
    })
})


app.listen(3000);