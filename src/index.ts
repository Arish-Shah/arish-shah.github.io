import {
  generateBlogPage,
  generateHtmlPage,
  generateWritingListPage,
} from "./build/generate";
import { readDir } from "./build/read";
import { write } from "./build/write";

async function main() {
  const content = await Promise.all(
    (await readDir("content")).map(generateBlogPage)
  );
  const pages = await readDir("pages");
  const writingListPage = await generateWritingListPage(content);

  const html = await generateHtmlPage([...content, ...pages, writingListPage]);
  await html.forEach(write);
}

main().catch(console.error);
