import { Request, Response } from "express";
import { BrandsService } from "./../services/BrandsService";

class BrandsController {
    async create(request: Request, response: Response) {
        const { name, logo } = request.body;
        const createBrandsService = new BrandsService();

        const brand = await createBrandsService.create({ name, logo });
        return response.json(brand);
    }

}


export { BrandsController }