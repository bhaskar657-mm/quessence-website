"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import React from "react";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (React.isValidElement(children)) {
    const props = children.props as Record<string, unknown>;
    if (props.children) {
      return extractText(props.children as React.ReactNode);
    }
  }
  return "";
}

const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => {
    const text = extractText(children);
    const id = slugify(text);
    return (
      <h2 id={id} {...props} className="scroll-mt-28">
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const text = extractText(children);
    const id = slugify(text);
    return (
      <h3 id={id} {...props} className="scroll-mt-28">
        {children}
      </h3>
    );
  },
};

export function BlogContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
