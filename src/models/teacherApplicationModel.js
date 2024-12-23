const mongoose = require("mongoose");
const { isDate, isTime } = require("validator");

const teacherApplicationSchema = new mongoose.Schema({
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
   
  },
  resume_link: {
    type: String,
    required: true,
  },
  approval_status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  state: {
    type: String,
    required: true,
  },
   teacher_name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  date_applied: {
    type: Date,
    default: Date.now,
  },
  date_approved: {
    type: Date,
  },
  current_position: {
    type: String,
    required: true,
  },
  language: {
    type: String,
   
  },

  profileImage:{
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: String,
    // required: true,
  },
  experience: {
    type: String,
    // required: true,
  },
  qualifications: {
    type: String,
    // required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  bio: {
    type: String,
    // required: true,
  },
  class_id:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  }],
  subject_id:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  }]
  ,
  board_id:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Board",
    required: true,
  },
  // teacher_availability: {
  //   type: Date,
  //   required: true,
  // },
});

module.exports = mongoose.model("TeacherApplication", teacherApplicationSchema);
