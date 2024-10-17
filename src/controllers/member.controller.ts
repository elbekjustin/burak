import { LoginInput, Member, MemberInput } from "../libs/type/member";
import {T} from "../libs/type/common";
import express, {Request, Response} from "express";
import MemberService from "../models/Member.service";
import Errors, { HttpCode } from "../libs/type/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/type/config";

const memberService = new MemberService();
const authService = new AuthService();


// REACT
const memberController: T = {};

    memberController.signup = async (req: Request, res: Response) => {
        try{
        console.log("signup");
        const input: MemberInput = req.body,
        result: Member = await memberService.signup(input);
        const token = await authService.createToken(result);
        res.cookie("accessToken", token, { 
            maxAge: AUTH_TIMER * 3600 * 1000, 
            httpOnly: false,
        });

        res.status(HttpCode.CREATED).json({ member:result, accessToken: token });

        } catch (err) {
            console.log("ERROR, signup:", err);  
            if(err instanceof Errors) res.status(err.code).json(err);
            else res.status(Errors.standart.code).json(Errors.standart);
        }
        };

        memberController.login = async (req: Request, res: Response) => {
            try{
            console.log("login");
            const input: LoginInput = req.body,
            result = await memberService.login(input),
            token = await authService.createToken(result);

            res.cookie("accessToken", token, { 
                maxAge: AUTH_TIMER * 3600 * 1000, 
                httpOnly: false,
            });

            res.status(HttpCode.OK).json({ member:result, accessToken: token });
            } catch (err) {
                console.log("ERROR, processLogin:", err);  
                console.log("ERROR, login:", err);  
                if(err instanceof Errors) res.status(err.code).json(err);
                else res.status(Errors.standart.code).json(Errors.standart);
        
        }
    };





export default memberController;



// memberController.goHome = (req: Request, res: Response) => {
// try{
//     res.send("Home Page");
// } catch (err) {
//     console.log("ERROR, goHome:", err);  
// }
// };

// memberController.getLogin = (req: Request, res: Response) => {
//     try{
//         res.send("Login Page");
//     } catch (err) {
//         console.log("ERROR, goLogin:", err);  
//     }
//     };

//     memberController.getSignup = (req: Request, res: Response) => {
//         try{
//             res.send("Signup Page");
//         } catch (err) {
//             console.log("ERROR, goSignup:", err);  
//         }
//         };

