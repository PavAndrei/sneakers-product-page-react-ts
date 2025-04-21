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
}

export type PriceType = number | undefined;
