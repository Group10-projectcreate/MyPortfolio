export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Web Application QA Testing",
      description:
        "Performed exploratory, regression, and usability testing for a sample web application while documenting defects, edge cases, and validation issues.",
      tools: ["Postman", "Jira", "Chrome DevTools"],
      impact: "Improved issue reporting and testing coverage",
    },
    {
      title: "Authentication API Investigation",
      description:
        "Tested authentication endpoints, token validation, and login error handling workflows using Postman and browser debugging tools.",
      tools: ["REST APIs", "JSON", "Postman"],
      impact: "Identified inconsistent API error responses",
    },
    {
      title: "Performance Troubleshooting Case Study",
      description:
        "Investigated slow-loading dashboard behavior using browser DevTools and documented findings clearly for escalation and resolution.",
      tools: ["DevTools", "Logs", "Troubleshooting"],
      impact: "Reduced recurring user-reported issues",
    },
  ];

  const skills = [
    "Technical Troubleshooting",
    "Exploratory Testing",
    "Regression Testing",
    "API Testing",
    "Bug Reporting",
    "Incident Escalation",
    "Root Cause Analysis",
    "Customer Support",
    "Browser DevTools",
    "Postman",
    "Jira",
    "QA Documentation",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
      <section className="relative overflow-hidden px-6 md:px-16 py-28 border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black opacity-70" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.35em] text-sm mb-6 font-semibold">
              Technical Support & QA Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
              Ruth Nekesa
            </h1>

            <h2 className="text-2xl md:text-3xl text-zinc-300 mb-8 font-medium">
              Technical Support Engineer | QA Analyst
            </h2>

            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Troubleshooting technical issues, investigating bugs, and improving
              user experience through structured testing, analytical thinking,
              and customer-focused problem solving.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-white text-black px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl">
                Download Resume
              </button>

              <button className="border border-zinc-700 px-7 py-3 rounded-2xl hover:bg-zinc-900 transition duration-300">
                View GitHub
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <h3 className="text-3xl font-bold">40+</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Tickets resolved weekly
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">QA</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Testing & bug analysis
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">API</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Investigation workflows
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full" />

            <div className="relative bg-zinc-950 border border-zinc-800 rounded-[2rem] p-10 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Support Investigation</h4>
                    <span className="text-green-400 text-sm">Resolved</span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Investigated authentication issue affecting users across
                    multiple browsers using DevTools and API validation.
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">QA Testing Workflow</h4>
                    <span className="text-blue-400 text-sm">In Progress</span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Regression testing and bug documentation for sample web
                    application release.
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">API Testing</h4>
                    <span className="text-yellow-400 text-sm">Validated</span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Tested authentication endpoints and documented API response
                    behavior using Postman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 border-b border-zinc-800 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              About
            </p>

            <h3 className="text-4xl font-bold mb-8">Professional Summary</h3>

            <p className="text-zinc-400 leading-relaxed text-lg mb-6">
              Technical support professional with experience diagnosing user
              issues, reproducing bugs, testing workflows, and collaborating
              with engineering teams to resolve technical problems efficiently.
            </p>

            <p className="text-zinc-500 leading-relaxed">
              Passionate about improving user experience through structured
              troubleshooting, exploratory testing, clear communication, and
              analytical investigation.
            </p>
          </div>

          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Skills & Tools
            </p>

            <h3 className="text-4xl font-bold mb-8">
              Technical Capabilities
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-2xl text-sm text-zinc-300 hover:border-blue-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
                Featured Work
              </p>

              <h3 className="text-4xl font-bold">
                QA & Support Projects
              </h3>
            </div>

            <p className="text-zinc-500 max-w-md">
              Practical troubleshooting and testing projects demonstrating
              investigation, debugging, and support workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-zinc-950 border border-zinc-800 rounded-[2rem] p-7 hover:border-blue-500 transition duration-300 hover:-translate-y-1"
              >
                <div className="h-44 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 mb-7 flex items-center justify-center text-zinc-600 text-sm overflow-hidden">
                  Project Preview
                </div>

                <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                  {project.title}
                </h4>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-2 rounded-full bg-black border border-zinc-700 text-zinc-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="pt-5 border-t border-zinc-800">
                  <p className="text-sm text-blue-400 font-medium">
                    {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 border-b border-zinc-800 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-10 shadow-xl">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Experience
            </p>

            <h3 className="text-3xl font-bold mb-8">
              Technical Support Experience
            </h3>

            <ul className="space-y-5 text-zinc-400 leading-relaxed">
              <li>
                • Managed technical support tickets and escalations across
                multiple workflows
              </li>

              <li>
                • Diagnosed application, login, and browser-related issues
              </li>

              <li>
                • Investigated API and authentication failures using Postman
                and DevTools
              </li>

              <li>
                • Collaborated with teams to reproduce and document defects
              </li>

              <li>
                • Assisted users through structured troubleshooting and issue
                resolution
              </li>
            </ul>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-10 shadow-xl">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Technical Writing
            </p>

            <h3 className="text-3xl font-bold mb-8">Knowledge Sharing</h3>

            <div className="space-y-6 text-zinc-400">
              <div className="border-b border-zinc-800 pb-5">
                <h4 className="text-white font-semibold text-lg mb-2">
                  Investigating Slow API Responses Using DevTools
                </h4>
                <p className="text-sm text-zinc-500">Dev.to Article</p>
              </div>

              <div className="border-b border-zinc-800 pb-5">
                <h4 className="text-white font-semibold text-lg mb-2">
                  Exploratory Testing Checklist for Web Applications
                </h4>
                <p className="text-sm text-zinc-500">Hashnode Article</p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Common Authentication Errors and Troubleshooting Steps
                </h4>
                <p className="text-sm text-zinc-500">Medium Article</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h3 className="text-5xl font-bold mb-6">Let’s Connect</h3>

          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in technical support, QA, or troubleshooting-focused
            opportunities? I’d love to connect and discuss how I can contribute
            to your team.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-white text-black px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300">
              LinkedIn
            </button>

            <button className="border border-zinc-700 px-7 py-3 rounded-2xl hover:bg-zinc-900 transition duration-300">
              GitHub
            </button>

            <button className="border border-zinc-700 px-7 py-3 rounded-2xl hover:bg-zinc-900 transition duration-300">
              Email Me
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8 max-w-2xl mx-auto">
            <p className="text-zinc-400 leading-relaxed">
              Focused on troubleshooting, QA, customer support, and continuous
              improvement through structured investigation and problem solving.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

