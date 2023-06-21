import { GetStaticProps } from "next"

type AboutMeProps = {
  title: string
  description: string
  slug: string
  heroImage?: string
}

const AboutMe = (props: AboutMeProps) => {
  const { title, description, slug, heroImage } = props

  const formatDescription = (html: string) => {
    const paragraphs = html.split("\n").map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
    return paragraphs;
  }

  return (
    <div style={{ margin: '24px', fontFamily: 'Poppins, sans-serif' }}>
      <div style={{ width: '100%', justifyContent: 'center', alignContent: 'center', display: 'flex' }}>
        <h1 style={{fontFamily: 'Poppins, sans-serif' }}>{title}</h1>
      </div>
      <div style={{fontFamily: 'Poppins, sans-serif' }}>{formatDescription(description)}</div>
      <div style={{ paddingTop: '24px', width: '100%', justifyContent: 'center', alignContent: 'center', display: 'flex', fontFamily: 'Poppins, sans-serif' }}>
        <img src={heroImage} style={{ width: '220px', borderRadius: '12px' }} alt="Hero" />
      </div>
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
