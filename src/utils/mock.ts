import { BlogProps } from "./types";

const blogs: BlogProps[] = [
  {
    title: "Finally Master Next.js's Most Complex Feature - Caching",
    desc: "By far the most confusing part of the app router in Next.js is how caching works which is why this article will break down exactly how every part of Next.js's cache works so you can stop fighting it and start benefiting from amazing performance gains.",
    created_at: Date.now(),
    tag: ["Next.js"],
  },
  {
    title: "New CSS Property margin-trim",
    desc: "The new CSS property margin-trim is very simple, but incredibly useful when working in a component based design system.",
    created_at: Date.now(),
    tag: ["CSS"],
  },
  {
    title: "React Server Components - A New Paradigm",
    desc: "Server components are the new way of writing React applications and it changes everything about React making it easier than ever to create complex applications. This article goes in depth into everything you need to know about server components.",
    created_at: Date.now(),
    tag: ["React", "Next.js"],
  },
];

export { blogs };
