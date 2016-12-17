var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var UsersSchema = new Schema({

  email: {
    type: String,
    required: [true, "Email is required"],
    trim:true,
    unique: true
  },
  first_name: {
    type: String,
    required: [true, "First name is required"],
    trim: true
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function( value){
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value )
      },
      message: "Password failed validation, you must have at least 1 number, uppercase, and special characters"
    }
  },
  birthday: {
    type:Date,
    required: [true, "Birthday is a required field!"]
  }
},{timestamp:{
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}})


var Friend = mongoose.model("User", UsersSchema)
console.log('Registered Users model');
