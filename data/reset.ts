export type SrcImageType = {
  src: string;
  alt: string;
};

export type HrefFile = {
  href: string;
  name: string;
  type: string;
};

export type ColorImage = {
  name: string;
  hex?: string;
  image: SrcImageType;
};
