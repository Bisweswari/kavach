function Coordinator() {
  return (
    <section className="py-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Coordinated By</h2>

        {/* Coordinator Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* ================= Card 1 ================= */}
          <div
            className="bg-white/10 backdrop-blur-xl border border-white/20
             rounded-3xl p-10 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="group relative mb-8">
                {/* Back Accent Card */}
                <div
                  className="absolute -top-4 -left-4 w-64 h-72
                   bg-gradient-to-br from-blue-600 to-indigo-700
                   rounded-xl opacity-70
                   group-hover:-translate-y-1 group-hover:-translate-x-1
                   transition duration-500"
                ></div>

                {/* Main Image */}
                <img
                  src="/satya sir.png"
                  alt="Dr. Satya Ranjan Dash"
                  className="relative w-64 h-64 object-cover rounded-xl
                   shadow-2xl border border-white/20
                   group-hover:translate-y-1 group-hover:translate-x-1
                   transition duration-500"
                />
              </div>

              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                Dr. Satya Ranjan Dash
              </h3>

              <p className="text-lg text-gray-200 leading-8 mb-5">
                Professor &amp; Dean <br />
                School of Computer Applications <br />
                KIIT Deemed to be University <br />
                Bhubaneswar, India
              </p>

              <p className="text-gray-300 leading-7">
                <strong>Email:</strong> sdashfca@kiit.ac.in <br />
                <strong>Phone:</strong> +91 9861093702
              </p>
            </div>
          </div>

          {/* ================= Card 2 ================= */}
          <div
            className="bg-white/10 backdrop-blur-xl border border-white/20
             rounded-3xl p-10 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="group relative mb-8">
                {/* Back Accent Card */}
                <div
                  className="absolute -top-4 -left-4 w-64 h-72
                   bg-gradient-to-br from-blue-600 to-indigo-700
                   rounded-xl opacity-70
                   group-hover:-translate-y-1 group-hover:-translate-x-1
                   transition duration-500"
                ></div>

                {/* Main Image */}
                <img
                  src="/Sumit Kumar Tetarave.jpg"
                  alt="Second Coordinator"
                  className="relative w-64 h-64 object-cover rounded-xl
                   shadow-2xl border border-white/20
                   group-hover:translate-y-1 group-hover:translate-x-1
                   transition duration-500"
                />
              </div>

              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                Sumit Kumar Tetarave
              </h3>

              <p className="text-lg text-gray-200 leading-8 mb-3">
                Assistant Professor II <br />
                School of Computer Applications <br />
                KIIT Deemed to be University <br />
                Bhubaneswar, India
              </p>

              <p className="text-gray-300 leading-7">
                <strong>Email:</strong> sumitkumar.fca@kiit.ac.in <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coordinator;
