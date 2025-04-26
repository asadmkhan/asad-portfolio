import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogPage() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/blog'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('src/content/blog', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug: frontmatter.slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
    };
  });

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.description}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
