const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const userModel = require("../models/userModel");

//registerCtrl
const registerCtrl = async (req, res) => {
    console.log('okay');
    console.log(req);
    console.log(req.body);
    try{
       const { name, email, password, contact, address, sport } = req.body;
       if(!name){
        return res.status(201).send({success : false, message : 'name is required'});
       }else if(!email){
        return res.status(201).send({success : false, message : 'email is required'})
       }else if(!password){
        return res.status(201).send({success : false, message : 'password is required'})
       }else if(!contact){
        return res.status(201).send({success : false, message : 'contact is required'})
       }else if(!address){
        return res.status(201).send({success : false, message : 'address is required'})
       }else if(!sport){
        return res.status(201).send({success : false, message : 'sport is required'})
       }

       const existingUser = await userModel.findOne({email : req.body.email});
       if(existingUser){
        return res.status(201).send({success : false, message : 'User already exists!'})
       }else{
        const password = await req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const user = new userModel({...req.body});
        await user.save();
        res.status(200).send({success : true, message : 'Registered Successfully'});
       }
    }catch(error){
        return res.status(500).send({success : false, message : `Error in registerCtrl : ${error.message}`});
    }
}

//loginCtrl
const loginCtrl = async (req, res) => {
    try{
        const { email, password } = req.body;
        if(!email){
            return res.status(201).send({success : false, message : 'email is required'})
        }else if(!password){
            return res.status(201).send({success : false, message : 'password is required'})
        }

        const user = await userModel.findOne({email : req.body.email});
        if(!user){
            return res.status(201).send({success : false, message : `User doesn't exist, Sign up!`})
        }else{
            const isPasswordMatched = await bcrypt.compare(password, user.password)
            if(!isPasswordMatched){
                return res.status(201).send({success : false, message : 'Invalid credentials'})
            }else{
                const token = JWT.sign({id : user._id}, process.env.JWT_SECRETKEY, {expiresIn : "7d"});
                return res.status(200).send({success : true, message : 'Login Successful', user, token});
            }
        }
    }catch(error){
        return res.status(500).send({success : false, message : `Error in loginCtrl : ${error.message}`})
    }
}

module.exports = { loginCtrl, registerCtrl }