import * as cheerio from "cheerio";
import { Page, PageWithData } from "../types";

export function fill(content: string, data: Record<string, string>) {
  let updatedContent = content;
  for (let key in data) {
    updatedContent = updatedContent.replaceAll(`{{ ${key} }}`, data[key]);
  }
  return updatedContent;
}

export function fillLayout(page: Page, layouts: Page[]) {
  const $ = cheerio.load(page.content, null, false);
  const layoutEl = $("layout");
  const data = layoutEl.attr()!;

  const layout = layouts.find((l) => l.name === data.name)!;
  const content = layout.content.replace("<slot></slot>", layoutEl.html()!);

  return {
    name: page.name,
    content,
    data,
  } satisfies PageWithData;
}

export function fillComponents(page: PageWithData, components: Page[]) {
  let content = page.content;

  while (true) {
    const $ = cheerio.load(content);
    const componentEls = $("component");

    if (componentEls.length === 0) break;

    const componentEl = componentEls.first();
    const data = componentEl.attr()!;

    const component = components.find((c) => c.name === data.name)!;
    let innerHtml = fill(component.content, data).replace(
      "<slot></slot>",
      componentEl.html()!
    );
    content = content.replace($.html(componentEl), innerHtml);
  }

  return { ...page, content } satisfies PageWithData;
}

export function fillData(page: PageWithData) {
  const content = fill(page.content, page.data);
  return { ...page, content } satisfies PageWithData;
}
