import { generateBlogPage, generateHtmlPage } from "./build/generate";
import { readDir } from "./build/read";
import { write } from "./build/write";

async function main() {
  const layouts = await readDir("layouts", true);
  const components = await readDir("components", true);

  const pages = await generateHtmlPage({
    pages: await readDir("pages"),
    layouts,
    components,
  });

  const blogLayout = layouts.find((l) => l.name === "blog")!;
  const content = await generateHtmlPage({
    pages: await Promise.all(
      (await readDir("content")).map((page) =>
        generateBlogPage(page, blogLayout)
      )
    ),
    layouts,
    components,
  });

  await pages.forEach(write);
  await content.forEach(write);
}

main().catch(console.error);
