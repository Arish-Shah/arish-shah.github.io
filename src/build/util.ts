import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { PageOrPageWithData } from "../types";
import { fill } from "./fill";

export async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown);
  return String(file);
}

export async function addLayout(
  layout: string,
  content: string,
  data: Record<string, string>
) {
  let updatedContent = fill(layout, data);
  updatedContent = updatedContent.replace("<slot></slot>", content);
  return updatedContent;
}

export function extract(arr: PageOrPageWithData[], name: string) {
  const index = arr.find((el) => el.name === name);
  arr.filter;
}
