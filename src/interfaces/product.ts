export interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface IALLProduct {
  product_id: number;
  product_name: string;
  category_name: string;
  created_at: string;
  updated_at: string;
  thumbnail_images_url: string;
  variation_values: IVariationProduct[];
  total_variations: number;
}

export interface IProduct {
  product_id: number;
  product_name: string;
  sku: string;
  description: string;
  category_name: string;
  package_weight?: number;
  package_width?: number;
  package_height?: number;
  created_at: string;
  updated_at: string;
  qr_images_url: string;
  thumbnail_images_url: string;
  variation_values: IVariationProduct[];
  gallery_images: IGalleryImage[];
}

export interface IGalleryImage {
  url_product_cloudinary: string;
}

export interface IVariationProduct {
  id: number;
  product_id: number;
  variation_name: string;
  variation_sku: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
  price: number;
  slash_price?: number;
  qty: number;
  grosir_price?: number;
  hpp?: number;
}

export interface IStock {
  variation_id?: number;
  variation_name: string;
  variation_sku: string;
  price: number;
  qty: number;
}
