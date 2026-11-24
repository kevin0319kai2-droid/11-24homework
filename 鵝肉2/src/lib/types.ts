export type ProductCategory = 'preorder' | 'fresh' | 'processed';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  weightDescription: string;
  isPreorder: boolean;
  preorderShipDate?: string;
  image: string;
  description: string;
  tags: string[];
  stock: number;
}

export interface BookingForm {
  customerName: string;
  phone: string;
  bookingType: 'pickup' | 'farm tour';
  date: string;
  timeSlot: 'morning' | 'afternoon';
  preorderItems: { productId: string; quantity: number }[];
  note?: string;
}

export interface RecipeItem {
  id: string;
  title: string;
  cookTime: string;
  summary: string;
  steps: string[];
  recommendedProductIds: string[];
}
