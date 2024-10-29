export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose max-w-none">
        <header className="not-prose mb-8">
          <div className="mb-2">
            <span className="text-gray-500">January 15, 2024</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Getting Started with Next.js
          </h1>
        </header>

        <p>
          Next.js has revolutionized the way we build React applications. With
          its powerful features like server-side rendering, static site
          generation, and built-in routing, it's become the go-to framework for
          modern web development.
        </p>

        <h2>Why Next.js?</h2>
        <p>
          Next.js provides an excellent developer experience with features like:
        </p>
        <ul>
          <li>Zero configuration</li>
          <li>Automatic routing</li>
          <li>Built-in optimization</li>
          <li>Server-side rendering</li>
          <li>API routes</li>
        </ul>

        <h2>Getting Started</h2>
        <p>
          To create a new Next.js project, you can use the following command:
        </p>
        <pre>
          <code>npx create-next-app@latest my-next-app</code>
        </pre>

        <p>
          This will set up a new Next.js project with all the necessary
          dependencies and configuration files.
        </p>
      </div>
    </article>
  );
}
