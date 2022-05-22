import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Ad() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params } : any) {
  // Fetch necessary data for the blog post using params.id
}