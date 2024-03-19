import fs from "fs-extra";
import { minify } from "html-minifier-terser";
import path from "path";
import { PageWithData } from "../types";

export function generatePath(name: string) {
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

export async function write(page: PageWithData) {
  const file = generatePath(page.name);
  const content = await minify(page.content, {
    collapseWhitespace: true,
    removeComments: true,
  });
  await fs.outputFile(file, content);
  console.log("written", file);
}
