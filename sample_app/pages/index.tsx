import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';

import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import { getPostsDate } from '@/lib/post';

//ssgの場合
export async function getStaticProps() {
  const allPostsData = getPostsDate();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyle.headingMD}>
        <p className={utilStyle.headingMd}>学生エンジニア フロントエンド　セキュリティ</p>
      </section>

      <section>
        <h2>エンジニアのブログ</h2>
      <div className={styles.grid}>
         {allPostsData.map(({id, title, date, thumbnail}) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>
            <img src={`${thumbnail}`}
            className={styles.thumbnailImage} 
            />
          </Link>
          <Link href={`/posts/${id}`}>
            <p className={utilStyle.boldText}>
              {title}
            </p>
          </Link>
          <br />
          <small className={utilStyle.light}>
            {date}
          </small>
        </article>
        ))}
      </div>
      </section>
    </Layout>
  )
}
