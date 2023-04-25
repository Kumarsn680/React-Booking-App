import { createCustomError } from "./customError.js"
import jwt from 'jsonwebtoken'


const checkAuth = (req,res,next) =>{
    const access_token = req.cookies.access_token

    if(!access_token) return next(createCustomError(401,"You are not Autherized"))
    try {
    const decoded = jwt.verify(access_token, process.env.JWT);
    req.decoded = decoded  
    next()      
    } catch (error) {
        return next(error)
    }
}


const verifyUser = (req,res,next) => {
    checkAuth(req,res,()=>{
        if(req.decoded.id === req.params.id || req.decoded.isAdmin === true){
            next()
        }else{
             return next(createCustomError(403,"You cannot delete this account"))
        }
    })
}

const verifyAdmin = (req, res, next) => {
  checkAuth(req, res, () => {
    if (req.decoded.isAdmin === true) {
      next();
    } else {
      return next(createCustomError(403, "You cannot delete this account"));
    }
  });
};

export {checkAuth,verifyUser,verifyAdmin}