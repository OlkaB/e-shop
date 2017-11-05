export class ProductsOpinionsModel {
  constructor(
    private productId: string,
    private opinion: OpinionModel[]
  ) {}  
}

export class OpinionModel {
  constructor(
    private author: string,
    private opinionId: string,
    private rating: number,
    private title: string,
    private opinionTxt: string,
    private datePublish: any
  ) {}  
}