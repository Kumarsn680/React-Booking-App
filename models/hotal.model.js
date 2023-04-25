import mongoose, {Schema,model} from 'mongoose'

const hotalSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min:0,
    max:5,
  },
  rooms : {
    type : [String]
  },
  cheapestPrice : {
    type : Number,
    required : true
  },
   featured : {
    type : Boolean,
    default : false,
  }
})


const hotalModel = model('hotel',hotalSchema)
export default hotalModel