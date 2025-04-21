export interface IImage {
  id: string;
  fullSize: string;
  thumbnailSize: string;
}

export interface IProduct {
  id: string;
  subtitle: string;
  title: string;
  text: string;
  price: number;
  discount: number;
  images: IImage[];
}

export interface ICartItem {
  id: string;
  image: string;
  title: string;
  price: number;
  discount: number;
  quantity: number;
}

export type PriceType = number | undefined;
