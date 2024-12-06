import {
  Badge,
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ChakraImage } from "../ChakraImage";
import { ProductRating } from "./ProductRating";
import { FiShoppingCart } from "react-icons/fi";
import { ProductTag } from "./ProductTag";
import { ParsedProduct } from "@/types/client";
import { ChakraLink } from "../ChakraLink";

type Props = {
  product: ParsedProduct;
};

export function ProductAddToCart({
  product: {
    price,
    isNew,
    imageURL,
    name,
    rating,
    numReviews,
    brand,
    documentId,
    tags,
  },
}: Props) {
  console.log(documentId);
  return (
    <ChakraLink
      href={`products/${documentId}`}
      _hover={{ textDecoration: "none", shadow: "2xl" }}
      rounded="lg"
    >
      <VStack
        bg={useColorModeValue("white", "gray.800")}
        rounded="lg"
        h="100%"
        w={{ base: "xs", md: "sm" }}
        borderWidth="1px"
        shadow="md"
        position="relative"
        justifyContent={"space-between"}
      >
        {isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <ChakraImage
          src={imageURL}
          alt={`Picture of ${name}`}
          roundedTop="lg"
          height={300}
          w={"100%"}
        />

        <Box p="6" w="100%">
          <HStack spacing={1} wrap={"wrap"} alignItems="baseline">
            {isNew && <ProductTag colorScheme="red" tag="new" />}
            {tags
              .filter((tag) => tag.name.toLowerCase() !== "new")
              .map((tag) => (
                <ProductTag colorScheme="blue" tag={tag.name} key={tag.slug} />
              ))}
          </HStack>
          <Flex
            mt="1"
            justifyContent="space-between"
            w="100%"
            alignContent="center"
          >
            <Flex
              direction="column"
              pos="relative"
              alignItems="flex-start"
              w="100%"
            >
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
              >
                {brand.name}
              </Box>
              <Text
                fontSize="sm"
                fontWeight="normal"
                lineHeight="tight"
                textAlign={"left"}
                w={"100%"}
                isTruncated
              >
                {name}
              </Text>
            </Flex>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <ProductRating rating={rating} numReviews={numReviews} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </VStack>
    </ChakraLink>
  );
}
