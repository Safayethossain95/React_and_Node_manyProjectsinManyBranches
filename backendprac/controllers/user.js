const { emailValidation, lengthValidation } = require("../helpers/validation.js");
const User = require("../models/User.js")
const bcrypt = require('bcrypt');
exports.register = async(req, res) =>{
   try{
    const {
        first_name,
        last_name,
        username,
        email,
        password,
        gender,
        bYear,
        bMonth,
        bDay

    } = req.body

    if(!emailValidation(email)){
        return res.status(400).json({message:"invalid email address"})
    }

    const check = await User.findOne({email})

    if(check){
        return res.status(400).json({message:"this email already exists. try another email."})
    }

    if(!lengthValidation(first_name,3,30)){
        return res.status(400).json({message:"first name must be between 3 and 30 character"})
    }
    if(!lengthValidation(last_name,3,30)){
        return res.status(400).json({message:"last name must be between 3 and 30 character"})
    }
    if(!lengthValidation(password,6,40)){
        return res.status(400).json({message:"password must be between 6 and 40 character"})
    }

    const cryptPassword = await bcrypt.hash(password,12)
    console.log(cryptPassword)
    return;
    const user = await new User({
        first_name,
        last_name,
        username,
        email,
        password,
        gender,
        bYear,
        bMonth,
        bDay
    }).save()

    res.json(user)
   }
   catch(error){
    res.status(500).json({message:error.message})
   }
}