import users from "../models/userModel.js"

export const protect = (req,res,next) => {
   const token = req.headers.authorization
   if(!token){
    return res.json({message:"no token!"})
   }

   const userId = token.split("-")[1]

   const user = users.find((u) => u.id === userId)

   if(!user){
    return res.json({message:"Invalid token"})
   }

   req.user = user
   next()
} 