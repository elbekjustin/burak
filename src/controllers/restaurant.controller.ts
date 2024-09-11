import {T} from "../libs/type/common";
import express, {Request, Response} from "express";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/type/member";
import { MemberType } from "../libs/type/enums/member.enam";

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

        restaurantController.processLogin = (req: Request, res: Response) => {
            try{
            console.log("processLogin");
            res.send("DONE");
            } catch (err) {
                console.log("ERROR, processLogin:", err);  
            }
            };

            restaurantController.processSignup = async (req: Request, res: Response) => {
                try{
                console.log("processSignup");

              const newMember: MemberInput = req.body;
              newMember.memberType = MemberType.RESTAURANT

                const memberService = new MemberService();
                const result = await memberService.processSignup(newMember);


                res.send(result);
                } catch (err) {
                    console.log("ERROR, processSignup:", err);  
                    res.send(err);
                }
                };
        
    
    

        export default restaurantController;