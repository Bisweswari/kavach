function Registration() {
  return (
    <section
      id="registration"
      className="py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#6b21a8] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 tracking-wide">
          REGISTRATION DETAILS
        </h1>

        {/* Glass Container */}
        <div
          className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100
          text-black p-6 sm:p-10 md:p-14 pt-16 md:pt-20 rounded-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.15)] text-left"
        >
          {/* Register Button */}
          <div className="absolute -top-6 sm:-top-4 md:-top-3 left-1/2 -translate-x-1/2">
            <a
              href="https://forms.gle/NJFqTPFkpq5owQ2F8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-10 md:px-14 py-3 md:py-4
              bg-gradient-to-r from-pink-500 to-purple-600
              rounded-full font-semibold tracking-wide
              text-base sm:text-lg md:text-xl
              shadow-xl hover:scale-105 hover:shadow-pink-500/40
              transition duration-300"
            >
              REGISTER NOW
            </a>
          </div>

          {/* Information */}
          <div className="space-y-2 text-gray-800 text-base md:text-lg leading-relaxed">
            <p>
              Interested students must fill out the
              given Google Form for successful registration.
            </p>

            <p>
              🔗 Google Form Link:{" "}
              <a
                href="https://forms.gle/NJFqTPFkpq5owQ2F8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 underline hover:text-pink-600 transition"
              >
                Click Here
              </a>
            </p>

            <hr className="border-gray-300 my-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
