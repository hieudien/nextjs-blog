import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {
  Container,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Container maxWidth="container.xl" p={2}>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Giang</b>. I'm cute</p>
      </section> */}
        <VStack align='stretch'>
          <h2 className={utilStyles.headingLg}>Sites:</h2>
          <UnorderedList>
            <ListItem>
              <Link href={`https://beshort.vercel.app/`}>
                <a>beshort</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                The simple URL shorten tool
              </small>
            </ListItem>
            <ListItem>
              <Link href={`https://seo-htmll.vercel.app/`}>
                <a>SEO HTML</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                WYSIWYG editer with HTML exportable
              </small>
            </ListItem>
            <ListItem>
              <Link href={'chakra-form'}><a>demo Chakra Form</a></Link>
              <br />
              <small className={utilStyles.lightText}>
                A simple demo of chakra form
              </small>
            </ListItem>
          </UnorderedList>
        </VStack>
        <VStack align='stretch'>
          <h2 className={utilStyles.headingLg}>Blogs:</h2>
          <UnorderedList>
            {allPostsData.map(({ id, date, title }) => (
              <ListItem className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>
      </Layout>
    </Container>
  )
}
