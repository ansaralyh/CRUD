var Userdb = require('../model/model');



//create and save new user


exports.create = async (req, res) => {

    if(!req.body)
    {
        res.status(400).send({message : "Content can not be empty!"});
        return;
    }

    //new user  

    try {
        const user = {
            name :req.body.name,
            email:req.body.email,
            gender:req.body.gender,
            status:req.body.status
        
        }
        
        const createdUser = await Userdb.create(user)

        res.status(200).json({
            success:true,
            user:createdUser
        })
        
    } catch (error) {
        // console.log(error)
        res.status(500).json({
            success:false,
            error:error.message
        })
    }


}



//retrieve and return all users / single user


exports.getAllUsers = async (req, res) => {
    try {
      const users = await Userdb.find();
  
      res.status(200).json({
        users
      });
    } catch (error) {
      // console.log(error)
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  };
  

//update a new identified user

exports.getSingleUser = async (req,res)=>{
   
    try {

        const user = await Userdb.findById(req.params.id)
        if(!user){
            res.status(404).json({
                success:false,
                message:'User not found'
            })
        }

        else{
            res.status(200).json({
                success:true,
                user
            })
        }
        
        
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}







// delete a user
exports.delete = async (req, res) => {
  try {
    const {id} = req.params
    const user = await Userdb.findById(id);
    
    console.log(user)
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
    } else {

      await Userdb.findByIdAndDelete(id)
      // await user.remove();
      // Userdb.findByIdAndUpdate()
      res.status(200).json({
        success: true,
        message: 'User deleted successfully'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }  
};




//  update user



exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const user = await Userdb.findByIdAndUpdate(id, updates, { new: true });

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User updated successfully',
        user
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
