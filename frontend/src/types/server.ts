export type ServerProduct = {
  id: number;
  createdAt: string;
  description: string;
  documentId: string;
  name: string;
  price: number;
  publishedAt: string;
  updatedAt: string;
  image: {
    formats: {
      small: {
        url: string;
        height: number;
        width: number;
      };
    };
  };
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
export type ServerProducts = ServerPaginatedData<ServerProduct>;
export type FetchProductResponse = {
  data: ServerProduct;
};
export type ServerPaginatedData<Data extends {}> = {
  data: Array<Data>;
  meta: {
    pagination: Pagination;
  };
};
export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};
