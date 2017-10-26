export class AllProductsModel {
  constructor(
    private cars: CarModel[],
    private parts: PartModel[],
    private services: MechanicServiceModel[],
    private engines: EngineModel[],
    private gadgets: GadgetModel[]
  ) {}
}

export class CarModel {
  constructor(
    private id: string,
    private name: string,
    private prodYear: number,
    private engine: string,
    private fuel: string,
    private odometer: number,
    private description: string,
    private images: any,
    private subCategories: any,
    private stockAmount: number,
    private stockUnit: string,
    private price : number,
    private priceOld: number,
    private producer: string,
    private rating: number,
    private opinions: any
  ) {}
}

export class PartModel {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private images: any,
    private subCategories: any,
    private stockAmount: number,
    private stockUnit: string,
    private price : number,
    private priceOld: number,
    private producer: string,
    private rating: number,
    private opinions: any
  ) {}
}

export class MechanicServiceModel {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private images: any,
    private subCategories: any,
    private price : number,
    private priceOld: number,
    private rating: number,
    private opinions: any
  ) {}
}

export class EngineModel {
  constructor(
    private id: string,
    private name: string,
    private type: string,
    private description: string,
    private images: any,
    private subCategories: any,
    private price : number,
    private priceOld: number,
    private producer: string,
    private rating: number,
    private opinions: any
  ) {}
}

export class GadgetModel {
  constructor(
    private id: string,
    private name: string,
    private description: string,
    private images: any,
    private subCategories: any,
    private stockAmount: number,
    private stockUnit: string,
    private price : number,
    private priceOld: number,
    private producer: string,
    private rating: number,
    private opinions: any
  ) {}
}