import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { sanity } from "../../studio/sanity.client";

const ArticlePage: NextPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <pre>{JSON.stringify(articles, null, 2)}</pre>;
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = (await sanity.fetch('*[_type == "article"]')) as any[];
  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
};

export default ArticlePage;
