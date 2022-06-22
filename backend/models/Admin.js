import {Schema, model} from "mongoose";

const AdminSchema = Schema({
        name: {
                type: String,
                required: true
        },
        password: {
                type: String,
                requried: true
        }
})

const Admin = model("Admin", AdminSchema)

export default Admin;