import mongoose from "mongoose";



const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,
  },
  description: {
    type: String,
    required: true,
  },
 
  
});

export default mongoose.model('category', categorySchema)
