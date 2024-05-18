import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoutes = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({error : "unothorized user"});
        }
       const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
       if(!decoded){
          res.status(401).json({error : "unothorized invalid token"});
       }

      const user = await User.findById(decoded.userId).select("-password");

       if(!user){
        res.status(404).json({error : "user not found"});
       }

       req.user = user;
          
       next();

    } catch (error) {
         console.log(error);
         res.status(500).json({error:"error in protectroute middleware"});
    }
}

export default protectRoutes;
