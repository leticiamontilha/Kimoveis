import {Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import jwt from "jsonwebtoken"
import 'dotenv/config'


const verifyAdminPermission = async (request: Request, response: Response, next: NextFunction) => {
    let token = request.headers.authorization

    if(!token){
        throw new AppError("Missing bearer token", 401)
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }

        if(decoded.admin === false){
            throw new AppError("Insufficient permission", 403)
        }

        request.user = {
            id: decoded.subject,
            admin: decoded.admin,
            email: decoded.email
        }
    })

    return next()
}

export default verifyAdminPermission