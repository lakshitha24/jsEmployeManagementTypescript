import { Request, Response } from 'express';
import { IEmploye } from '../model/model';
import EmployeService from '../service/employeService';
import e = require('express');

export class EmployeController{
    private employeService:EmployeService = new EmployeService();

    public createEmploye(req: Request, res: Response){
        if(req.body.first_name && req.body.last_name && req.body.gender && req.body.number && req.body.email && req.body.id && req.body.photo){
            const empParams:IEmploye = {
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                gender:req.body.gender,
                number:req.body.number,
                email:req.body.email,
                id: req.body.id,
                photo:req.body.photo
            };
            this.employeService.createEmploye(empParams,(err:any,empData:IEmploye)=>{
                if(err){
                    res.status(500).json({ error: err.message})
                }else{
                    res.json({data:empData,status:'success'})
                }
            })
        }else{
            res.status(400).json({status:'success',MESSAGE: 'Insufficient parameters',})
        }
    }

    public getEmploye(req: Request, res: Response){
        if(req.params.id){
            const empFilter = { _id: req.params.id};
            this.employeService.getEmployeByID(empFilter,(err:any, empData:IEmploye)=>{
                if(err){
                    res.status(500).json({ error: err.message})
                }else{
                    res.json({data:empData,status:'success'})
                }
            })
        }
    }

    public getAllEmployee(req: Request, res: Response){
        const empFilter = {};
        this.employeService.getAllEmployee(empFilter,(err:any,empData:IEmploye)=>{
            if(err){
                res.status(500).json({ error: err.message})
            }else{
                res.json({data:empData,status:'success'})
            }
        });
     }
    //  public updateEmploye(req: Request, res: Response){
    //     if(req.body.first_name && req.body.last_name && req.body.gender && req.body.number && req.body.email && req.body.id && req.body.photo){
    //         const empFilter = { _id: req.params.id };
    //         this.employeService.updateUser(empFilter,(err: any, empData: IEmploye)=>{
    //             if(err){

    //             }else if(empData){
    //                 const empParams:IEmploye = {
    //                     first_name:req.body.first_name ? req.body.first_name : empData.first_name,
    //                     last_name:req.body.last_name ? req.body.last_name : empData.last_name,
    //                     gender:req.body.gender ? req.body.gender: empData.gender,
    //                     number:req.body.number ? req.body.number : empData.email,
    //                     email:req.body.email ? req.body.email : empData.email,
    //                     id: req.body.id ? req.body.id : empData.id,
    //                     photo:req.body.photo ? req.body.photo :empData.photo
    //                 };
    //                 this.employeService.updateUser(empParams,(err:any)=>{

    //                 })
    //             }
    //         })
            
    //     } else{
    //         res.status(400).json({status:'success',MESSAGE: 'Insufficient parameters',})
    //     }
    //  }

}