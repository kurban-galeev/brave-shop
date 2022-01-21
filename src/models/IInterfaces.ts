export interface IClothingInfo {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  countItem: number;
  rating: {
    rate: number;
    count: number;
  };
}
export interface IItemsCategories {
  items: string[];
}
export interface IItems {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  countItem: number;
  rating: {
    rate: number;
    count: number;
  };
}
export interface IFooter {
  path: string;
}
export interface ICount {
  count: number;
  index: number;
}
