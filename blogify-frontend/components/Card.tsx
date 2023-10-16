import { Post } from "@/utils/types";
import Image from "next/image";
import React from "react";

export default function Card({ data }: { data: Post }) {
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
