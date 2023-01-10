import { EmployeController } from "../controllers/employeController";
import { Application, Request, Response } from "express";

export class EmpRoute {
    private employeContoller : EmployeController =  new EmployeController();

    public route(app:Application){
        
        app.post('/api/emp', (req: Request, res: Response)=>{
            this.employeContoller.createEmploye(req,res);
        });
        app.get('/api/emp', (req: Request, res: Response)=>{
            this.employeContoller.getAllEmployee(req,res);
        });

        app.get('/api/emp/:id', (req: Request, res: Response)=>{
            this.employeContoller.getEmploye(req,res);
        });
    }
}