import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Grid, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Select, Stack, Switch } from "@chakra-ui/react";
import download from 'downloadjs';
import { toPng } from 'html-to-image';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import BasicTemplate from '../components/BasicTemplate';

export const GA_TRACKING_ID = "G-S9S2YMCHRG";

export default function Home() {
  const unsplashBaseUrl = 'https://source.unsplash.com/featured/1500x500?';

  const [textColor, setTextColor] = useState({ hex: "#ffffff" });
  const [backgroundStyle, setBackgroundStyle] = useState('linearGradient');
  const [linearGradientDirection, setLinearGradientDirection] = useState('to-r');
  const [gradientFromColor, setGradientFromColor] = useState({ hex: "#a855f7" });
  const [gradientToColor, setGradientToColor] = useState({ hex: "#6366f1" });
  const [bgImageKeyword, setBgImageKeyword] = useState("space");
  const [background, setBackground] = useState({});
  const [fontFamily, setFontFamily] = useState("Inter");
  const [hasBorder, setHasBorder] = useState(true);

  useEffect(() => {
    if (backgroundStyle === 'linearGradient') {
      setBackground({ bgGradient: 'linear(' + linearGradientDirection + ',' + gradientFromColor.hex + ', ' + gradientToColor.hex + ')' });
    }
    if (backgroundStyle === 'radialGradient') {
      setBackground({
        bgGradient: 'radial(' + gradientFromColor.hex + ', ' + gradientToColor.hex + ')'
      });
    }
    if (backgroundStyle === 'image' && bgImageKeyword) {
      setBackground({
        backgroundImage: 'url(' + unsplashBaseUrl + bgImageKeyword + ')',
      });
    }
  }, [backgroundStyle, linearGradientDirection, gradientFromColor, gradientToColor, bgImageKeyword]);

  const downloadImage = () => {
    toPng(document.getElementById('twitter-banner'))
      .then(function (dataUrl) {
        download(dataUrl, 'twitter-banner.png');
      });
  };

  return (
    <div className="">
      <Head>
        <title>Free Twitter Banner Creator / Free Twitter Header Creator</title>
        <meta name="description" content="Free twitter banner and header creator allows you to create good looking banner in less than a minute. Use the completely free twitter banner / twitter header tool. No signup required." />

        <link rel="icon" href="/favicon.ico" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>

      <header className="bg-white">
        <section className="bg-indigo-600">
          <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center flex-1 w-0">
                <span className="flex p-2 bg-indigo-800 rounded-lg">
                  <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <a href="https://hipcv.com?utm_source=twitter-banner" className="block p-2">
                    <span className="md:hidden">
                      Use our app hipCV to create free professional resumes in minutes.
                    </span>
                    <span className="hidden md:inline">
                      Looking for a job or need a professional resume? Use our app hipCV to create free resumes and cover letters!
                    </span>
                  </a>
                </p>
              </div>
              <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                <span className="relative inline-flex rounded-md shadow-sm">
                  <a href="https://hipcv.com?utm_source=twitter-banner" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50">
                    Create free resume
                  </a>
                  <span className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
                    <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                    <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full" />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight text-center text-gray-700">
            Free Twitter Banner Creator / Free Twitter Header Creator
          </h1>
          <nav aria-label="Progress" className="mt-10 mb-6">
            <ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
              <li className="md:flex-1">
                <span className="flex flex-col py-2 pl-4 border-l-4 border-indigo-600 group hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                  <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase group-hover:text-indigo-800">Step 1</span>
                  <span className="text-sm font-medium">Change the text inside banner by selecting it</span>
                </span>
              </li>

              <li className="md:flex-1">
                <span className="flex flex-col py-2 pl-4 border-l-4 border-indigo-600 group hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                  <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase group-hover:text-indigo-800">Step 2</span>
                  <span className="text-sm font-medium">Customize the banner background colors</span>
                </span>
              </li>

              <li className="md:flex-1">
                <span className="flex flex-col py-2 pl-4 border-l-4 border-indigo-600 group hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                  <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase group-hover:text-indigo-800">Step 3</span>
                  <span className="text-sm font-medium">Click on the download button and get your banner!</span>
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 w-full">

        <div id="twitter-banner" className="apply-font">
          <Box w="1500px" h="500px" {...background}>
            <BasicTemplate textColor={textColor.hex} hasBorder={hasBorder} />
          </Box>
        </div>

        <Grid
          h="100%"
          templateColumns="repeat(1, 1fr)"
          gap={8}
          my="10"
        >
          <Box maxW="lg" minW="xl" borderRadius="lg" p="6" boxShadow="md" borderWidth="1px">
            <FormControl id="backgroundStyle">
              <FormLabel>Background Style</FormLabel>
              <RadioGroup onChange={setBackgroundStyle} value={backgroundStyle}>
                <Stack direction="row" spacing="20px">
                  <Radio value="linearGradient">Linear Gradient</Radio>
                  <Radio value="radialGradient">Radial Gradient</Radio>
                  <Radio value="image">Image</Radio>
                </Stack>
              </RadioGroup>
              {backgroundStyle === 'linearGradient' && (
                <>
                  <FormControl id="linearGradientDetails" mt="6">
                    <FormLabel color="gray.500" fontSize="sm">Gradient Direction</FormLabel>
                    <Select value={linearGradientDirection} onChange={e => setLinearGradientDirection(e.target.value)}>
                      <option value="to-t">Top</option>
                      <option value="to-tr">Top Right</option>
                      <option value="to-r">Right</option>
                      <option value="to-br">Bottom Right</option>
                      <option value="to-b">Bottom</option>
                      <option value="to-bl">Bottom Left</option>
                      <option value="to-l">Left</option>
                      <option value="to-tl">Top left</option>
                    </Select>
                  </FormControl>
                  <Flex justify="space-between">
                    <FormControl id="gradientStartColor" mt="4">
                      <FormLabel color="gray.500" fontSize="sm">Start Color</FormLabel>
                      <ChromePicker color={gradientFromColor} onChangeComplete={color => setGradientFromColor(color)} disableAlpha={true} />
                    </FormControl>
                    <FormControl id="gradientEndColor" mt="4">
                      <FormLabel color="gray.500" fontSize="sm">End Color</FormLabel>
                      <ChromePicker color={gradientToColor} onChangeComplete={color => setGradientToColor(color)} disableAlpha={true} />
                    </FormControl>
                  </Flex>
                </>
              )}
              {backgroundStyle === 'radialGradient' && (
                <>
                  <Flex>
                    <FormControl id="gradientStartColor" mt="4">
                      <FormLabel color="gray.500" fontSize="sm">Start Color</FormLabel>
                      <ChromePicker color={gradientFromColor} onChangeComplete={color => setGradientFromColor(color)} disableAlpha={true} />
                    </FormControl>
                    <FormControl id="gradientEndColor" mt="4">
                      <FormLabel color="gray.500" fontSize="sm">End Color</FormLabel>
                      <ChromePicker color={gradientToColor} onChangeComplete={color => setGradientToColor(color)} disableAlpha={true} />
                    </FormControl>
                  </Flex>
                </>
              )}
              {backgroundStyle === 'image' && (
                <>
                  <FormControl id="image" mt="4">
                    <FormLabel color="gray.500" fontSize="sm">Keyword to search image</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children={unsplashBaseUrl} />
                      <Input placeholder="keywords" value={bgImageKeyword} onChange={e => setBgImageKeyword(e.target.value)} />
                    </InputGroup>
                    <FormHelperText>Images take few seconds to load. If you are seeing a blank screen after adding keyword, give it some time.</FormHelperText>
                  </FormControl>
                </>
              )}
            </FormControl>
          </Box>

          <Box maxW="lg" minW="xl" borderRadius="lg" p="6" boxShadow="md" borderWidth="1px">
            <Flex>
              <FormControl id="textColor">
                <FormLabel>Text color</FormLabel>
                <ChromePicker color={textColor} onChangeComplete={color => setTextColor(color)} disableAlpha={true} />
              </FormControl>
            </Flex>
            <FormControl id="removeBorder" mt="4">
              <FormLabel>Text border</FormLabel>
              <Switch defaultChecked={hasBorder} size="lg" onChange={() => setHasBorder(!hasBorder)} />
            </FormControl>
          </Box>
        </Grid>

        <div className="flex flex-col items-center flex-1 w-full px-20 mt-8 text-center">
          <Button colorScheme="blue" size="lg" onClick={downloadImage} borderRadius="lg">
            Download your free twitter banner
          </Button>
        </div>
      </main>

      <footer className="w-full p-16 mt-12 text-gray-600 bg-gray-100">
        <nav className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex flex-wrap items-center justify-center m-auto text-2xl">
            <a className="flex flex-col items-center mx-4" target="_blank" rel="noopener nofollow" title="Twitter" href="https://twitter.com/websymphony"><svg className="w-10 h-10 mr-2 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M32 6.078c-1.2.522-2.458.868-3.78 1.036 1.36-.812 2.398-2.088 2.886-3.626a13.11 13.11.0 01-4.16 1.588C25.742 3.794 24.026 3 22.154 3a6.56 6.56.0 00-6.556 6.562c0 .52.044 1.02.152 1.496-5.454-.266-10.28-2.88-13.522-6.862-.566.982-.898 2.106-.898 3.316a6.57 6.57.0 002.914 5.452 6.48 6.48.0 01-2.964-.808v.072c0 3.188 2.274 5.836 5.256 6.446-.534.146-1.116.216-1.72.216-.42.0-.844-.024-1.242-.112.85 2.598 3.262 4.508 6.13 4.57a13.18 13.18.0 01-8.134 2.798c-.538.0-1.054-.024-1.57-.1C2.906 27.93 6.35 29 10.064 29c12.072.0 18.672-10 18.672-18.668.0-.3-.01-.57-.024-.848C30.014 8.56 31.108 7.406 32 6.078z">
              </path>
            </svg>
              Follow me on twitter
            </a>
            <a className="flex flex-col items-center mx-4" target="_blank" rel="noopener nofollow" title="Websymphony site" href="https://websymphony.net?utm_source=twitter-banner">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              https://websymphony.net
            </a>
            <a className="flex flex-col items-center mx-4" target="_blank" rel="noopener nofollow" title="hipCV" href="https://hipcv.com?utm_source=twitter-banner">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Create free resumes
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
