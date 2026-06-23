import users from "../models/userModel.js";

export const registerUser = (req,res) => {
   const {username, password} = req.body;
   if(!username || !password){
      return res.status(400).json({message:"All fields are required"})
   }

   const userExists = users.find((user) => user.username === username)
   if(userExists){
      return res.status(400).json({message:"User already exists."})
   }

   const newUser = {
      id:users.length+1,
      username,
      password
   }
   users.push(newUser)
   res.status(201).json({message:"User registered."})
};

export const loginUser = (req, res) => {
   const {username, password} = req.body
   const user = users.find((u) => user.username === username && user.password === password)

   if(!user){
      return res.json({message:"Invalid credentials!"})
   }

   const token = `user-${user.id}`
   
   res.json({message:"Login successful",token})
}
