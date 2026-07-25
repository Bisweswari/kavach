import { Link } from "react-scroll";

function Overview() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#6b21a8] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="text-pink-400 underline decoration-gray-400 underline-offset-4">
            OVERVIEW
          </span>
          <h2 className="text-4xl font-bold mt-4">OVERVIEW OF THE SOCIETY</h2>
        </div>

        {/* Glass Container */}
        <div
          className="bg-white/10 backdrop-blur-xl border border-white/20 
                        p-10 rounded-3xl shadow-2xl"
        >
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - TEXT */}
            <div className="text-left max-w-xl space-y-5">
              <p className="text-gray-200 leading-relaxed text-lg text-justify">
                This Society converts an area of acknowledged national and
                industry need —{" "}
                <span className="text-pink-300 font-semibold">
                  skilled, next-generation cyber defenders
                </span>
                — into a concrete, governable university initiative. It gives
                students a structured path from fundamentals to genuinely
                differentiated, emerging-threat expertise (Agentic AI, OT/ICS,
                digital twins, quantum security), and gives the School a
                repeatable model for government and industry collaborations.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="registration"
                  smooth={true}
                  duration={800}
                  className="inline-block px-10 py-3 
                 bg-gradient-to-r from-pink-500 to-purple-600 
                 rounded-full font-semibold text-lg 
                 shadow-xl hover:scale-110 
                 hover:shadow-pink-500/40 
                 transition duration-300 cursor-pointer"
                >
                  Interested
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="flex justify-center">
              <img
                src="/scam.jpg"
                alt="Workshop Image"
                className="w-full max-w-md h-[150px] md:h-[200px] lg:h-[300px] rounded-3xl shadow-2xl 
                           border border-white/20 
                           hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
