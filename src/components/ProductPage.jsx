import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductSimple from "./ProductSimple"
import {Box, Flex} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import axios from "axios"


export default function ProductPage () {
 
    const [data,setData] = useState();

    useEffect(()=>{
       axios("https://vikson.life/wp-json/wc/v3/products?consumer_key=ck_f8d36da5c770deb695332561035254b92855869b&consumer_secret=cs_77c38464de2016b2028dd7824d35c728ee30f199")
       .then(ress => setData(ress.data))
    },[setData])

    console.log(data)
    return(
        <>
         <Box>
           <Navbar/>
         </Box>
         <Flex flexWrap={"wrap"} justifyContent={"space-around"} margin={20}>
            {data?.map((e)=><div>
              <ProductSimple IMAGE={e.images[0].src} price={e.price} title={e.name} link={e.permalink}/>
              </div>
              )}
            </Flex>
         <Box mt={6}>
           <Footer/>
         </Box>
        </>
    )
}