import {
  Badge,
  BadgeProps,
  ThemeTypings,
  ThemingProps,
} from "@chakra-ui/react";

type Props = {
  colorScheme: ThemeTypings["colorSchemes"];
  tag: string;
};

export function ProductTag({ colorScheme, tag }: Props) {
  return (
    <Badge rounded="full" px="2" fontSize="0.8em" colorScheme={colorScheme}>
      {tag.toUpperCase()}
    </Badge>
  );
}
