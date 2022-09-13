const mongoose = require("mongoose")
const { Schema } = mongoose;
const userSchema = new Schema({
    first_name:{
        type: String,
        required: [true,"First name is required"],
        trim: true,
        text: true
    },
    last_name:{
        type: String,
        required: [true,"Last name is required"],
        trim: true,
        text: true
    },
    username:{
        type: String,
        required: [true,"Username name is required"],
        trim: true,
        text: true
    },
    email:{
        type: String,
        required: [true,"Email name is required"],
        trim: true,
        text: true
    },
    password:{
        type: String,
        required: [true,"First name is required"],
        
    },
    picture:{
        type: String,
        trim: true
    },
    cover:{
        type: String,
    },
    gender:{
        type: String,
        required:[true,"Gender is required"],
        trim:true
    },
    bYear:{
        type: Number,
        required:[true,"Year is required"],
        trim:true
    },
    bMonth:{
        type: Number,
        required:[true,"Month is required"],
        trim:true
    },
    bDay:{
        type: Number,
        required:[true,"Day is required"],
        trim:true
    },
    varified:{
        type: Boolean,
        default:false,
        
    },
    friends:{
        type: Array,
        default: []
    },
    following:{
        type: Array,
        default: []
    },
    followers:{
        type: Array,
        default: []
    },
    requests:{
        type: Array,
        default: []
    },
    search:[
       
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        }
        
    ],
    details:{
        bio:{
            type:String,

        },
        otherName:{
            type:String,

        },
        job:{
            type:String,

        },
        workplace:{
            type:String,

        },
        highSchool:{
            type:String,

        },
        currentCity:{
            type:String,

        },
        homeTown:{
            type:String,

        },
        relationship:{
            type:String,
            enum:["Single","In a Relationship","Married","Divorced"]
        },
        instagram:{
            type:String,

        },
       
    },
    savePosts:[
        {
            post:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"POST"
            },
            saveAt:{
                type:Date,
                default:new Date()
            }
        }
    ],
    
    
    
},
{ timestamps: true }
)

module.exports = mongoose.model("User", userSchema)