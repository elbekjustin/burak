import {T} from "../libs/type/common";
import express, {Request, Response} from "express";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
try{
    console.log("goHome");
    res.send("Home Page");
} catch (err) {
    console.log("ERROR, goHome:", err);  
}
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("ERROR, goLogin:", err);  
    }
    };

    restaurantController.getSignup = (req: Request, res: Response) => {
        try{
        console.log("getSignup");

            res.send("Signup Page");
        } catch (err) {
            console.log("ERROR, goSignup:", err);  
        }
        };

        export default restaurantController;