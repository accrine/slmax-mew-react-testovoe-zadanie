import { useState } from "react";

import NextImage, { ImageProps } from "next/image";

import { Skeleton, Box, BoxProps } from "@chakra-ui/react";

type Props = ImageProps &
  BoxProps & {
    alt: string;
    fallbackSrc?: string;
  };

export const ChakraImage: React.FC<Props> = (props) => {
  const {
    src,
    alt,
    width,
    height,
    fallbackSrc = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
    bgGradient,
    priority,
    quality,
    ...rest
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleLoad = (result: {
    naturalWidth: number;
    naturalHeight: number;
  }) => {
    if (result.naturalWidth === 0) setIsError(true);
    else setIsLoaded(true);
  };
  const handleError = () => setIsError(true);
  return (
    <Box
      width={width}
      height={height}
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Skeleton
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        isLoaded={isLoaded}
      >
        <NextImage
          src={isError ? fallbackSrc : src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          onLoadingComplete={handleLoad}
          onError={handleError}
          priority={priority}
          quality={quality}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgGradient={bgGradient}
        />
      </Skeleton>
    </Box>
  );
};
