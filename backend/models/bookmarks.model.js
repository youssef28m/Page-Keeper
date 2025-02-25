
import mongoose from "mongoose";

const bookmarksSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 100
    },
    url: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return /^(https?:\/\/)?([\w\-]+)\.([a-z]{2,6}\.?)(\/[\w\-]*)*\/?$/.test(value);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    description: {
        type: String,
    }
})

const Bookmark = mongoose.model("Bookmark" , bookmarksSchema)

export default Bookmark;