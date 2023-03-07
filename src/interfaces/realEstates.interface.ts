import { z } from "zod"
import { createAdressSchema, createRealEstateSchema, returnAllRealEstatesSchema, returnEstatesByCategorySchema, returnRealEstateSchema } from "../schemas/realEstate.schemas"

type IRealEstateRequest = z.infer<typeof createRealEstateSchema>
type IRealEstateReturn = z.infer<typeof returnRealEstateSchema>
type IAllRealEstatesReturn = z.infer<typeof returnAllRealEstatesSchema>
type IEstatesByCategory = z.infer<typeof returnEstatesByCategorySchema>
type IAddress = z.infer<typeof createAdressSchema>


export {
    IRealEstateRequest,
    IRealEstateReturn,
    IAllRealEstatesReturn,
    IAddress,
    IEstatesByCategory
}