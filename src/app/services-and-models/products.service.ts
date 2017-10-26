import { Injectable } from '@angular/core';
import { CarModel, PartModel, MechanicServiceModel, EngineModel, GadgetModel } from './products.model'


@Injectable()
export class ProductsService {
  products = {
    cars: [],
    parts: [],
    services: [],
    engines: [],
    gadgets: []
  };

  constructor() { }


}
