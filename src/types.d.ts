export type Page = {
  name: string;
  content: string;
};

export type PageWithData = Page & {
  data: {
    [key: string]: any;
  };
};

export type PageWithOptionalData = Page & Partial<Pick<PageWithData, "data">>;

export type PageOrPageWithData = Page | PageWithData;
