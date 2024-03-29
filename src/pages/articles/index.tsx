import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import AppArticle from '../../components/article/article';
import { cmsClient } from '../../utils/cmsClient';

const ArticlePage: NextPage = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='mt-12 p-6 '>
      <div className='flex flex-row justify-between'>
        <p>Filtre - 2 appliqués </p>
        <IconAdjustmentsHorizontal className='mr-2' />
      </div>
      <>
        {articles.map((article) => {
          return <AppArticle key={article.slug} article={article} />;
        })}
      </>
    </div>
  );
};

export type Article = {
  slug: string;
  title: string;
  mainImage: string;
};

export const getStaticProps: GetStaticProps<{
  articles: Article[];
}> = async () => {
  const articles = (await cmsClient.fetch(
    '*[_type == "article"]'
  )) as Article[];
  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
};

export default ArticlePage;
