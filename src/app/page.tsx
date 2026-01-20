export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Run Your School with <br />
            Clarity, Control, and Confidence
          </h1>

          <p className="mt-6 text-lg max-w-2xl text-gray-700">
            Schooldb is a centralized school management system designed for
            principals and management to make accurate, data-driven decisions
            across academics, operations, and finance.
          </p>

          <a
            href="/demo"
            className="inline-block mt-10 bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Request a Management Demo
          </a>

          <p className="mt-4 text-sm text-gray-500">
            Built specifically for school leadership and management teams
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">
            Challenges Faced by School Management
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc list-inside max-w-3xl">
            <li>Attendance, marks, and fees managed in separate systems</li>
            <li>Limited visibility into daily academic and staff operations</li>
            <li>Delayed or inconsistent reports for leadership decisions</li>
            <li>High dependency on manual processes and individuals</li>
          </ul>
        </div>
      </section>

      {/* DECISION PLATFORM */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">
            One Platform. One Source of Truth.
          </h2>

          <p className="mt-4 max-w-3xl text-gray-700">
            Schooldb unifies academics, attendance, staff operations, and
            financial data into a single secure platform—giving school leadership
            complete visibility, accountability, and control.
          </p>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Schooldb in Action
          </h2>

          <p className="text-gray-600 max-w-3xl mb-10">
            Real dashboards used by school management to monitor attendance,
            academic performance, staff activity, and fee status—all in one
            place.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/screenshots/admin-dashboard.png"
              alt="Schooldb Admin Dashboard"
              className="rounded-lg border border-gray-200 shadow-sm"
            />
            <img
              src="/screenshots/attendance.png"
              alt="Attendance Management"
              className="rounded-lg border border-gray-200 shadow-sm"
            />
            <img
              src="/screenshots/students.png"
              alt="Student Management"
              className="rounded-lg border border-gray-200 shadow-sm"
            />
            <img
              src="/screenshots/fees.png"
              alt="Fees Management"
              className="rounded-lg border border-gray-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-indigo-600 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Make Confident Decisions with Complete Visibility
        </h2>

        <a
          href="/demo"
          className="inline-block mt-8 bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Schedule a Demo
        </a>
      </section>
    </main>
  );
}
