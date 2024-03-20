import grayMatter from "gray-matter";
import path from "path";
import { Page, PageWithData } from "../types";
import { fill, fillComponents, fillData, fillLayout } from "./fill";
import { readComponents, readFile, readLayouts } from "./read";
import { addLayout, markdownToHtml } from "./util";

export function generateInputPath(...paths: string[]) {
  return path.join(process.cwd(), "src", ...paths);
}

export function generateOutputPath(name: string) {
  const outDir = "docs";
  const directFiles = ["index.html", "404.html"];

  if (directFiles.indexOf(name) >= 0) return path.join(outDir, name);

  const fileName = name.split(".")[0];
  if (name.indexOf(".md") >= 0) {
    return path.join(outDir, "writing", fileName, "index.html");
  } else {
    return path.join(outDir, fileName, "index.html");
  }
}

export async function generateBlogPage(page: Page) {
  const layout = (await readLayouts()).find((l) => l.name === "blog")!;

  const { data, content: markdown } = grayMatter(page.content);
  const content = await addLayout(
    layout.content,
    await markdownToHtml(markdown),
    data
  );
  return {
    name: page.name,
    data,
    content,
  } satisfies PageWithData as PageWithData;
}

export async function generateWritingListPage(blogs: PageWithData[]) {
  let content = await readFile(generateInputPath("pages", "_writing.html"));
  const component = await readFile(
    generateInputPath("components", "writing-list-item.html")
  );

  blogs.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    return 0;
  });

  const list = blogs.map((c) => {
    return fill(component, {
      name: c.name.replace(".md", ""),
      ...c.data,
    });
  });

  content = content.replace("<slot></slot>", list.join("\n"));

  return {
    name: "writing.html",
    content,
  } satisfies Page as Page;
}

export async function generateHtmlPage(pages: Page[]) {
  const layouts = await readLayouts();
  const components = await readComponents();

  return pages
    .map((page) => fillLayout(page, layouts))
    .map((page) => fillComponents(page, components))
    .map(fillData);
}
