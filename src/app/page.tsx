import FeatureCard from "@/components/FeatureCard";

export const metadata = {
  title: "Schooldb | Smart School Management System",
  description:
    "Schooldb helps school principals and management run academics, attendance, staff, and fees with clarity and control.",
  openGraph: {
    title: "Schooldb – Smart School Management System",
    description:
      "A centralized platform for school principals to manage operations with confidence.",
    images: ["/og/home.png"],
    type: "website",
  },
};



export default function Home() {
  return (
    <main className="bg-slate-50 text-gray-900">
      {/* HERO */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold leading-tight">
            Empower Your School With Smart Management
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Schooldb unifies student data, attendance, academics, fees, and
            reports into one powerful dashboard—built for principals and
            administrative leaders.
          </p>
          <a
            href="/demo"
            className="mt-8 inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition"
          >
            Schedule a Demo
          </a>
        </div>
      </section>

      {/* WHY */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Why Schooldb</h2>
          <p className="text-gray-700 mt-4">
            Designed for education leaders. Built to save time and improve
            decision-making with real-time insights and automated reporting.
          </p>
        </div>
      </section>

      {/* FEATURES PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard title="Unified Dashboard" description="View students, attendance, teachers, and finance all in one place." />
            <FeatureCard title="Attendance & Reports" description="Class-wise, date-wise attendance with export options." />
            <FeatureCard title="Fees & Financials" description="Transparent fee tracking and due reports." />
            <FeatureCard title="Academic Records" description="Marks, homework, and results in one system." />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold">Ready to Transform Your School?</h2>
        <a
          href="/demo"
          className="mt-6 inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Request a Demo
        </a>
      </section>
    </main>
  );
}
