import { Injectable } from '@angular/core';
import { AllProductsModel, CarModel, PartModel, MechanicServiceModel, EngineModel, GadgetModel } from './products.model'


@Injectable()
export class ProductsService {
  allProducts: AllProductsModel = new AllProductsModel (
    [
      new CarModel('1_0001', 'garbus', 1765, 'T3-DM', 'Pb', 12506, 'lorem ipsum', ['http://i.iplsc.com/wszystkie-garbusy-maja-czterocylindrowy-silnik-bokser-umiesz/0001S9B7G7NQN5SH-C116-F4.jpg', 'https://spplthumb.blob.core.windows.net/1000x901c/08/ee/e1/volkswagen-garbus-sportowy-coupe-sprzedam-345308322.jpg'], ['VW', 'oldTimer'], 3, 'pcs', 12000, 15000, 'VW', 4.5, ['very good', 'fantastic']),
      new CarModel('10002', 'mercedes', 2010, 'TDI', 'Diesel', 50365, 'lorem ipsum dolor sit', ['https://media.ed.edmunds-media.com/mercedes-benz/s-class/2010/oem/2010_mercedes-benz_s-class_sedan_s600_fq_oem_1_500.jpg', 'http://s3.caradvice.com.au/thumb/770/382/wp-content/uploads/2010/04/2010-Mercedes-Benz-C-Class.jpg'], ['Mercedes', 'lux'], 5, 'pcs', 65000, 0, 'Mercedes', 3.5, ['not bad', 'it\'s ok'])
    ],
    [
      new PartModel('2_00001', 'screwdriver', 'lorem lorem ipsum ipsum', ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Screw_Driver_display.jpg/1200px-Screw_Driver_display.jpg'], ['tools'], 50, 'pc', 50.5, 0, 'Bosh', 2, ['broken after first use', 'it\'s ok']),
      new PartModel('2_00002', 'screw 20mmx40mm', 'lorem ipsum dolor ipsum', ['https://www.newport.com/mam/celum/celum_assets/SCREW-10_800w.jpg?10', 'http://www.usifaz.com/Web%20Site%20Pics/Screws/Socket%20Cap%20Screw.gif'], ['tools'], 30, 'kg', 2.5, 3, 'Handyman', 4, ['broken after first use', 'it\'s ok'])
    ],
    [
      new MechanicServiceModel('3_001', 'Tires change', 'try tires tries', ['https://www.mvsottawa.com/wp-content/uploads/2017/03/3-4.jpg'], [], 50, 0, 5, ["perfect service!", "good job"]),
      new MechanicServiceModel('3_002', 'Oil change', 'oil oil oil', ['https://img.grouponcdn.com/deal/a1NtS8SX3nFgL3NLb3vBxe/Fotolia_39532800_Subscription_XXL-1500x900/v1/c700x420.jpg', 'http://durangoautoworks.com/wp-content/uploads/sites/233/2012/08/iStock_000012989454Medium-e1317848967115.jpg'], [], 80, 100, 5, ["fantastic oil", "will comeback next year"])
    ],
    [
      new EngineModel('4_001', 'VW T8-C', 'AirCooled', 'VW rulez', ['https://i.ytimg.com/vi/RyjEthrDFPo/hqdefault.jpg', 'http://images9.fotosik.pl/639/17af05765d1e153f.jpg'], ['AirCooled', 'VW', 'CustomBuild'], 45000, 48000, 'VW & QuickStickPerformance', 5, ['The best customized VW engines in PL', 'You should try 180km/h in VW beetle!']),
      new EngineModel('4_002', 'CarmanGhia T8-C', 'AirCooled', 'ghia is good for you', ['http://www.newoldcar.co.uk/images/Featured_Cars/Volkswagen/Karmann/1230_1971_Volkswagen_Karmann_Ghia/1971%20Volkswagen%20Karmann%20Ghia%20Engine%20Bay.jpg', 'http://www.newoldcar.co.uk/images/Featured_Cars/Volkswagen/Karmann/1228_1964_Volkswagen_Karmann_Ghia/1964%20Volkswagen%20Karmann%20Ghia%20Engine%20Bay.JPG'], ['AirCooled', 'VW', 'CustomBuild'], 55000, 0, 'VW & QuickStickPerformance', 5, ['The best customized carman custom build engines', 'QuickStickPerformance rulez']),
    ],
    [
      new GadgetModel('5_00001', 'VW beetle toy', 'beautiful and corolfull', ['https://ae01.alicdn.com/kf/HTB1vlg2KpXXXXcCXFXXq6xXFXXXm/4-in1-kinsmart-1967-font-b-vw-b-font-font-b-beetle-b-font-czarny-type1.jpg'], ['toys'], 100, 'pcs', 100, 0, 'ToyStory', 4, [])
    ]
  );

  constructor() { }

  getAllProducts() {
    console.log('All products: ', this.allProducts);
    return this.allProducts;
  }

  getCategoryProducts(category) {
    console.log("Particular category (" + category + ") products: ", this.allProducts[category]);
    return this.allProducts[category].slice();
  }
}