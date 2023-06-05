import { GetStaticProps } from "next"

type AboutMeProps = {
  title: string
  description: string
  slug: string
  heroImage?: string
}

const AboutMe = (props: AboutMeProps) => {
  const { title, description, slug, heroImage } = props
  console.log(heroImage)
  return (
    <div>
      <h1>{title} </h1>
      <h1>{description} </h1>
      <h1>{slug} </h1>
      <img src={heroImage} alt="Hero" />
    </div>
  )
}
export const getStaticProps: GetStaticProps<AboutMeProps> = async () => {
  const query = `
    query AboutMeQuery {
      blogPage(where: {slug: "about-me"}) {
        title
        slug
        description
        heroImage {
          url
        }
      }
    }
`

  const body = { query }
  const res = await fetch(process.env.API_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(body),
  })
  const { data } = await res.json()
  return {
    props: {
      title: data.blogPage.title,
      description: data.blogPage.description,
      slug: data.blogPage.slug,
      heroImage: data.blogPage.heroImage.url,
    },
  }
}
export default AboutMe
