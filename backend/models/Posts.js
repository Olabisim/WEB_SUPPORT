

import { model, Schema } from 'mongoose'

const PostSchema = Schema({

        title: {
                type: String,
                required: true
        },

        fault: {
                type: String,
                required: true
        }

})

const Post = model("Post", PostSchema)

export default Post;