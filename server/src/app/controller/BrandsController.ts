import { Request, Response } from "express";
import { BrandsService } from "./../services/BrandsService";

class BrandsController {
    async create(request: Request, response: Response) {
        const { name, logo } = request.body;
        const createBrandsService = new BrandsService();
        const brand = await createBrandsService.create({ name, logo });
        return response.json(brand);
    }
    async view (request:Request, response:Response){
        const {id_brand} =  request.params;
        const brandServices = new BrandsService();
        const brand = await brandServices.view({id_brand})
        return response.json(brand);
    }
    async delete (request:Request, response:Response){
        const {id_brand} = request.params;
        const brandServices = new BrandsService();
        const brand = await brandServices.delete({id_brand});
        return response.json(brand)

    }
    async update (request:Request, response:Response){
        const {id_brand} = request.params;
        const {name, logo} = request.body;
        const brandServices = new BrandsService();
        const brand =  await brandServices.update({id_brand, name, logo})

        return response.json(brand);


    }
    async showAll(request:Request, response:Response){
        const brandServices = new BrandsService();
        const brand = await brandServices.showAll();
        return response.json(brand);
    }
    

}


export { BrandsController }