import client from '../../../../client'
import imageUrlBuilder from '@sanity/image-url'
import Typography from "@mui/material/Typography";

export const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(700).height(350).fit('max').auto('format')}
        />
      )
    }
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <Typography variant="h1" gutterBottom><p>{children}</p></Typography>,
    h2: ({children}) => <Typography variant="h2" gutterBottom><p>{children}</p></Typography>,
    h3: ({children}) => <Typography variant="h3" gutterBottom><p>{children}</p></Typography>,
    h4: ({children}) => <Typography variant="h4" gutterBottom><p>{children}</p></Typography>,
    normal: ({children}) => <Typography variant="subtitle1" gutterBottom component="div"><p>{children}</p></Typography>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500"><p>{children}</p></blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children}) => <h2 className="text-lg text-primary text-purple-700"><p>{children}</p></h2>,
  },
}

export const urlFor = (source) => {
  return imageUrlBuilder(client).image(source)
}
