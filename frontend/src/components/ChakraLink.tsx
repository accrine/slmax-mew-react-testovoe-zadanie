import { Link as ChakraComponentLink } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = React.ComponentProps<typeof ChakraComponentLink>;

export const ChakraLink = ({ children, ...props }: Props) => {
  return (
    <ChakraComponentLink as={NextLink} {...props}>
      {children}
    </ChakraComponentLink>
  );
};
