export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
