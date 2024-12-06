import { Pagination } from "./server";

export type ParsedProduct = {
  price: number;
  isNew: boolean;
  documentId: string;
  description: string;
  imageURL: string;
  name: string;
  rating: number;
  numReviews: number;
  tags: Array<{
    name: string;
    slug: string;
  }>;
  brand: {
    name: string;
    slug: string;
  };
  reviews: Array<{
    authorName: string;
    rating: number;
    text: string;
  }>;
};
export type Paginated<Element extends {}> = {
  pagination: Pagination;
  data: Array<Element>;
};
