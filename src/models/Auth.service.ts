import { defaultFormat } from "moment";
import { Member } from "../libs/type/member";
import  jwt from "jsonwebtoken";
import { AUTH_TIMER } from "../libs/type/config";
import Errors, { HttpCode, Message } from "../libs/type/Errors";

class AuthService {
    constructor() {}
  
    public async createToken(payload: Member) {
      return new Promise((resolve, reject) => {
        const duration = `${AUTH_TIMER}h`;
        jwt.sign(
          payload, process.env.SECRET_TOKEN as string,
          {
            expiresIn: duration,
          },
          (err, token) => {
            if (err) {
              reject(
                new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
              );
            } else resolve(token as string);
          }
        );
      });
    }
  }
  

export default AuthService;