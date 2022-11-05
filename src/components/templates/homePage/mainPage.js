import HeroSection from "../../organisms/heroSection/heroSection";
import PortfolioGrid from "../../organisms/portfolioSection/portfolioGrid"
import AboutMeSection from "../../organisms/aboutMeSection/aboutMe"

export default function MainPage({posts, heroContent, portfolioTitel, aboutContent, footerContent}){
  return(
    <>
      <HeroSection heroContent={heroContent}/>
      <PortfolioGrid posts={posts} portfolioTitel={portfolioTitel.title}/>
      <AboutMeSection aboutContent={aboutContent}/>
    </>
  )
}

// {posts.length > 0 && posts.map(
//   ({ _id, title = '', slug = '', publishedAt = '' }) =>
//     slug && (
//       <li key={_id}>
//         <Link href="/post/[slug]" as={`/post/${slug.current}`}>
//           {title}
//         </Link>{' '}
//         ({new Date(publishedAt).toDateString()})
//       </li>
//     )
// )}
