import { T } from "../libs/type/common";
import express, { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/type/member";
import { MemberType } from "../libs/type/enums/member.enam";
import { Message } from "../libs/type/Errors";

const memberService = new MemberService();
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
  } catch (err) {
    console.log("ERROR, goHome:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
    res.send("Signup Page");
  } catch (err) {
    console.log("ERROR, goSignup:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
    res.send("Login Page");
  } catch (err) {
    console.log("ERROR, getLogin:", err);
  }
};

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
        // TODO: SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        });

  } catch (err) {
    console.log("ERROR, processSignup:", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
        // TODO: SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        });

  } catch (err) {
    console.log("ERROR, processLogin:", err);
    res.send(err);
  }
};

restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
      console.log("checkAuthSession");
     if(req.session?.member) 
    res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
     else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);

    } catch (err) {
      console.log("ERROR, checkAuthSession:", err);
      res.send(err);
    }
  };

export default restaurantController;










