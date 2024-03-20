import fs from "fs/promises";
import { Page } from "../types.js";
import { generateInputPath } from "./generate.js";

export function readFile(loc: string) {
  return fs.readFile(loc, "utf-8");
}

export async function readDir(name: string, stripExtension = false) {
  let files = await fs.readdir(generateInputPath(name));
  files = files.filter((file) => !file.startsWith("_"));

  const contents = await Promise.all(
    files.map((file) => readFile(generateInputPath(name, file)))
  );
  return files.map((file, index) => {
    return {
      name: stripExtension ? file.split(".")[0] : file,
      content: contents[index],
    } satisfies Page as Page;
  });
}

export function readLayouts() {
  return readDir("layouts", true);
}

export function readComponents() {
  return readDir("components", true);
}
