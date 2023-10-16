export interface Post {
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