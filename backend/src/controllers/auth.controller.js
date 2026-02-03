import { User } from '../models/user.model.js';

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
  
        //Needs basic validation

        if(!username || !email || !password) {
          return res.status(400).json({ message: "All fields are required" });
        }
        
        //Checks for existing user

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
          return res.status(409).json({ message: "User already exists" });
        }

        //Create new user

        const newUser = await User.create({
          username,
          email: email.toLowerCase(),
          password,
          loggedIn: false
        });
        res.status(201).json({ message: "User registered successfully", userId: newUser._id, email: newUser.email, username: newUser.username});
} catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
const loginUser = async (req, res) => {
  try {
    
    //checking if the user already exists
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) return res.status(404).json({ message: "User not found" }); 
  
    //checking if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }



  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export { registerUser, loginUser };