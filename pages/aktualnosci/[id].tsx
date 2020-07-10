import React from 'react';
import { NEWS, News } from '../../news/news';
import Article from '../../components/Article/Article';

interface Props {
  news: News;
}

const SingleNews: React.FC<Props> = ({ news }) => {
  return <Article news={news} short={false} />;
};

export async function getStaticProps({ params }) {
  const news = NEWS.find((news) => news.id === params.id);
  return {
    props: {
      news,
    },
  };
}

export async function getStaticPaths() {
  const paths = NEWS.map((news) => `/aktualnosci/${news.id}`);
  return {
    paths,
    fallback: false,
  };
}

export default SingleNews;
