import { z } from "zod"
import { createRealEstateSchema, returnAllRealEstatesSchema, returnRealEstateSchema } from "../schemas/realEstate.schemas"

type IRealEstate = z.infer<typeof createRealEstateSchema>
type IRealEstateReturn = z.infer<typeof returnRealEstateSchema>
type IAllRealEstatesReturn = z.infer<typeof returnAllRealEstatesSchema>


export {
    IRealEstate,
    IRealEstateReturn,
    IAllRealEstatesReturn
}