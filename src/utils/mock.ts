import { BlogProps } from "./types";

const sampleMD = `
  ## Introduction
  this is introduction paragraph that i will use in this test case.
Next.js is an amazing framework that makes writing complex server rendered React apps much easier, but there is one huge problem. Next.js’s caching mechanism is extremely complicated and can easily lead to bugs in your code that are difficult to debug and fix.

  ## Getting started
  this is paragraph that is in h2. it is getting started.

  \`\`\`\js
  const foo = [1,2,3]

  const bar = foo.find((n) => n === 1)
  console.log(bar)
  \`\`\`
`;

const blogs: BlogProps[] = [
  {
    id: 1,
    title: "Finally Master Next.js's Most Complex Feature - Caching",
    desc: "By far the most confusing part of the app router in Next.js is how caching works which is why this article will break down exactly how every part of Next.js's cache works so you can stop fighting it and start benefiting from amazing performance gains.",
    created_at: Date.now(),
    tag: ["Next.js"],
    content: sampleMD,
  },
  {
    id: 2,
    title: "New CSS Property margin-trim",
    desc: "The new CSS property margin-trim is very simple, but incredibly useful when working in a component based design system.",
    created_at: Date.now(),
    tag: ["CSS"],
    content: "# Introduction\nthis new css property was crazy",
  },
  {
    id: 3,
    title: "React Server Components - A New Paradigm",
    desc: "Server components are the new way of writing React applications and it changes everything about React making it easier than ever to create complex applications. This article goes in depth into everything you need to know about server components.",
    created_at: Date.now(),
    tag: ["React", "Next.js"],
    content: `
   \`\`\`\js 
   import fs from 'fs/promises'
    
   const file = fs.readFile('./data.json', "utf-8")
    \`\`\`
   `,
  },
];

export { blogs };
