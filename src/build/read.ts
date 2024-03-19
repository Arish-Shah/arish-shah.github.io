import fs from "fs/promises";
import path from "path";
import { Page } from "../types.js";

export function readFile(loc: string) {
  return fs.readFile(loc, "utf-8");
}

export async function readDir(name: string, stripExtension = false) {
  const files = await fs.readdir(path.join(process.cwd(), "src", name));
  const contents = await Promise.all(
    files.map((file) => readFile(path.join(process.cwd(), "src", name, file)))
  );
  return files.map((file, index) => {
    return {
      name: stripExtension ? file.split(".")[0] : file,
      content: contents[index],
    } satisfies Page as Page;
  });
}
