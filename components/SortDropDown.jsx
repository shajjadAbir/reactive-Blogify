"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortDropdown({ currentSort }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("sort", e.target.value);
    router.push(`/?${newParams}`);
  };

  return (
    <div>
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        name="sort"
        value={currentSort}
        onChange={handleSortChange}
        className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}
