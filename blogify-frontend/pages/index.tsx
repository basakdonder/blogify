import type { GetStaticProps, InferGetStaticPropsType } from "next";
import MainSection1 from "@/components/MainSection1";
import ApiFetcher from "@/utils";
const fetcher = new ApiFetcher();

interface Post {
  id: number;
  user: {
    id: number;
    user: string;
    image: string;
  };
  title: string;
  slug: string;
  updated_on: string;
  content: string;
  created_on: string;
  status: number;
}

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
      </div>
    </main>
  );
}
