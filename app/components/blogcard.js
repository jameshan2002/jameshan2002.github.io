export default function BlogCard({ title, date, excerpt, slug }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 bg-white">
      <div className="prose max-w-none">
        <div className="not-prose mb-2">
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
        <h2 className="mt-0 mb-2 ">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a
          href={`/blog/${slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium no-underline hover:underline"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
