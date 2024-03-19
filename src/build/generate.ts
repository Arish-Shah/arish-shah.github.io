import grayMatter from "gray-matter";
import { Page, PageWithData } from "../types";
import { fillComponents, fillData, fillLayout } from "./fill";
import { addLayout, markdownToHtml } from "./util";

type GenerateHTMLPageProps = {
  pages: Page[];
  layouts: Page[];
  components: Page[];
};

export async function generateBlogPage(page: Page, layout: Page) {
  const { data, content: markdown } = grayMatter(page.content);
  const content = await addLayout(
    layout.content,
    await markdownToHtml(markdown),
    data
  );
  return { name: page.name, data, content } satisfies PageWithData;
}

export async function generateHtmlPage({
  pages,
  layouts,
  components,
}: GenerateHTMLPageProps) {
  return pages
    .map((page) => fillLayout(page, layouts))
    .map((page) => fillComponents(page, components))
    .map(fillData);
}
