/* eslint-disable react/no-unescaped-entities */
import BookmarkIcon from "@/components/BookmarkIcon";
import { generateSlug, getBlogs } from "@/lib/getBlogs";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: generateSlug(blog.title),
  }));
}

export default async function BlogDetailPage({ params }) {
  const blogs = await getBlogs();
  const blog = blogs.find((b) => generateSlug(b.title) === params.slug);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-center">Blog Not Found</h1>
        <p className="text-center text-gray-600">
          Sorry, we couldn't find the blog you were looking for.
        </p>
      </div>
    );
  }

  const recommended = blogs
    .filter(
      (b) =>
        b.category === blog.category && generateSlug(b.title) !== params.slug
    )
    .slice(0, 4);

  return (
    <section className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Blog Content */}

        <div className="lg:w-2/3 lg:pr-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {blog.title}
              </h1>

              <div className="flex items-center mb-6">
                <Image
                  src={blog.authorAvatar}
                  alt={blog.author}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">{blog.author}</span>
                    <button className="text-green-600 text-sm font-medium">
                      Follow
                    </button>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <span>{blog.date}</span>
                    <span className="mx-1">·</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          </div>{" "}
          {/* Recommended Blogs Section */}
          <section className="bg-gray-50 py-12 mt-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <h3 className="text-xl font-bold mb-6">Recommended Blogs</h3>
              <div className="grid grid-cols-2 gap-4">
                {recommended.map((rec) => (
                  <article
                    key={rec.title}
                    className="mb-10 pb-10 border-b border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <Image
                        src={rec.authorAvatar}
                        alt={rec.author}
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-full mr-2"
                      />
                      <span className="text-sm font-medium">{rec.author}</span>
                    </div>
                    <Link href={`/blog/${generateSlug(rec.title)}`}>
                      <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">
                        {rec.title}
                      </h2>
                    </Link>
                    <p className="text-gray-700 mb-4">
                      {rec.description.replace(/<[^>]+>/g, "").slice(0, 80)}...
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-500 text-sm">
                        <span>{rec.date}</span>
                        <span className="mx-1">·</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {rec.category}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <BookmarkIcon />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}

        <aside className="lg:w-1/3 mt-10 lg:mt-0">
          <div className="sticky top-20">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">
                Discover more of what matters to you
              </h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogs.map((b) => b.category))).map(
                  (cat) => (
                    <Link
                      key={cat}
                      href={`/?category=${encodeURIComponent(cat)}`}
                      className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {cat}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-2">
                <Link href="/help" className="hover:text-gray-700">
                  Help
                </Link>
                <Link href="/status" className="hover:text-gray-700">
                  Status
                </Link>
                <Link href="/writers" className="hover:text-gray-700">
                  Writers
                </Link>
                <Link href="/blog" className="hover:text-gray-700">
                  Blog
                </Link>
                <Link href="/careers" className="hover:text-gray-700">
                  Careers
                </Link>
                <Link href="/privacy" className="hover:text-gray-700">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-gray-700">
                  Terms
                </Link>
                <Link href="/about" className="hover:text-gray-700">
                  About
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
