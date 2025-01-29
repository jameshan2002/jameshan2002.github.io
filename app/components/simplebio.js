// components/SimpleBio.js
export default function SimpleBio() {
  return (
    <section className="rounded-lg">
      <div className="bg-gray-100 container mx-auto p-6">
        <div className="max-w-2xl mx-auto text-base">
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi! I'm James, and I'm passionate about exploring the intersections
            of AI and human interaction. Currently, I'm pursuing my M.Sc. in
            Computer Science at{" "}
            <a
              href="https://www.utdallas.edu/"
              target="_blank"
              rel="noreferrer"
              className="underline-text text-blue-500"
            >
              The University of Texas at Dallas
            </a>
            .
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I've had the privilege of working at leading tech companies like{" "}
            <a
              href="https://www.amazon.jobs"
              target="_blank"
              rel="noreferrer"
              className="underline-text text-blue-500"
            >
              Amazon
            </a>{" "}
            and{" "}
            <a
              href="https://research.samsung.com/"
              target="_blank"
              rel="noreferrer"
              className="underline-text text-blue-500"
            >
              Samsung Research America
            </a>
            .
            {/* At Samsung, I contributed to NEON, an Artificial Human Assistant
            project that received significant media attention. During my time at
            Amazon, I worked with both the Kindle and Recruiting Engine teams,
            gaining valuable experience in large-scale software development.
          **/}
          </p>

          <p className="text-gray-700 leading-relaxed">
            My research journey began as an Undergraduate Researcher, where I
            worked on Imbalanced Data Classification with LLMs. I'm currently
            deepening my knowledge in Deep Learning and NLP through advanced
            coursework and independent study.
          </p>
        </div>
      </div>
    </section>
  );
}
