type BlogProps = {
  id: number;
  title: string;
  desc: string;
  created_at: string | number;
  tag: Array<string>;
  content: string;
};

export type { BlogProps };
