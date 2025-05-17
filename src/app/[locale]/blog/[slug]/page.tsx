import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import "@/styles/blog.css"; // Import the blog-specific styles

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/content/blog"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const markdownWithMeta = fs.readFileSync(path.join("src/content/blog", `${params.slug}.mdx`), "utf-8");
  const { content, data: frontmatter } = matter(markdownWithMeta);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-gray-600 mb-8">{frontmatter.date}</p>

      {/* Apply the scoped blog styles */}
      <article className="blog-content">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
