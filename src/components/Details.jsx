function Details() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-center mb-6">MORE DETAILS</h3>

        <div className="flex flex-col gap-8">
          {/* About KIIT */}
          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-xl border border-white/20 
                       p-8 rounded-3xl shadow-2xl hover:scale-105 
                       transition duration-500"
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              About KIIT
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed text-justify">
              KIIT Deemed to be University dedicated to providing educational
              opportunities for the intellectual, social, and professional
              development of a diverse student population. To achieve this
              purpose, the institution offers focused and balanced curricula at
              Undergraduate, Master’s and Doctoral levels. A broad-based core
              curriculum is offered, promoting critical thinking, effective
              verbal and written communication, and skills for life-long
              learning. KIIT attempts to provide a comprehensive education that
              instills within its students a philosophy that values not only
              learning and professionalism, but also contribution and commitment
              to the advancement of community.
            </p>
          </div>

          {/* Our Founder */}
          <div
            data-aos="fade-up"
            className="md:col-span-2 bg-gradient-to-r from-purple-800/40 to-blue-800/40 
             backdrop-blur-xl border border-white/20 
             p-10 rounded-3xl shadow-2xl 
             hover:scale-[1.02] transition duration-500"
          >
            <h3 className="text-3xl font-semibold mb-6 text-indigo-300">
              Our Founder
            </h3>

            {/* Image floated left */}
            <img
              src="/Achyuta_Samanta.jpg"
              alt="Prof. Achyuta Samanta"
              className="w-full md:w-64 h-72 object-cover rounded-2xl 
               border-4 border-white/30 shadow-xl 
               float-none md:float-left md:mr-8 mb-6"
            />

            {/* Text */}
            <p className="text-gray-200 text-lg leading-relaxed text-justify">
              Prof Achyuta Samanta's life story reads like a powerful saga of
              grit, determination, and social responsibility. Born and brought
              up in poverty in a remote village in Odisha, he was dealt a cruel
              blow at the tender age of four when he lost his father, after
              which his life became a struggle for food and education for 15
              long years. However, he persevered, and at the age of 22, joined
              teaching. At 25, he embarked on a journey that would change his
              own life, and the lives of thousands of people. With just Rs 5000
              in his pocket, he started KIIT (Kalinga Institute of Industrial
              Technology) and KISS (Kalinga Institute of Social Sciences) in two
              rented houses. Today, these institutions are beacons of hope,
              providing world-class education, decorated with all possible
              national and international accolades and global reputation. KIIT
              has become one of the most sought-after universities in India for
              professional education. It currently has 40,000 students and
              representation from 65 countries. KISS is a ray of hope for
              tribals, providing education, healthcare, sports, and vocational
              training to 80,000 disadvantaged students - all fully free in a
              residential campus. KISS has a school, a college, and a university
              - KISS Deemed to be University, which is the first and only
              university exclusively for tribal scholars providing innovative
              tribal courses.
            </p>

            {/* Clear float */}
            <div className="clear-both"></div>
          </div>

          {/* School of Computer Applications */}
          <div
            data-aos="fade-up"
            className="md:col-span-2 bg-gradient-to-r from-blue-800/40 to-indigo-800/40 
                       backdrop-blur-xl border border-white/20 
                       p-10 rounded-3xl shadow-2xl hover:scale-[1.02] 
                       transition duration-500"
          >
            <h3 className="text-3xl font-semibold mb-6 text-cyan-300">
              School of Computer Applications
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed text-justify">
              Education is the soul of the society, which passes from generation
              to generation. School of Computer Applications of KIIT truly
              believes and follows the adage that ‘Education is to make a life
              and not just a livelihood’. It has produced 15 batches of young,
              trained, and talented individuals, who have made their mark in the
              software industry. The School has always been on a high growth
              path to keep pace with the ever-increasing importance of the major
              disciplines of study and current technology trends. The School of
              Computer Applications (SCA), KIIT-DU offers BCA, BSc (Computer
              Science), MSc (Computer Science) MCA and PhD in Computer Science
              academic programs.
            </p>
          </div>

          {/* Technical Training Roadmap */}
          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-xl border border-white/20
             p-8 rounded-3xl shadow-2xl hover:scale-[1.01]
             transition duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-green-300">
              3. Technical Training Roadmap
            </h3>

            <p className="text-gray-200 text-lg leading-relaxed text-justify mb-8">
              Training is structured as three progressive levels:{" "}
              <strong>Kavach 1 (Basic Level)</strong>,
              <strong> Kavach 2 (Specialisation Level)</strong> and
              <strong> Kavach 3 (Emerging &amp; Advanced)</strong>. UG/PG
              students can be allowed to register Kavach 1 and promoted to the
              next Kavach level after their productively engaged at the right
              depth. Traditional security is treated as the non-negotiable
              foundation; emerging domains (Agentic AI attacks, OT/ICS, digital
              twins, quantum security) are introduced once fundamentals are
              solid, and are always framed as
              <span className="italic">
                {" "}
                "what changes when the traditional assumption breaks."
              </span>
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center">
              {/* ================= KAVACH 1 ================= */}
              <div className="w-full md:w-72 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6 text-center">
                <div className="text-4xl mb-4">🛡️</div>

                <h4 className="text-xl font-bold text-cyan-300 mb-3">
                  KAVACH-1
                </h4>

                <p className="text-white font-medium mb-2">Basic Level</p>

                <p className="text-gray-300">
                  Foundational (Open to all UG/PG)
                </p>
              </div>

              {/* Arrow */}
              <div className="mx-6 hidden md:flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-cyan-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-5-5 5 5-5 5"
                  />
                </svg>
              </div>

              {/* Mobile Arrow */}
              <div className="md:hidden text-4xl text-cyan-300 my-3">↓</div>

              {/* ================= KAVACH 2 ================= */}
              <div className="w-full md:w-72 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-center">
                <div className="text-4xl mb-4">⚔️</div>

                <h4 className="text-xl font-bold text-emerald-300 mb-3">
                  KAVACH-2
                </h4>

                <p className="text-white font-medium mb-2">
                  Specialisation Level
                </p>

                <p className="text-gray-300">
                  Core Specialisation (Choose 1–2 Verticals)
                </p>
              </div>

              {/* Arrow */}
              <div className="mx-6 hidden md:flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-emerald-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-5-5 5 5-5 5"
                  />
                </svg>
              </div>

              {/* Mobile Arrow */}
              <div className="md:hidden text-4xl text-emerald-300 my-3">↓</div>

              {/* ================= KAVACH 3 ================= */}
              <div className="w-full md:w-72 rounded-2xl border border-purple-400/30 bg-purple-500/10 p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>

                <h4 className="text-xl font-bold text-purple-300 mb-3">
                  KAVACH-3
                </h4>

                <p className="text-white font-medium mb-2">
                  Emerging &amp; Advanced
                </p>

                <p className="text-gray-300">Advanced / Research Members</p>
              </div>
            </div>
          </div>

          {/* ===================== KAVACH-1 ===================== */}

          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-xl border border-white/20
  p-8 rounded-3xl shadow-2xl hover:scale-[1.01]
  transition duration-500 mt-10"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
              3.1 KAVACH-1 [K1] — Foundational
            </h3>

            <p className="text-gray-300 mb-8">(Open to all UG/PG)</p>

            <div className="overflow-x-auto rounded-2xl border border-white/20">
              <table className="w-full border-collapse">
                <thead className="bg-cyan-500/20">
                  <tr>
                    <th className="w-[28%] px-6 py-4 text-left text-cyan-300 font-semibold border-b border-white/20">
                      Module
                    </th>

                    <th className="w-[72%] px-6 py-4 text-left text-cyan-300 font-semibold border-b border-white/20">
                      Coverage
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-200">
                  <tr className="border-b border-white/10">
                    <td className="align-top px-6 py-5 font-semibold text-white">
                      Security Fundamentals
                    </td>

                    <td className="align-top px-6 py-5 leading-7 text-justify">
                      CIA triad, threat modelling, OWASP Top 10, networking
                      (TCP/IP, DNS, routing), Linux/Windows internals,
                      cryptography basics.
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="align-top px-6 py-5 font-semibold text-white">
                      Ethical Hacking Basics
                    </td>

                    <td className="align-top px-6 py-5 leading-7 text-justify">
                      Reconnaissance, scanning using Nmap, vulnerability
                      assessment (Nessus/OpenVAS), and basic exploitation in a
                      controlled, authorized laboratory environment.
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="align-top px-6 py-5 font-semibold text-white">
                      Defensive Basics
                    </td>

                    <td className="align-top px-6 py-5 leading-7 text-justify">
                      SIEM concepts, log analysis, firewall and IDS/IPS
                      fundamentals, endpoint hardening, and an introduction to
                      Security Operations Center (SOC) workflows.
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="align-top px-6 py-5 font-semibold text-white">
                      Governance &amp; Ethics
                    </td>

                    <td className="align-top px-6 py-5 leading-7 text-justify">
                      Information Technology Act 2000 and its amendments,
                      CERT-In guidelines, responsible vulnerability disclosure,
                      professional ethics, and the basics of the Digital
                      Personal Data Protection (DPDP) Act.
                    </td>
                  </tr>

                  <tr>
                    <td className="align-top px-6 py-5 font-semibold text-white">
                      Capstone
                    </td>

                    <td className="align-top px-6 py-5 leading-7 text-justify">
                      Team-based Capture the Flag (CTF) challenge followed by
                      the preparation of a professional incident response
                      report.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ===================== KAVACH-2 ===================== */}
          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-xl border border-white/20
  p-8 rounded-3xl shadow-2xl hover:scale-[1.01]
  transition duration-500 mt-10"
          >
            <h3 className="text-2xl font-semibold text-emerald-300 mb-2">
              3.2 KAVACH-2 [K2] — Core Specialisation
            </h3>

            <p className="text-gray-300 mb-8">(Choose 1–2 verticals)</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* ================= B1 ================= */}
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/30 p-6 flex flex-col h-full">
                <h4 className="text-lg sm:text-xl font-semibold text-emerald-300 mb-3 sm:mb-6 min-h-0 sm:min-h-[72px]">
                  B1. Offensive Security / Red Teaming
                </h4>

                <div className="space-y-5 text-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      Web application penetration testing using Burp Suite, SQL
                      Injection, XSS, SSRF, IDOR and API security assessment.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      Active Directory attacks, privilege escalation and lateral
                      movement in Windows and Linux environments.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      Malware analysis fundamentals and command-and-control
                      frameworks inside isolated laboratory environments.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      Professional penetration testing report writing and
                      remediation recommendations.
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= B2 ================= */}
              <div className="rounded-2xl bg-cyan-500/10 border border-cyan-400/30 p-6 flex flex-col h-full">
                <h4 className="text-lg sm:text-xl font-semibold text-emerald-300 mb-3 sm:mb-6 min-h-0 sm:min-h-[72px]">
                  B2. Defensive Security / Blue Team &amp; SOC Operations
                </h4>

                <div className="space-y-5 text-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      SIEM engineering using Wazuh, Splunk and ELK Stack,
                      detection engineering and Sigma rule development.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-cyan-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      Threat intelligence, MITRE ATT&amp;CK mapping, IOC
                      analysis and adversary behaviour profiling.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-cyan-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      Incident response lifecycle, tabletop exercises and
                      digital forensics using Autopsy and Volatility.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-cyan-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      Cloud security fundamentals covering AWS, Azure IAM,
                      containers and Kubernetes security.
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= B3 ================= */}
              <div className="rounded-2xl bg-purple-500/10 border border-purple-400/30 p-6 flex flex-col h-full">
                <h4 className="text-lg sm:text-xl font-semibold text-emerald-300 mb-3 sm:mb-6 min-h-0 sm:min-h-[72px]">
                  B3. Governance, Risk &amp; Compliance (GRC) / Digital
                  Forensics
                </h4>

                <div className="space-y-5 text-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      ISO 27001, NIST Cybersecurity Framework and enterprise
                      risk assessment methodologies.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-purple-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      Compliance mapping for CERT-In, sector-specific
                      regulations and the Digital Personal Data Protection Act.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-purple-300 mt-2">●</span>
                    <p className="flex-1 text-justify leading-7">
                      Digital forensic evidence collection, chain of custody and
                      mock courtroom expert testimony exercises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== KAVACH-3 ===================== */}

          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-xl border border-white/20
             p-8 rounded-3xl shadow-2xl hover:scale-[1.01]
             transition duration-500 mt-10"
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-2">
              3.3 KAVACH-3 [K3] — Emerging &amp; Advanced Domains
            </h3>

            <p className="text-gray-300 mb-8">(Advanced / Research Members)</p>

            <p className="text-gray-200 leading-8 mb-8 text-justify">
              This is the differentiator track. Each module explicitly contrasts
              the traditional-security baseline against the new attack surface,
              so students understand what genuinely changes rather than treating
              these as unrelated add-ons.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* ===================== C1 ===================== */}
              <div className="rounded-2xl bg-purple-500/10 border border-purple-400/30 p-4 h-full flex flex-col">
                <h4 className="text-xl font-semibold text-purple-300 mb-2 min-h-[48px]">
                  C1. Agentic AI-Based Attacks &amp; Defense
                </h4>

                <div className="space-y-4 text-gray-200 leading-7">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      How agentic AI changes the threat model: autonomous
                      multi-step attack chains, AI-orchestrated reconnaissance
                      and social engineering, self-improving phishing content.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-purple-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      Prompt-injection and tool-use exploitation against
                      LLM-powered applications and agents; insecure
                      agent-to-agent and agent-to-tool trust boundaries.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-purple-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      Data/model supply-chain risks: poisoned training data,
                      malicious plugins, model extraction and inference attacks.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-purple-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      AI-assisted SOC, guardrail design, red-teaming LLM
                      applications, and detection of AI-generated phishing and
                      deepfake content.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-purple-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      Hands-on: Build and defend a sandboxed agentic AI
                      application and perform structured red-team exercises
                      under supervision.
                    </p>
                  </div>
                </div>
              </div>

              {/* ===================== C2 ===================== */}
              <div className="rounded-2xl bg-cyan-500/10 border border-cyan-400/30 p-4 h-full flex flex-col">
                <h4 className="text-xl font-semibold text-purple-300 mb-2 min-h-[48px]">
                  C2. OT/ICS &amp; Critical Infrastructure Security
                </h4>

                <div className="space-y-4 text-gray-200 leading-7">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-300 mt-1 flex-shrink-0">●</span>
                    <p className="flex-1 text-justify">
                      SCADA/PLC/HMI fundamentals and Modbus, DNP3 and OPC-UA
                      protocol security.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-cyan-300 mt-1 flex-shrink-0">●</span>
                    <p className="flex-1 text-justify">
                      IT/OT convergence risks, Purdue Model segmentation and IEC
                      62443 security framework.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-cyan-300 mt-1 flex-shrink-0">●</span>
                    <p className="flex-1 text-justify">
                      Simulated attacks and defenses on an air-gapped ICS
                      laboratory using open-source SCADA and PLC emulators.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-cyan-300 mt-1 flex-shrink-0">●</span>
                    <p className="flex-1 text-justify">
                      Incident response for OT environments and
                      safety-versus-security trade-offs.
                    </p>
                  </div>
                </div>
              </div>

              {/* ===================== C3 ===================== */}
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/30 p-4 h-full flex flex-col">
                <h4 className="text-xl font-semibold text-purple-300 mb-2 min-h-[48px]">
                  C3. Digital Twin &amp; Industry 5.0/6.0 Security
                </h4>

                <div className="space-y-4 text-gray-200 leading-7">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      Security of digital-twin architectures including
                      synchronization, command paths and model integrity.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      Twin desynchronization, sensor spoofing and misuse of
                      digital twins as attack-simulation platforms.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      Human-centric Industry 5.0 concepts, collaborative robot
                      (cobot) security and human-machine trust.
                    </p>
                  </div>
                </div>
              </div>

              {/* ===================== C4 ===================== */}
              <div className="rounded-2xl bg-orange-500/10 border border-orange-400/30 p-4 h-full flex flex-col">
                <h4 className="text-xl font-semibold text-purple-300 mb-2 min-h-[48px]">
                  C4. Quantum Security
                </h4>

                <div className="space-y-4 text-gray-200 leading-7">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      Quantum computing threats to classical cryptography,
                      including Shor's and Grover's algorithms and the "harvest
                      now, decrypt later" risk.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-orange-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      Post-quantum cryptography (PQC), NIST-selected algorithms
                      and migration planning.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-orange-300 mt-1 flex-shrink-0">
                      ●
                    </span>
                    <p className="flex-1 text-justify">
                      Quantum key distribution (QKD) concepts and hands-on
                      experience using PQC libraries such as liboqs and Open
                      Quantum Safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== Recurring Activities & Programs ===================== */}

          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-xl border border-white/20
             p-8 rounded-3xl shadow-2xl hover:scale-[1.01]
             transition duration-500 mt-10"
          >
            <h3 className="text-2xl font-semibold text-amber-300 mb-8">
              5. Recurring Activities &amp; Programs
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-amber-400 flex-shrink-0"></div>
                <p className="text-gray-200 leading-7">
                  Monthly guest lectures/webinars with industry CISOs,
                  government CERT officials, and researchers.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-amber-400 flex-shrink-0"></div>
                <p className="text-gray-200 leading-7">
                  Bi-monthly Capture-the-Flag (CTF) competitions — internal,
                  then inter-college, then open/national-level as the Society
                  matures.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-amber-400 flex-shrink-0"></div>
                <p className="text-gray-200 leading-7">
                  Annual flagship event: a 24–48 hour cybersecurity hackathon
                  combining traditional CTF challenges with an Agentic-AI
                  red-team challenge and an OT/ICS tabletop scenario.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-amber-400 flex-shrink-0"></div>
                <p className="text-gray-200 leading-7">
                  Quarterly tabletop incident-response simulations
                  ("cyber-drills") with cross-team roles
                  (attacker/defender/incident-commander/ media-liaison).
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-amber-400 flex-shrink-0"></div>
                <p className="text-gray-200 leading-7">
                  Semester-end research symposium where Advanced/Research
                  Members present findings; strong papers submitted to student
                  conferences/journals.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 w-3 h-3 rounded-full bg-amber-400 flex-shrink-0"></div>
                <p className="text-gray-200 leading-7">
                  Continuous "Threat Intel Digest" — a student-run newsletter
                  summarising recent CVEs, threat-actor activity, and
                  AI-security incidents.
                </p>
              </div>
            </div>
          </div>

          {/* ===================== Social Outreach Activities ===================== */}

          <div
            data-aos="fade-up"
            className="bg-white/10 backdrop-blur-xl border border-white/20
             p-8 rounded-3xl shadow-2xl hover:scale-[1.01]
             transition duration-500 mt-10"
          >
            <h3 className="text-2xl font-semibold text-pink-300 mb-8">
              6. Social Outreach Activities
            </h3>

            <div className="space-y-6 text-gray-200 leading-8 text-justify">
              <p>
                As part of its social responsibility and outreach initiatives,
                <strong> KAVACH – Cyber Security Society </strong>
                will organize 3–4 cybersecurity awareness webinars, workshops,
                and training programmes annually for school and college
                students, teachers, principals, and faculty members from
                institutions outside KIIT Deemed to be University. These
                programmes will cover topics such as cyber hygiene, digital
                safety, online fraud prevention, responsible use of AI, social
                media security, cyber ethics, and emerging cyber threats.
              </p>

              <p>
                The Society aims to collaborate with schools, colleges, and
                universities across the region to promote cybersecurity
                awareness, encourage safe digital practices, and inspire
                students to pursue careers in cybersecurity. Through these
                outreach activities,
                <strong> KAVACH </strong>
                will contribute to building a more cyber-aware and digitally
                resilient society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
