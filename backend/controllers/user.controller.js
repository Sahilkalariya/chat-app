import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res) =>{
    try {
       const loggedInUserId = req.user._id;
       const filteredUsers = await User.find({_id: {$ne : loggedInUserId}});
       res.status(200).json(filteredUsers);
    } catch (error) {
        console.log(error + "in getusersidebar");
        res.status(500).json({error : "internal server error"})
    }
}