import { StatusBar } from "expo-status-bar";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Box maxW="80" borderColor="coolGray.200" 
        borderWidth="1" backgroundColor="gray.50"
        p="10px"
        _web={{
          shadow:2,
          borderWidth:0
        }}
        overflow="hidden">
          
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Garden City
              </Heading>
              <Text fontSize="xs" 
              color="violet.500"
              fontWeight="500">
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife. 
            </Text>
            <HStack alignItems="center" space="3" 
            justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" fontWeight="400">
                  6 mins ago
                </Text>
              </HStack>

            </HStack>
          </Stack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
