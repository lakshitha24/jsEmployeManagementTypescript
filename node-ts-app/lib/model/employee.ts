import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const employeSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    number:String,
    gender:String,
    id:String,
    _id:String,
    photo:String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
});
export default mongoose.model('employees', employeSchema);

