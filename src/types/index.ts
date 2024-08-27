interface Product {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  oldPrice?: number;
  category?: string;
  createdAt?: string;
  avatar?: string;
}

interface productState {
  products: any[];
  product: Product;
  isLoading: boolean;
}

export type { Product, productState };
