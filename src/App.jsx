

export default function PortfolioWebsite() {
  

  const projects = [
    {
      title: "Web Application QA Testing",
      description:
        "Exploratory, regression, and usability testing for a sample web app — documenting defects, edge cases, and validation issues with clear reproduction steps.",
      tools: ["Postman", "Jira", "Chrome DevTools"],
      impact: "Improved issue reporting and testing coverage",
      color: "#0D1B2A",
      accent: "#0E9E87",
      tag: "QA TESTING",
    },
    {
      title: "Authentication API Investigation",
      description:
        "Tested authentication endpoints, token validation, and login error handling workflows — surfacing inconsistent API responses and documenting findings for engineering.",
      tools: ["REST APIs", "JSON", "Postman"],
      impact: "Identified inconsistent API error responses",
      color: "#0A2318",
      accent: "#5DCAB4",
      tag: "API TESTING",
    },
    {
      title: "Performance Troubleshooting Case Study",
      description:
        "Investigated slow-loading dashboard behaviour using browser DevTools and logs — documenting findings clearly for escalation and providing a prioritised fix recommendation.",
      tools: ["DevTools", "Logs", "Troubleshooting"],
      impact: "Reduced recurring user-reported issues",
      color: "#1A0D2E",
      accent: "#A78BFA",
      tag: "PERFORMANCE",
    },
  ];

  const skills = [
    "Technical Troubleshooting",
    "Exploratory Testing",
    "Regression Testing",
    "API Testing (REST)",
    "Bug Reporting & Tracking",
    "Incident Escalation",
    "Root Cause Analysis",
    "Customer Support",
    "Browser DevTools",
    "Postman",
    "Jira",
    "QA Documentation",
  ];

  const tools = [
    "Jest", "Cypress", "Postman", "MySQL", "Git",
    "JavaScript", "Python", "Jira", "Chrome DevTools",
  ];

  const tickets = [
    {
      title: "Smart Meter Offline — Site Escalation",
      status: "Resolved",
      statusColor: "#0E9E87",
      statusBg: "rgba(14,158,135,0.12)",
      body: "Traced firmware config error affecting batch devices. Validated 200+ meter records post-fix. SOP created.",
    },
    {
      title: "Authentication API Failure Investigation",
      status: "Validated",
      statusColor: "#60A5FA",
      statusBg: "rgba(96,165,250,0.12)",
      body: "Tested endpoints via Postman, identified inconsistent error responses, documented for engineering fix.",
    },
    {
      title: "Regression Test Suite — Web App",
      status: "In Progress",
      statusColor: "#FBBF24",
      statusBg: "rgba(251,191,36,0.12)",
      body: "Running functional and edge-case tests. Bug reporting via Jira with full reproduction steps.",
    },
  ];

  const articles = [
    { title: "Investigating Slow API Responses Using DevTools", platform: "Dev.to" },
    { title: "Exploratory Testing Checklist for Web Applications", platform: "Hashnode" },
    { title: "Common Authentication Errors and Troubleshooting Steps", platform: "Medium" },
  ];

  const experience = [
    "Managed 150+ technical support tickets and device escalations at M-Gas Limited",
    "Configured and validated 200+ smart gas meters against system specifications",
    "Reduced configuration errors by 30% through end-to-end testing of internal tools",
    "Investigated API and authentication failures using Postman and DevTools",
    "Collaborated with firmware teams to reproduce, document, and resolve defects",
    "Created SOPs that improved knowledge transfer and reduced repeat incidents",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F5F0",
        color: "#1A1A2E",
        fontFamily: "'Outfit', 'Segoe UI', system-ui, sans-serif",
        fontSize: "15px",
        lineHeight: "1.6",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        .skill-tag:hover { border-color: #0E9E87 !important; color: #0E9E87 !important; background: #E0F5F2 !important; }
        .project-card:hover { transform: translateY(-5px); box-shadow: 0 16px 48px rgba(13,27,42,0.14); border-color: #0E9E87 !important; }
        .project-card { transition: all 0.25s ease; }
        .btn-primary:hover { background: #0B8A76 !important; transform: translateY(-1px); }
        .btn-ghost:hover { border-color: #5DCAB4 !important; color: #fff !important; }
        .nav-link:hover { color: #0E9E87 !important; }
        .article-row:hover { background: rgba(14,158,135,0.04) !important; }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(247,245,240,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #E5E0D8",
          padding: "0 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "18px",
            color: "#0D1B2A",
            letterSpacing: "-0.02em",
          }}
        >
          RNW
        </span>
        <div style={{ display: "flex", gap: "1.75rem" }}>
          {["About", "Projects", "Experience", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="nav-link"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#6B7280",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <div
        style={{
          background: "#0D1B2A",
          color: "#fff",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "520px",
        }}
      >
        {/* Left */}
        <div
          style={{
            padding: "4rem 3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ width: "24px", height: "1px", background: "#5DCAB4" }} />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "#5DCAB4",
                textTransform: "uppercase",
              }}
            >
              Technical Support & QA Portfolio
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "0.75rem",
            }}
          >
            Ruth{" "}
            <em style={{ color: "#5DCAB4", fontStyle: "italic" }}>Nekesa</em>
            <br />
            Wamalwa
          </h1>

          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.45)",
              fontWeight: 300,
              marginBottom: "1.75rem",
              letterSpacing: "0.02em",
            }}
          >
            Technical Support Engineer · QA Analyst · Nairobi, KE
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              maxWidth: "400px",
              marginBottom: "2.5rem",
            }}
          >
            Troubleshooting production systems, validating IoT device data, and
            improving software quality through structured testing and analytical
            thinking.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
            href = "/RUTH_WAMALWA_TSE.pdf"
                    download
              className="btn-primary"
              style={{
                background: "#0E9E87",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "all 0.2s",
              }}
            >
              Download Resume
            </a>
            <a
              href="https://github.com/Group10-projectcreate"
              className="btn-ghost"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.65)",
                padding: "10px 22px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
                transition: "all 0.2s",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View GitHub ↗
            </a>
          </div>
        </div>

        {/* Right — stats + tickets */}
        <div
          style={{
            padding: "3rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "12px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "4px" }}>
            {[
              { num: "150+", label: "Issues Resolved" },
              { num: "200+", label: "Meters Validated" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "2rem",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {tickets.map((t) => (
            <div
              key={t.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "1rem 1.25rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
                  {t.title}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    padding: "3px 9px",
                    borderRadius: "20px",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    background: t.statusBg,
                    color: t.statusColor,
                    whiteSpace: "nowrap",
                    marginLeft: "8px",
                  }}
                >
                  {t.status}
                </span>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", lineHeight: 1.6 }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TOOLS BAR */}
      <div
        style={{
          background: "#0D1B2A",
          padding: "1.25rem 2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.75rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: "rgba(255,255,255,0.28)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
          }}
        >
          Stack
        </span>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {tools.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.5)",
                padding: "4px 12px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                letterSpacing: "0.03em",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT + SKILLS */}
      <section style={{ padding: "4rem 2.5rem" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          <div>
            <SectionLabel>About</SectionLabel>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "2rem",
                letterSpacing: "-0.02em",
                color: "#0D1B2A",
                marginBottom: "1.5rem",
              }}
            >
              Professional Summary
            </h2>
            <p style={{ color: "#3D3D50", lineHeight: 1.8, marginBottom: "1rem" }}>
              Technical support professional with 3+ years of experience diagnosing
              production issues, validating IoT device data, and collaborating with
              firmware and engineering teams to ship reliable systems.
            </p>
            <p style={{ color: "#6B7280", lineHeight: 1.8 }}>
              Dual background in support and QA — comfortable triaging customer-facing
              incidents and writing structured test cases. Passionate about root-cause
              analysis and building documentation that prevents recurrence.
            </p>
          </div>

          <div>
            <SectionLabel>Skills & Tools</SectionLabel>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "2rem",
                letterSpacing: "-0.02em",
                color: "#0D1B2A",
                marginBottom: "1.25rem",
              }}
            >
              Technical Capabilities
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {skills.map((s) => (
                <span
                  key={s}
                  className="skill-tag"
                  style={{
                    fontSize: "12px",
                    padding: "6px 14px",
                    background: "#fff",
                    border: "1px solid #E5E0D8",
                    borderRadius: "20px",
                    color: "#1A1A2E",
                    fontWeight: 500,
                    cursor: "default",
                    transition: "all 0.2s",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        style={{
          padding: "4rem 2.5rem",
          background: "#fff",
          borderTop: "1px solid #E5E0D8",
          borderBottom: "1px solid #E5E0D8",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <SectionLabel>Featured Work</SectionLabel>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "2rem",
                  letterSpacing: "-0.02em",
                  color: "#0D1B2A",
                }}
              >
                QA & Support Projects
              </h2>
            </div>
            <p style={{ fontSize: "13px", color: "#6B7280", maxWidth: "340px", lineHeight: 1.7 }}>
              Practical troubleshooting and testing projects demonstrating investigation,
              debugging, and support workflows.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {projects.map((p) => (
              <div
                key={p.title}
                className="project-card"
                style={{
                  background: "#fff",
                  border: "1px solid #E5E0D8",
                  borderRadius: "14px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: "112px",
                    background: p.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#0D1B2A",
                      marginBottom: "6px",
                    }}
                  >
                    {p.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6B7280",
                      lineHeight: 1.65,
                      marginBottom: "1rem",
                    }}
                  >
                    {p.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "0.75rem" }}>
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "11px",
                          padding: "3px 10px",
                          background: "#F7F5F0",
                          border: "1px solid #E5E0D8",
                          borderRadius: "12px",
                          color: "#6B7280",
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      paddingTop: "0.75rem",
                      borderTop: "1px solid #E5E0D8",
                      fontSize: "12px",
                      color: "#0E9E87",
                      fontWeight: 600,
                    }}
                  >
                    ↑ {p.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE + WRITING */}
      <section style={{ padding: "4rem 2.5rem", background: "#EDE9E0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel>Experience & Writing</SectionLabel>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2rem",
              letterSpacing: "-0.02em",
              color: "#0D1B2A",
              marginBottom: "2rem",
            }}
          >
            Work History & Knowledge Sharing
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {/* Experience card */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #E5E0D8",
                borderRadius: "14px",
                padding: "1.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "#0E9E87",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Technical Support Experience
              </span>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.4rem",
                  color: "#0D1B2A",
                  marginBottom: "1.25rem",
                }}
              >
                Hands-on Support History
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {experience.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "13px",
                      color: "#3D3D50",
                      lineHeight: 1.65,
                      paddingLeft: "1.25rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#0E9E87",
                        fontSize: "10px",
                        top: "3px",
                      }}
                    >
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Writing card */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #E5E0D8",
                borderRadius: "14px",
                padding: "1.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "#0E9E87",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Technical Writing
              </span>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.4rem",
                  color: "#0D1B2A",
                  marginBottom: "1.5rem",
                }}
              >
                Knowledge Sharing
              </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {articles.map((a, i) => (
                  <div
                    key={a.title}
                    className="article-row"
                    style={{
                      padding: "1rem 0.5rem",
                      borderBottom: i < articles.length - 1 ? "1px solid #E5E0D8" : "none",
                      borderRadius: "6px",
                      transition: "background 0.15s",
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#0D1B2A",
                        marginBottom: "4px",
                      }}
                    >
                      {a.title}
                    </p>
                    <p style={{ fontSize: "11px", color: "#9CA3AF" }}>{a.platform} · Article</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          background: "#0D1B2A",
          color: "#fff",
          padding: "5rem 2.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1rem",
            }}
          >
            <div style={{ width: "16px", height: "1px", background: "#5DCAB4" }} />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "#5DCAB4",
                textTransform: "uppercase",
              }}
            >
              Contact
            </span>
            <div style={{ width: "16px", height: "1px", background: "#5DCAB4" }} />
          </div>

          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2.75rem",
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            Let's Connect
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "15px",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Open to technical support, QA, and troubleshooting-focused opportunities.
            I'd love to discuss how I can contribute to your team.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            <a
              href="https://www.linkedin.com/in/ruth-nekesa-329804208"
              className="btn-primary"
              style={{
                background: "#0E9E87",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              LinkedIn ↗
            </a>
            <a
            href="https://github.com/Group10-projectcreate"
              className="btn-ghost"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.65)",
                padding: "10px 24px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              GitHub ↗
            </a>
            <a
              href="https://mailto:ruthwaqmalwa48@gmail.com"
              className="btn-ghost"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.65)",
                padding: "10px 24px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Email Me
            </a>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "1.25rem 2rem",
            }}
          >
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
              ruthwamalwa48@gmail.com · +254 721 605 012 · Nairobi, Kenya
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0D1B2A",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "rgba(255,255,255,0.22)",
          }}
        >
          Ruth Nekesa Wamalwa — Portfolio 2025
        </p>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "rgba(255,255,255,0.22)",
          }}
        >
          Technical Support & QA
        </p>
      </footer>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "0.5rem",
      }}
    >
      <div style={{ width: "16px", height: "1px", background: "#0E9E87" }} />
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.12em",
          color: "#0E9E87",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}
