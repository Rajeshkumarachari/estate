import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?t=st=1726547719~exp=1726551319~hmac=5b77a9aacb2898cc9f7122aa2bb8c281f3bb40001b7a13db89b3af89d637d823&w=740",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
