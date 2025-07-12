import Link from "next/link";

export default function CategoryList({ allBlogs, selected }) {
  const uniqueCategories = [...new Set(allBlogs.map((b) => b.category))];

  const getCategoryHref = (cat) => {
    let newSelected = selected.includes(cat)
      ? selected.filter((c) => c !== cat)
      : [...selected, cat];

    const params = newSelected.length
      ? `?category=${encodeURIComponent(newSelected.join(","))}`
      : "";
    return `/${params}`;
  };

  return (
    <div className="sticky top-20">
      <h3 className="text-lg font-bold mb-4">
        Discover more of what matters to you
      </h3>
      <div className="flex flex-wrap gap-2">
        {uniqueCategories.map((cat) => (
          <Link
            key={cat}
            href={getCategoryHref(cat)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selected.includes(cat)
                ? "bg-green-200 font-medium"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-pressed={selected.includes(cat)}
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
