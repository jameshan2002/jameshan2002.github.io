import BlogCard from "../components/blogcard";

const blogPosts = [
  {
    title: "Welcome to My Blog",
    date: "2024-01-15",
    excerpt: "This is a test blog post. Welcome to my blog!",
    slug: "getting-started-with-nextjs",
  },
];

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-4xl w-full">
        <div className="prose max-w-none mb-8">
          <h1>Blog</h1>
          <p className="text-gray-600">
            Welcome to my blog! Here you'll find a collection of articles on AI,
            and other topics that interest me. <br /> Check back often for new
            posts and updates.
          </p>
        </div>

        {/* Search and filter section */}
        {/* <div className="mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div> */}

        {/* Blog posts grid */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
