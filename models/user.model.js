import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    maxLength: [225, "Your password cannot exceed 225 characters"],
    minLength: [6, "Your password should be contain minimum 6 characters"],
  },
  confirmPassword: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    validate: {
      validator: function(value) {
        return value === this.password;
      },
      message: 'Passwords do not match'
    }
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

      isAdmin: {
        type:Boolean,
        default:false
      }


      
  
});

const user = mongoose.model("User", userSchema);
export default user;
