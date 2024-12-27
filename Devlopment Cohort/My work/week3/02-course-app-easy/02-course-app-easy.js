const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let Courses = [];

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  console.log("control here");
  console.log(username);
  console.log(password);
  const admin = ADMINS.find(
    (data) => data.username === username && data.password === password
  );
  if (admin) {
    next();
  } else {
    res.status(403).json({ message: "Admin authentication failed" });
  }
};

const userAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (data) => data.username === username && data.password === password
  );
  if (user) {
    next();
  } else {
    res.status(403).json({ message: "User Authentication Failed" });
  }
};

//admin routes
app.post("/admin/signup", (req, res) => {
  // logic to implement sign up in admin
  const admin = req.body; //whole data of a person got stored in the admin, not aonly name
  const existingAdmin = ADMINS.find((data) => data.username === admin.username);
  // we can also write it as existingAdmin == true
  if (existingAdmin) {
    res.json({ message: "Admin alredy exists" });
  } else {
    ADMINS.push(admin);
    res.json({ message: "Admin created Succcessfully" });
  }
});

app.post("/admin/login", adminAuthentication, (req, res) => {
  //logic to log in admin
  res.json({ message: "Logged in Successfully" });
});

app.post("/admin/courses", (req, res) => {
  //logic for admin login to courses
  const course = req.body;
  //for validation of course data to be correct or not
  //   if(!course.title){
  //     return res.json(411).send({message:'PLease write the title'})
  //   }
  course.id = Date.now(); //to use timestamp
  Courses.push(course);
  res.json({ message: "Course crreated successfully", courseID: course.id });
});
//put means upload
//path me upload
//post means data send

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  //logic to edit a course
  const courseID = parseInt(req.params.courseI); //Number(req.params.courseI); same thing
  const course = COURSES.find((c) => c.id === courseID);
  if (course) {
    // course.title = req.body.title;
    // course.price = req.body.price;
    // we can do it like one by one assigning values to every one orrr
    Object.assign(course, req.body); // it replaces in memeory data

    res.json({ message: "Course updated successfully" });
  } else {
    res.status(404).json({ message: "Course updated successfully" });
  }
});

app.get("/admin/courses", adminAuthentication, (req, res) => {
  res.json({ courses: COURSES });
});

//user side code

app.post("/users/signup", (req, res) => {
  //this code is same as the below 4 lines of code.
  const user = { ...req.body, purchasedCourses: [] };
  //   const existingUsers = USERS.find((data)=>data.username===USERS.username)
  //   if(existingUsers){

  //   }
  //   else{
  //     res.json({message:"Not a User, Please Signup First"})
  //   }
  //   const user ={
  //     usernaem: req.body.username,
  //     password: req.body.password,
  //     purchasedCouses:[],
  //   }
  USERS.push(user);
  res.json({ message: "User Created Sucessfully" });
});

app.post("/users/login", userAuthentication, (req, res) => {
  res.json({ message: "Logged in Successfully" });
});

app.get("/users/courses", userAuthentication, (req, res) => {
  let filteredCourses = [];
  for (let i = 0; i < COURSES.length; i++) {
    if (COURSES[i].published) {
      filteredCourses.push(COURSES[i]);
    }
  }
  res.json({ courses: COURSES.filter((c) => c.published) });
});
app.post("/users/courses/:courseId", userAuthentication, (req, res) => {
  const courseId = Number(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId && c.published);
  if (course) {
    //var username = req.headers["username"];
    //find the user in the users array
    //upload the user object
    //remove the old user object tot he USERS global array
    //add the new user object to the USERS global array.
    // can do the above things or do the thig below in one line
    req.user.purchsedCourses.push(courseId);
    res.json({ message: "Course Purchased Successfully" });
  } else {
    res.status(404).json({ message: "Course not found or not available" });
  }
});

app.get("/users/purchasedCourses", userAuthentication, (req, res) => {
  //const purchasedCourses = COURSES.filter(c=> req.user.purchasedCourses.includes(c.id));
  // can do the above thing or we can do the below thing

  //we need to extarct the complete course object from COURSES which are present 
  // in req.user.purchasedCOURSES
  var purchasedCourseIds = req.user.purchasedCourses;
  var purchasedCourses = [];
  for (let i = 0; i < COURSES.length; i++) {
    if (purchasedCourseIds.indexOf(COURSES[i].id !== -1)) {
      purchasedCourses.push(COURSES[i]);
    }
  }
  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
