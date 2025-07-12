import BlogCard from "@/components/BlogCard";
import CategoryList from "@/components/CategoryList";
import SortDropdown from "@/components/SortDropdown";
import { generateSlug, getBlogs } from "@/lib/getBlogs";

const parseDate = (str) => {
  const [day, month, year] = str.split("-");
  return new Date(`${year}-${month}-${day}`);
};

export default async function Home({ searchParams = {} }) {
  const allBlogs = await getBlogs();

  const selected = searchParams.category
    ? searchParams.category.split(",")
    : [];

  const sortBy = searchParams.sort || "latest";

  const filtered = selected.length
    ? allBlogs.filter((b) => selected.includes(b.category))
    : allBlogs;

  const sorted = [...filtered].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return sortBy === "oldest" ? dateA - dateB : dateB - dateA;
  });

  return (
    <main className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-12">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Articles</h2>
              <SortDropdown currentSort={sortBy} />
            </div>

            {sorted.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                slug={generateSlug(blog.title)}
              />
            ))}
            <div className="text-center">
              <button
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Load more articles"
              >
                Load more
              </button>
            </div>
          </div>

          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <CategoryList allBlogs={allBlogs} selected={selected} />
          </div>
        </div>
      </div>
    </main>
  );
}
