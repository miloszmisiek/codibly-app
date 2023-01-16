class Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;

  constructor(
    productId: number,
    productName: string,
    productYear: number,
    productColor: string,
    productPantoneValue: string
  ) {
    this.name = productName;
    this.id = productId;
    this.year = productYear;
    this.color = productColor;
    this.pantone_value = productPantoneValue;
  }
}

export default Product;
