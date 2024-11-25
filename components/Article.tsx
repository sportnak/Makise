import { VStack, Text, Box } from "@chakra-ui/react";
import { FeedItem } from "./Feed";
import Image from "next/image";
import Markdown from "react-markdown";

export function Article({
  title,
  image,
  content,
  imageSizes,
}: Partial<FeedItem> & {
  content: string;
  imageSizes: Record<string, { width: number; height: number }>;
}) {
  return (
    <VStack>
      <Box position={"fixed"} zIndex={1} top={0} w="100%" bg="#060606">
        <Text
          ml="40px"
          cursor="pointer"
          onClick={() => (window.location.href = "/")}
        >
          Home
        </Text>
      </Box>
      <VStack mt={60} w="100%" px={"15%"}>
        <Text color="black" fontSize="40px">
          {title}
        </Text>
        <Box
          borderRadius={6}
          overflow={"hidden"}
          position="relative"
          w="100%"
          h="600px"
        >
          <Image src={image} alt={"cover"} fill objectFit="cover" />
        </Box>
        <Box
          bg="white"
          borderRadius={6}
          px={"15%"}
          py={20}
          w={"80%"}
          mt={-80}
          zIndex={1}
        >
          <Box
            lineHeight={"35.2px"}
            fontSize="22px"
            color="#3C484E"
            fontFamily={"Georgia"}
          >
            <Markdown
              components={{
                img: (props) => {
                  if (imageSizes[props.src]) {
                    const { src, alt } = props;
                    const { width, height } = imageSizes[props.src];
                    return (
                      <Box
                        as="span"
                        position={"relative"}
                        w="100%"
                        maxH={height}
                        minH={400}
                        display={"block"}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          objectFit="contain"
                          style={{
                            maxWidth: "100%",
                          }}
                        />
                      </Box>
                    );
                  } else {
                    // If we don’t have the image’s dimensions, let’s use a classic
                    // `img` element.
                    return <img {...props} />;
                  }
                },
              }}
            >
              {content}
            </Markdown>
          </Box>
        </Box>
      </VStack>
    </VStack>
  );
}
