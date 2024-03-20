const User = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');


const signUp = async (req, res, next) => {
    try {
        const {name, email, password} = new User(req.body);
        const hash =bcrypt.hashSync(password,saltRounds);
        const user = new User({
            name,
            email,
        password:hash
    })
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error("Error in signUp:", error);
        res.status(500).send("Internal Server Error");
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(401).send("Invalid Email");
        } else {
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (passwordMatch) {
                const token = jwt.sign({ email: user.email, name:user.name, role:user.role },process.env.JWT_SECRET_KEY );
                res.cookie('token', token , {httpOnly:true})
                res.send("Jwt send")
            } else {
                res.status(401).send("Invalid Password");
            }
        }
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).send("Internal Server Error");
    }
};


const status = async(req,res,next)=>{
    try{
        if(req.user.role === req.body.role){
            res.status(200).send("User is logged in")
        }
     else{
        res.status(401).send("Unauthoried access")
     }
    }catch(error){
        res.status(401).send("Unauthoried access")
    }
}

const protect =async(req, res ,next)=>{

    try {
        const token = req.cookies.token
       
        if(token){
         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
         req.user= decoded
         next()
        }else{
         res.status(401).send("Unauthoried access")
        }
    } catch (error) {
        res.status(401).send("Unauthoried access")
    }
}

const hasRole = (role)=>{
    return async (req,res,next)=>{
        try {
            const user =req.user;
            if(user.role === role){
                next()
            }
            else{
                res.status(401).send("Unauthorized access");
            }
        } catch (error) {
            res.status(401).send("Unauthorized access");
        }
    }
}

const logout =async( req,res ,next) =>{
    try {
        res.cookie('token', '' , {httpOnly:true , maxAge:-1})
        res.send("Logged out")
    } catch (error) {
        res.status(401).send("Unauthorized access");
    }
}

module.exports ={
    signUp,
    login,
    status,
    protect,
    hasRole,
    logout
}