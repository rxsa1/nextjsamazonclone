import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "titlePrice";

export const ProductTitle = (record: TProduct): string => {
  return record.titlePrice?.toString() || String(record.id);
};
