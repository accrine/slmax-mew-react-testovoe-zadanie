import { BackButton } from "@/components/BackButton";
import { ProductAddToCart } from "@/components/Product/ProductAddToCart";
import { fetchProducts } from "@/lib/fetcher";
import { Paginated, ParsedProduct } from "@/types/client";
import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

type PageProps = Paginated<ParsedProduct>;

export default function Products(data: PageProps) {
  return (
    <Container maxW={"4xl"} h={"100%"}>
      <BackButton ariaLabel="Go back to the front page" />
      <Stack
        as={Flex}
        flexDir="row"
        textAlign={"center"}
        wrap={"wrap"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10 }}
      >
        {data.data.map((item) => (
          <ProductAddToCart product={item} key={item.name} />
        ))}
      </Stack>
    </Container>
  );
}

export const getServerSideProps = (async () => {
  const data = await fetchProducts();
  return { props: data };
}) satisfies GetServerSideProps<Paginated<ParsedProduct>>;
