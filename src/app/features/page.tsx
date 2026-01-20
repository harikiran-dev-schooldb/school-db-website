export const metadata = {
  title: "Features | Schooldb",
  description:
    "Explore Schooldb features including attendance, marks, fees, student and teacher management built for school leadership.",
  openGraph: {
    title: "Schooldb Features",
    description:
      "All-in-one school management features for principals and administrators.",
    images: ["/og/features.png"],
    type: "website",
  },
};




export default function Features() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold">Schooldb Features</h1>

      <p className="mt-4 text-lg max-w-3xl text-gray-700">
        Schooldb is a centralized school management system built to support
        principals and management with clear visibility, structured control,
        and confident decision-making across academics, operations, and finance.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Feature
          title="Admin Dashboard"
          text="A leadership-level dashboard that provides a real-time overview of students, teachers, attendance trends, and financial status."
        />

        <Feature
          title="Role-Based Access (Admin & Teacher)"
          text="Well-defined access roles ensure responsibility sharing while allowing both administrators and teachers to manage attendance and marks."
        />

        <Feature
          title="Student Management"
          text="Centralized student profiles with academic records, attendance history, class details, and fee status in one secure system."
        />

        <Feature
          title="Teacher Management"
          text="Clear visibility into teacher assignments, class responsibilities, and workload to support accountability and planning."
        />

        <Feature
          title="Attendance Management"
          text="Attendance can be recorded by both teachers and administrators, ensuring continuity, accuracy, and reduced operational dependency."
        />

        <Feature
          title="Attendance Reports"
          text="Detailed class-wise and date-wise attendance reports help management identify trends and address issues proactively."
        />

        <Feature
          title="Marks & Results"
          text="Structured and accurate marks entry by teachers and administrators enables timely result preparation and academic analysis."
        />

        <Feature
          title="Homework Management"
          text="Digital homework assignment helps maintain academic consistency and improves communication between teachers and students."
        />

        <Feature
          title="Fees Management"
          text="Transparent tracking of fee payments and dues with student-wise and term-wise clarity for better financial oversight."
        />

        <Feature
          title="Reports & Exports"
          text="Export-ready reports support audits, inspections, and management reviews with reliable and well-organized data."
        />
      </div>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-sm transition">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}


