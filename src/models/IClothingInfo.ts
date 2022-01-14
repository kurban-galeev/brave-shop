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
