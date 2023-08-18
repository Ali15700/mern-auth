const User = require('../models/user');

const test = (req,res) => {

        res.json('test is working')
}
const registerUser = async (req,res) => {

      try{
            
            const {name,email,password} = req.body;
            // check if the name was entered i
            if(!name){
                  return res.json({
                        error: 'Name is required'
                   })
            }
             // check if the password was entered 
             if(!password || password.length < 6){
                  return res.json({
                        error: 'Password must be at least 6 characters and required'
                   })
            }
             // check if the email was enter
                  const exist = await User.findOne({ email});
             if(exist){
                  return res.json({
                        error: 'Name is required'
                   })
            }

                  const user = await User.create({ 
                        name,email,password })
                  return res.json(user);
      }
      catch(err){
            console.log(err);
      }
      
}


module.exports = {
      test,
      registerUser,
}