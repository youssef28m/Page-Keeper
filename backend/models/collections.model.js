
import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "collection title is required"],
        validate: {
            validator: function (value) {
              return value.length >= 1; // Minimum length of 1
            },
            message: 'Title must be at least 1 character long', // Custom error message
          },
    } ,

}, {timestamps: true});

const Collection = mongoose.model("Collection", collectionSchema);

export default Collection