// components/SimpleBio.js
export default function SimpleBio() {
  return (
    <section className="rounded-lg pb-16">
      <div className="bg-gray-100 container mx-auto p-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi 👋 my name is James, and I am an incoming graduate student at The
            University of Texas at Dallas. Currently as a software engineer, I
            have been privileged to work at prestigious companies such as{" "}
            <a
              href="https://sra.samsung.com/"
              target="_blank"
              rel="noreferrer"
              className="underline-text text-blue-500"
            >
              @samsung
            </a>{" "}
            and{" "}
            <a
              href="https://www.amazon.jobs/en/teams/people-technology"
              target="_blank"
              rel="noreferrer"
              className="underline-text text-blue-500"
            >
              @amazon
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed">
            I am developing and learning AI focusing on Natural Language
            Processing. I'm passionate about exploring the future of AI and want
            to make an impact to the world.
          </p>
        </div>
      </div>
    </section>
  );
}
