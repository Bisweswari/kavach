function Coordinator() {
  return (
    <section className="py-2 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Coordinated By</h2>

        {/* Coordinator Cards */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
          {/* ================= Card 1 ================= */}
          <div
            className="w-[47%] sm:w-[280px] bg-white/10 backdrop-blur-xl
            border border-white/20 rounded-2xl p-3 sm:p-5 shadow-xl
            hover:-translate-y-1 transition duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="group relative mb-4">
                {/* Back Accent Card */}
                <div
                  className="absolute -top-3 -left-3 w-32 h-36
                  sm:w-36 sm:h-40
                  bg-gradient-to-br from-blue-600 to-indigo-700
                  rounded-xl opacity-70
                  group-hover:-translate-y-1 group-hover:-translate-x-1
                  transition duration-500"
                ></div>

                {/* Main Image */}
                <img
                  src="/satya sir.png"
                  alt="Dr. Satya Ranjan Dash"
                  className="relative w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-xl
                  shadow-xl border border-white/20
                  group-hover:translate-y-1 group-hover:translate-x-1
                  transition duration-500"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">
                Dr. Satya Ranjan Dash
              </h3>

              <p className="text-sm sm:text-base text-gray-200 leading-6 sm:leading-7 mb-3">
                Professor &amp; Dean <br />
                School of Computer Applications <br />
                KIIT Deemed to be University <br />
                Bhubaneswar, India
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-5 sm:leading-6 break-all">
                <strong>Email:</strong> sdashfca@kiit.ac.in <br />
                <strong>Phone:</strong> +91 9861093702
              </p>
            </div>
          </div>

          {/* ================= Card 2 ================= */}
          <div
            className="w-[47%] sm:w-[280px] bg-white/10 backdrop-blur-xl
            border border-white/20 rounded-2xl p-3 sm:p-5 shadow-xl
            hover:-translate-y-1 transition duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="group relative mb-4">
                {/* Back Accent Card */}
                <div
                  className="absolute -top-3 -left-3 w-32 h-36
                  sm:w-36 sm:h-40
                  bg-gradient-to-br from-blue-600 to-indigo-700
                  rounded-xl opacity-70
                  group-hover:-translate-y-1 group-hover:-translate-x-1
                  transition duration-500"
                ></div>

                {/* Main Image */}
                <img
                  src="/Sumit Kumar Tetarave.jpg"
                  alt="Sumit Kumar Tetarave"
                  className="relative w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-xl
                  shadow-xl border border-white/20
                  group-hover:translate-y-1 group-hover:translate-x-1
                  transition duration-500"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">
                Sumit Kumar Tetarave
              </h3>

              <p className="text-sm sm:text-base text-gray-200 leading-6 sm:leading-7 mb-3">
                Assistant Professor II <br />
                School of Computer Applications <br />
                KIIT Deemed to be University <br />
                Bhubaneswar, India
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-5 sm:leading-6 break-all">
                <strong>Email:</strong> sumitkumar.fca@kiit.ac.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coordinator;
