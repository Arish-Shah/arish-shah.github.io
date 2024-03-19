import { fillComponents, fillData, fillLayout } from "./build/fill";
import { readDir } from "./build/read";
import { write } from "./build/write";

async function main() {
  const layouts = await readDir("layouts", true);
  const components = await readDir("components", true);

  const pages = await Promise.all(
    (await readDir("pages"))
      .map((page) => fillLayout(page, layouts))
      .map((page) => fillComponents(page, components))
      .map(fillData)
      .map(write)
  );

  const content = await readDir("content");

  console.info("written files:\n" + pages.join("\n"));
}

main().catch(console.error);
