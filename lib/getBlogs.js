import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data", "data.json");

export async function getBlogs() {
  const fileContent = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(fileContent);
}

export async function loadBlogs() {
  try {
    const blogs = await getBlogs();
    return blogs;
  } catch (error) {
    console.error("Error loading blogs:", error);
    return [];
  }
}

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "") // remove punctuation
    .replace(/\s+/g, "-") // replace spaces with dashes
    .slice(0, 80); // optional limit
}
