/* eslint-disable @next/next/no-img-element */

import { generateSlug } from "@/lib/getBlogs";
import { getExcerpt } from "@/utils/getExcerpt";
import Image from "next/image";
import Link from "next/link";
import BookmarkIcon from "./BookmarkIcon";

export default function BlogCard({ blog }) {
  const slug = generateSlug(blog.title);

  return (
    <article className="mb-10 pb-10 border-b border-gray-200">
      <div className="flex items-center mb-4">
        <Image
          src={blog.authorAvatar}
          alt="Author"
          width={24}
          height={24}
          className="h-6 w-6 rounded-full mr-2"
        />
        <span className="text-sm font-medium">{blog.author}</span>
      </div>

      <Link href={`/blog/${slug}`}>
        <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">
          {blog.title}
        </h2>
      </Link>

      <p className="text-gray-700 mb-4">{getExcerpt(blog.description, 25)}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-500 text-sm">
          <span>{blog.date}</span>
          <span className="mx-1">·</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">
            {blog.category}
          </span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <BookmarkIcon />
        </button>
      </div>
    </article>
  );
}
