export interface IEmploye{
    _id?: String,
    first_name: String,
    last_name: String,
    email: String,
    number:String,
    gender:String,
    id?:String,
    photo?:String,
    createdAt?: {
      type: Date,
      default: String,
    },
}