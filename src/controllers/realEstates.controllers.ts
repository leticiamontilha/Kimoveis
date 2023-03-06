import { Request, Response } from "express"
import createRealEstateService from "../services/realEstate/createRealEstate.service"
import listAllRealEstatesService from "../services/realEstate/listAllEstates.service";

const createRealEstateController = async (request: Request, response: Response) => {
   
    const newRealEstate = await createRealEstateService(request.body);

    return response.json(newRealEstate);
}

const listAllRealEstateController = async (request: Request, response: Response) => {

    const allRealEstate = await listAllRealEstatesService()

    return response.json(allRealEstate)
}


export {
    createRealEstateController,
    listAllRealEstateController
}