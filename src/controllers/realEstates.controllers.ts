import { Request, Response } from "express"
import createRealEstateService from "../services/realEstate/createRealEstate.service"

const createRealEstateController = async (request: Request, response: Response) => {
   
    const newRealEstate = await createRealEstateService(request.body);

    return response.json(newRealEstate);
}


export {
    createRealEstateController
}