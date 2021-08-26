import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String
        },
        address: [{
            detail: { type: String },
            for: { type: String }
        }],
        phoneNumber: {
            type: Number
        }

    },
    { timestamps: true }
);



// statics and methods


// to check whether user already exist
UserSchema.statics.findByEmailAndPhone = async ({email, phoneNumber}) => {
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
       throw new Error("user already exist!");
    }
};

// generate JWT tokens

UserSchema.methods.generateJwtTokens = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoAPP");
  };


// check user using email and password 
 UserSchema.statics.findByEmailAndPassword = async ({email, password}) => {
    //  check email exist
    const user = await UserModel.findOne({ email });
    if(!user) throw new Error("user does not exist!");

    // compare password
    const doesPasswordMatch = await bcrypt.compare(password,user.password);
    if(!doesPasswordMatch) throw new Error("INVALID password!!!");
    
    return user;
 }



//state functions
UserSchema.pre("save",function(next){//running the function at save state  that is during "create"
    const user = this;
    //hashing the password

    // password is not  modified
    if(!user.isModified("password")) return next();

    // password is modified
    bcrypt.genSalt(8 , (error,salt)=> {
        if (error) return next(error);//checking error

        // hash the password
        bcrypt.hash(user.password ,salt,(error,hash)=>{
            if (error) return next(error);//checking error

            //assigning hashed password to password
            user.password = hash;
            return next();
        })
    });
});


export  const UserModel = mongoose.model("Users", UserSchema);