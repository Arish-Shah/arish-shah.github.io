import fs from "fs-extra";
import { minify } from "html-minifier-terser";
import { PageWithData } from "../types";
import { generateOutputPath } from "./generate";

export async function write(page: PageWithData) {
  const file = generateOutputPath(page.name);
  let content = page.content;

  if (process.env.NODE_ENV !== "development") {
    content = await minify(page.content, {
      collapseWhitespace: true,
      removeComments: true,
    });
  }

  await fs.outputFile(file, content);
  console.log("written", file);
}
