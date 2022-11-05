import Box from "@mui/material/Box";
import Image from "next/image";
import testtwo from "../../../../public/test.jpg";
import BlobWrapper from "../wrapperElements/blobWrapper"
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../../client'

//Die width und height will next/image definiert haben. Sie werden von dem Custom CSS überschrieben und sind unbedeutend. Sollten aber fuer gute auflösung hoch sein
function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

export default function heroPicture({mainImage}) {
  return (
    <>
      <Box className="unset-img" sx={{ px: {xs: 1, md: 4}, }}>
        <BlobWrapper>
          <Image
          alt="Picture of the author"
          width={5000}
          height={5000}
          src={urlFor(mainImage).url()}
          className="custom-img"/>
        </BlobWrapper>
      </Box>
    </>
  );
}
