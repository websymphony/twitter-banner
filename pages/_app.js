import 'tailwindcss/tailwind.css';
import { ChakraProvider } from "@chakra-ui/react";


function TwitterBanner({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default TwitterBanner;
