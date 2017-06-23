export class Product {
  id: number;
  name: string;
  price: number;
  imageSrc?: string;
  quantity?: number;
}

export const EMPTY_PRODUCT: Product = {
  id: 0,
  name: '',
  price: 0
};
