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

            <div className="grid md:grid-cols-3 gap-6">
              {/* K1 */}

              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
                <div className="text-4xl mb-4">🛡️</div>

                <h4 className="text-xl font-bold text-cyan-300 mb-3">
                  KAVACH-1
                </h4>

                <p className="text-white font-medium mb-2">Basic Level</p>

                <p className="text-gray-300">
                  Foundational (Open to all UG/PG)
                </p>
              </div>

              {/* K2 */}

              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
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

              {/* K3 */}

              <div className="rounded-2xl border border-purple-400/30 bg-purple-500/10 p-6">
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
              <table className="w-full text-left border-collapse">
                <thead className="bg-cyan-500/20">
                  <tr>
                    <th className="px-6 py-4 text-cyan-300 font-semibold border-b border-white/20 w-1/4">
                      Module
                    </th>

                    <th className="px-6 py-4 text-cyan-300 font-semibold border-b border-white/20">
                      Coverage
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-200">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-5 font-medium text-white">
                      Security Fundamentals
                    </td>

                    <td className="px-6 py-5 leading-7">
                      CIA triad, threat modelling, OWASP Top 10, networking
                      (TCP/IP, DNS, routing), Linux/Windows internals,
                      cryptography basics
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="px-6 py-5 font-medium text-white">
                      Ethical Hacking Basics
                    </td>

                    <td className="px-6 py-5 leading-7">
                      Reconnaissance, scanning (Nmap), vulnerability assessment
                      (Nessus/OpenVAS), basic exploitation in a legal lab range
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="px-6 py-5 font-medium text-white">
                      Defensive Basics
                    </td>

                    <td className="px-6 py-5 leading-7">
                      SIEM concepts, log analysis, firewall/IDS-IPS
                      fundamentals, endpoint hardening, intro to SOC workflows
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="px-6 py-5 font-medium text-white">
                      Governance &amp; Ethics
                    </td>

                    <td className="px-6 py-5 leading-7">
                      IT Act 2000 &amp; amendments, CERT-In guidelines,
                      responsible disclosure, professional ethics, DPDP Act
                      basics
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-5 font-medium text-white">
                      Capstone
                    </td>

                    <td className="px-6 py-5 leading-7">
                      Team CTF (Jeopardy-style) + written incident report
                      exercise
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

            <div className="grid lg:grid-cols-3 gap-6">
              {/* B1 */}
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/30 p-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-5">
                  B1. Offensive Security / Red Teaming
                </h4>

                <ul className="space-y-4 text-gray-200 leading-7 list-disc list-inside">
                  <li>
                    Web app pentesting (Burp Suite, SQLi/XSS/SSRF/IDOR), API
                    security testing
                  </li>

                  <li>
                    Active Directory attacks, privilege escalation, lateral
                    movement (Windows/Linux)
                  </li>

                  <li>
                    Malware analysis basics, C2 frameworks in isolated lab
                    (educational use only)
                  </li>

                  <li>
                    Report writing to professional pentest-report standards
                  </li>
                </ul>
              </div>

              {/* B2 */}
              <div className="rounded-2xl bg-cyan-500/10 border border-cyan-400/30 p-6">
                <h4 className="text-xl font-semibold text-cyan-300 mb-5">
                  B2. Defensive Security / Blue Team &amp; SOC Operations
                </h4>

                <ul className="space-y-4 text-gray-200 leading-7 list-disc list-inside">
                  <li>
                    SIEM engineering (Wazuh/Splunk/ELK), detection engineering,
                    Sigma rules
                  </li>

                  <li>
                    Threat intelligence (MITRE ATT&amp;CK mapping, IOC/TTP
                    analysis)
                  </li>

                  <li>
                    Incident response lifecycle, tabletop exercises, digital
                    forensics fundamentals (Autopsy, Volatility)
                  </li>

                  <li>
                    Cloud security basics (AWS/Azure IAM misconfig,
                    container/K8s security)
                  </li>
                </ul>
              </div>

              {/* B3 */}
              <div className="rounded-2xl bg-purple-500/10 border border-purple-400/30 p-6">
                <h4 className="text-xl font-semibold text-purple-300 mb-5">
                  B3. Governance, Risk &amp; Compliance (GRC) / Digital
                  Forensics
                </h4>

                <ul className="space-y-4 text-gray-200 leading-7 list-disc list-inside">
                  <li>ISO 27001, NIST CSF, risk assessment frameworks</li>

                  <li>
                    Compliance mapping for Indian regulatory context (CERT-In,
                    sectoral guidelines, DPDP Act)
                  </li>

                  <li>
                    Forensic evidence handling and chain of custody, mock
                    court/expert-testimony exercise
                  </li>
                </ul>
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

            <div className="grid lg:grid-cols-2 gap-6">
              {/* C1 */}
              <div className="rounded-2xl bg-purple-500/10 border border-purple-400/30 p-6">
                <h4 className="text-xl font-semibold text-purple-300 mb-5">
                  C1. Agentic AI-Based Attacks &amp; Defense
                </h4>

                <ul className="space-y-4 text-gray-200 leading-7 list-disc list-inside">
                  <li>
                    How agentic AI changes the threat model: autonomous
                    multi-step attack chains, AI-orchestrated reconnaissance and
                    social engineering, self-improving phishing content
                  </li>

                  <li>
                    Prompt-injection and tool-use exploitation against
                    LLM-powered applications and agents; insecure agent-to-agent
                    and agent-to-tool trust boundaries
                  </li>

                  <li>
                    Data/model supply-chain risks: poisoned training data,
                    malicious plugins/tool integrations, model-extraction and
                    inference attacks
                  </li>

                  <li>
                    Defensive side: AI-assisted SOC (autonomous triage/hunting
                    agents), guardrail design, red-teaming LLM applications,
                    detection of AI-generated phishing/deepfake content
                  </li>

                  <li>
                    Hands-on: build and defend a sandboxed agentic-AI
                    application; run structured red-team exercises against it
                    under supervision
                  </li>
                </ul>
              </div>

              {/* C2 */}
              <div className="rounded-2xl bg-cyan-500/10 border border-cyan-400/30 p-6">
                <h4 className="text-xl font-semibold text-cyan-300 mb-5">
                  C2. OT/ICS &amp; Critical Infrastructure Security
                </h4>

                <ul className="space-y-4 text-gray-200 leading-7 list-disc list-inside">
                  <li>
                    SCADA/PLC/HMI fundamentals, Modbus/DNP3/OPC-UA protocol
                    security
                  </li>

                  <li>
                    IT/OT convergence risks, Purdue Model segmentation, IEC
                    62443 framework
                  </li>

                  <li>
                    Simulated attacks and defenses on a tabletop ICS testbed
                    (open-source SCADA/PLC emulators) — strictly in an
                    air-gapped lab
                  </li>

                  <li>
                    Incident response for OT environments, safety-vs-security
                    tradeoffs
                  </li>
                </ul>
              </div>

              {/* C3 */}
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/30 p-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-5">
                  C3. Digital Twin &amp; Industry 5.0/6.0 Security
                </h4>

                <ul className="space-y-4 text-gray-200 leading-7 list-disc list-inside">
                  <li>
                    Security of digital-twin architectures: data-synchronisation
                    channels, twin-to-physical command paths, model integrity
                  </li>

                  <li>
                    Attack scenarios: twin desynchronisation, sensor spoofing
                    feeding false state into the twin,
                    twin-as-attack-simulation-platform for adversaries
                  </li>

                  <li>
                    Human-centric Industry 5.0 considerations: securing
                    collaborative robots (cobots), human-machine interface trust
                  </li>
                </ul>
              </div>

              {/* C4 */}
              <div className="rounded-2xl bg-orange-500/10 border border-orange-400/30 p-6">
                <h4 className="text-xl font-semibold text-orange-300 mb-5">
                  C4. Quantum Security
                </h4>

                <ul className="space-y-4 text-gray-200 leading-7 list-disc list-inside">
                  <li>
                    Quantum-computing threat to classical cryptography
                    (Shor&apos;s/Grover&apos;s algorithm implications), "harvest
                    now, decrypt later" risk
                  </li>

                  <li>
                    Post-quantum cryptography (PQC) standards (NIST-selected
                    algorithms), migration planning
                  </li>

                  <li>
                    Quantum key distribution (QKD) concepts and current
                    limitations; hands-on with PQC libraries (liboqs/Open
                    Quantum Safe) in sample applications
                  </li>
                </ul>
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
