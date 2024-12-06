import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

type Props = {
  ariaLabel: string;
};

export function BackButton({ ariaLabel }: Props) {
  const { back } = useRouter();
  return (
    <IconButton
      aria-label={ariaLabel}
      rounded={"none"}
      pos={"fixed"}
      left={10}
      onClick={back}
      top={10}
      color={useColorModeValue("black", "white")}
      background={"transparent"}
      icon={<BsArrowLeft />}
    />
  );
}
