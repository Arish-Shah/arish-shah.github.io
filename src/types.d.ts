export type Page = {
  name: string;
  content: string;
};

export type PageWithData = Page & {
  data: {
    [key: string]: any;
  };
};
