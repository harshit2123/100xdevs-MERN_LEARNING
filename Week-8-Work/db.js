const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.type.ObjectId;

const userSchema = Schema({
   email : {type:String, unique: true},
   password: String,
   firstName: String,
   lastName: String,
});

const adminSchema = Schema({
   email : {type:String, unique: true},
   password: String,
   firstName: String,
   lastName: String,
});

const courseSchema = Schema({

});

const purchaseSchema = Schema({

});

const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", adminSchema);
const courseModel = mongoose.Model("admin", courseSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);