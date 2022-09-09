import { Request } from "express"

export interface AuthenticatedRequest extends Request {
    user: {
        name: string,
        email: string,
        _id: string
    }
}