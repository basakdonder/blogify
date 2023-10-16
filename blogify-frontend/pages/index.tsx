import type { GetStaticProps, InferGetStaticPropsType } from "next";
import MainSection1 from "@/components/MainSection1";
import ApiFetcher from "@/utils";
import Card from "@/components/Card";
import { Post } from "@/utils/types";
const fetcher = new ApiFetcher();

export const getStaticProps: GetStaticProps = async (context) => {
  const posts: Post[] = await fetcher.fetchData("/post-list");
  return { props: { posts }, revalidate: 20 };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts);
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto">
        <MainSection1 />
        {posts.map((post: Post) => (
          <Card data={post} />
        ))}
      </div>
    </main>
  );
}
