import { IEmploye } from "model/model";
import employee from "../model/employee";

export default class EmployeService{
    public createEmploye(user_params: IEmploye, callback: any){
        const _session = new employee(user_params);
        _session.save(callback)
    }

    public getAllEmployee(query:any,callback:any){
        employee.find(query,callback);
    }

    public getEmployeByID(query:any,callback:any){
        employee.findOne(query,callback)
    }

    public updateUser(user_params:IEmploye,callback:any){
        const query = {_id:user_params._id};
        employee.findOneAndUpdate(query, user_params, callback)
    }

    public deleteEmploye(_id: string, callback: any){
        const query ={_id: _id};
        employee.deleteOne(query, callback)
    }
}