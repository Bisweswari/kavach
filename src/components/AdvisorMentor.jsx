function AdvisorMentor() {
  const mentors = [
    {
      image: "/advisor1.jpg",
      name: "Prof. ABC XYZ",
      designation: "Professor",
      organization: "KIIT Deemed to be University",
      email: "abc@kiit.ac.in",
    },
    {
      image: "/advisor2.jpg",
      name: "Dr. XYZ ABC",
      designation: "Associate Professor",
      organization: "KIIT Deemed to be University",
      email: "xyz@kiit.ac.in",
    },
  ];

  return (
    <section className="pt-10 pb-16 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#6b21a8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Advisors / Mentors
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="
                w-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-xl
                p-3
                sm:p-5
                lg:p-4
                shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="
                    w-20 h-20
                    sm:w-20 sm:h-20
                    lg:w-28 lg:h-28
                    rounded-full
                    object-cover
                    border-4
                    border-blue-400
                    shadow-lg
                    mb-3
                  "
                />

                <h3 className="text-base sm:text-xl lg:text-lg font-semibold text-blue-300">
                  {mentor.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-200 mt-1">
                  {mentor.designation}
                </p>

                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  {mentor.organization}
                </p>

                <p className="text-xs sm:text-sm text-gray-400 mt-2 break-all">
                  {mentor.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvisorMentor;
