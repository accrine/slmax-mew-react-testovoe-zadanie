import { apiURL } from "@/lib/fetcher";
import { ParsedProduct } from "@/types/client";
import { ServerProduct } from "@/types/server";

export function parseProduct(product: ServerProduct): ParsedProduct {
  return {
    brand: {
      name: product.brand.name,
      slug: product.brand.slug,
    },
    documentId: product.documentId,
    description: product.description,
    imageURL: new URL(product.image.formats.small.url, apiURL).toString(),
    isNew: product.tags.some((el) => el.name.toLowerCase() === "new"),
    name: product.name,
    price: product.price,
    tags: product.tags.map((tag) => ({
      name: tag.name,
      slug: tag.slug,
    })),
    rating:
      Math.floor(
        (product.reviews.reduce((acc, review) => acc + review.rating, 0) /
          product.reviews.length) *
          2
      ) / 2 || 0,
    reviews: product.reviews.map((review) => ({
      authorName: review.authorName,
      rating: review.rating,
      text: review.text,
    })),
    numReviews: product.reviews.length,
  };
}
