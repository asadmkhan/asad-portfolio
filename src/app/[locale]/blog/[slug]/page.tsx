import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";

interface BlogProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), "src/content/blog"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function BlogPostPage({ params }: BlogProps) {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/content/blog",
      `${params.slug}.mdx`
    );
    const fileContent = await fs.readFile(filePath, "utf8");
    const { content, data: frontmatter } = matter(fileContent);

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
          <p className="text-gray-500 mb-6">{frontmatter.date}</p>

          <div className="prose prose-lg dark:prose-invert tracking-normal leading-relaxed">
            <MDXRemote source={content} />
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
