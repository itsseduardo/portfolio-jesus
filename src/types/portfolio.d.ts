export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  challenge: string;
  contribution: string;
  result: string;
  stack: string[];
  modules?: string[];
  color: string;
  image: string;
  deployUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  notice?: string;
};
