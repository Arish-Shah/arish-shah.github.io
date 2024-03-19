export type Page = {
  name: string;
  content: string;
};

export type PageWithData = Page & {
  data: Record<string, string>;
};
