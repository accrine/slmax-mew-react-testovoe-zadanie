import { fetchProduct, fetchProducts } from "@/lib/fetcher";
import { ParsedProduct } from "@/types/client";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  product: ParsedProduct;
}

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { ChakraImage } from "@/components/ChakraImage";
import { BsArrowLeft, BsBack } from "react-icons/bs";
import { useRouter } from "next/router";
import { BackButton } from "@/components/BackButton";

export default function Page({ product }: Props) {
  return (
    <Container maxW={"7xl"}>
      <BackButton ariaLabel="Go back to the products page" />
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <ChakraImage
            rounded={"md"}
            alt={"product image"}
            src={product.imageURL}
            w={"100%"}
            h={{ base: "400px", lg: "500px" }}
          />
        </Flex>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.brand.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${product.price.toFixed(2)} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                w={"100%"}
                fontWeight={"300"}
              >
                {product.name}
              </Text>
              <Text fontSize={"lg"}>{product.description}</Text>
            </VStack>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();
  const paths = products.data.map((product) => ({
    params: { documentId: product.documentId },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  Props,
  {
    documentId: string;
  }
> = async ({ params }) => {
  const product = await fetchProduct(params!.documentId);

  return {
    props: { product },
    revalidate: 120,
  };
};
