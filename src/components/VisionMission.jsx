function VisionMission() {
  const missionItems = [
    {
      description:
        "Train UG, PG, and intern students progressively in cybersecurity fundamentals through advanced, emerging-threat domains (Agentic AI attacks, OT/ICS, digital twins, quantum security).",
    },
    {
      description:
        "Build a functioning Security Operations Centre (SOC)/lab environment where students practice detection, investigation, and mitigation on realistic simulated infrastructure.",
    },
    {
      description:
        "Create a structured pipeline of certifications, hackathons, and research projects that map directly to industry and government role requirements.",
    },
    {
      description:
        "Formalise partnerships (MoUs) with government cyber agencies and private organisations to deliver training, internships, joint research, and advisory-style projects executed by student teams under faculty supervision.",
    },
    {
      description:
        "Contribute to national cyber-resilience by producing talent and research aligned with the Indian Computer Emergency Response Team (CERT-In), sectoral CERTs, and Industry 5.0/6.0 security needs.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-blue-400 uppercase tracking-widest mb-3">
            Who We Are
          </h3>

          <h2 className="text-4xl font-bold mb-4">Our Vision & Mission</h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* ================= Vision ================= */}
          <div
            className="relative overflow-hidden rounded-3xl
                       bg-white/10 backdrop-blur-xl
                       border border-white/20
                       shadow-2xl p-8 md:p-10
                       transition-all duration-300
                       hover:-translate-y-1
                       hover:border-cyan-400/40
                       hover:shadow-cyan-500/20"
          >
            {/* Accent Bar */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

            <div className="flex items-center gap-5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-3xl">
                👁️
              </div>

              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>

            <p className="text-lg leading-8 text-gray-300">
              To establish the School of Computer Applications as a recognised
              regional centre of excellence for cyber defense, producing
              graduates and applied research capable of protecting industry and
              national digital infrastructure against both traditional and
              next-generation, AI-driven and cyber-physical threats.
            </p>
          </div>

          {/* ================= Mission ================= */}
          <div
            className="relative overflow-hidden rounded-3xl
                       bg-white/10 backdrop-blur-xl
                       border border-white/20
                       shadow-2xl p-8 md:p-10
                       transition-all duration-300
                       hover:-translate-y-1
                       hover:border-emerald-400/40
                       hover:shadow-emerald-500/20"
          >
            {/* Accent Bar */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-emerald-400 to-cyan-500"></div>

            <div className="flex items-center gap-5 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-3xl">
                🚀
              </div>

              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>

            <div className="space-y-5">
              {missionItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center font-bold text-cyan-300 flex-shrink-0">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-300 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
