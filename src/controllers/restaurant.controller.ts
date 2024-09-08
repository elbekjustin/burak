import {T} from "../libs/type/common";
import express, {Request, Response} from "express";


const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
try{
    res.send("Home Page");
} catch (err) {
    console.log("ERROR, goHome:", err);  
}
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
        res.send("Login Page");
    } catch (err) {
        console.log("ERROR, goLogin:", err);  
    }
    };

    restaurantController.getSignup = (req: Request, res: Response) => {
        try{
            res.send("Signup Page");
        } catch (err) {
            console.log("ERROR, goSignup:", err);  
        }
        };

        export default restaurantController;