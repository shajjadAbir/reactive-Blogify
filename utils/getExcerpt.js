export function getExcerpt(htmlString, wordLimit = 20) {
  if (!htmlString) return "";

  // Remove HTML tags
  const plainText = htmlString.replace(/<[^>]*>/g, "");

  // Words slice
  const words = plainText.trim().split(/\s+/).slice(0, wordLimit);

  // sliced excerpt
  return words.join(" ") + "...";
}
