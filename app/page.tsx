export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold max-w-3xl">
            Run Your School with Clarity, Control, and Confidence
          </h1>

          <p className="mt-4 text-lg max-w-2xl">
            Schooldb is a centralized school management system built for
            principals and management to make accurate, data-driven decisions.
          </p>

          <a
            href="/demo"
            className="inline-block mt-8 bg-black text-white px-6 py-3 rounded"
          >
            Request a Management Demo
          </a>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">
            Challenges Faced by School Management
          </h2>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Attendance, marks, and fees in separate systems</li>
            <li>• Limited visibility into daily operations</li>
            <li>• Delayed or inaccurate reports</li>
            <li>• High dependency on manual processes</li>
          </ul>
        </div>
      </section>

      {/* DECISION SYSTEM */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">
            One Platform. One Source of Truth.
          </h2>

          <p className="mt-4 max-w-3xl text-gray-700">
            Schooldb brings academics, attendance, staff operations, and finances
            into a single secure platform—giving leadership complete control.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          Strong Decisions Build Strong Schools
        </h2>

        <a
          href="/demo"
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded"
        >
          Schedule a Demo
        </a>
      </section>
    </main>
  );
}
