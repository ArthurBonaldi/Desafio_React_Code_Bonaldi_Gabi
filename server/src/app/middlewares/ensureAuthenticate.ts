import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub:string;
}
export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
    const authtoken = request.headers.authorization

    if (!authtoken) {
        return response.status(401).end();
    }
    const [, token] = authtoken.split(" ")

    try {
        const {sub} = verify(token, "399b121a12a454eb14c8fe445d2a9a54") as IPayload
        request.user_id = sub;
        
        return next();
    } catch (err) {
        return response.status(401).end();
    }


}