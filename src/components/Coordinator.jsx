function Coordinator() {
  const coordinators = [
    {
      name: "Dr. Satya Ranjan Dash",
      image: "/satya sir.png",
      designation: (
        <>
          Professor &amp; Dean <br />
          School of Computer Applications <br />
          KIIT Deemed to be University <br />
          Bhubaneswar, India
        </>
      ),
      contact: (
        <>
          <strong>Email:</strong> sdashfca@kiit.ac.in <br />
          <strong>Phone:</strong> +91 9861093702
        </>
      ),
    },
    {
      name: "Sumit Kumar Tetarave",
      image: "/Sumit Kumar Tetarave.jpg",
      designation: (
        <>
          Assistant Professor II <br />
          School of Computer Applications <br />
          KIIT Deemed to be University <br />
          Bhubaneswar, India
        </>
      ),
      contact: (
        <>
          <strong>Email:</strong> sumitkumar.fca@kiit.ac.in
        </>
      ),
    },
    {
      name: "Dr. Manoj Ranjan Mishra",
      image: "/Dr. Manoj Ranjan Mishra.jpeg",
      designation: (
        <>
          Assosiate Professor <br />
          School of Computer Applications <br />
          KIIT Deemed to be University <br />
          Bhubaneswar, India
        </>
      ),
      contact: (
        <>
          <strong>Email:</strong> mrmishrafca@kiit.ac.in
        </>
      ),
    },
  ];

  return (
    <section className="py-2 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-10">
          Coordinated By
        </h2>

        {/* Coordinator Cards */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
          {coordinators.map((person, index) => (
            <div
              key={index}
              className="
              w-[30%] 
              sm:w-[280px]
              bg-white/10 
              backdrop-blur-xl
              border border-white/20 
              rounded-2xl 
              p-2 sm:p-5
              shadow-xl
              hover:-translate-y-1 
              transition 
              duration-300
              "
            >
              <div className="flex flex-col items-center text-center">
                {/* Image Section */}
                <div className="group relative mb-3 sm:mb-4">
                  {/* Back Accent */}
                  <div
                    className="
                    absolute 
                    -top-4 
                    -left-4
                    w-20 
                    h-20
                    sm:w-36 
                    sm:h-40
                    bg-gradient-to-br 
                    from-blue-600 
                    to-indigo-700
                    rounded-xl 
                    opacity-70
                    group-hover:-translate-y-1
                    group-hover:-translate-x-1
                    transition 
                    duration-500
                    "
                  ></div>

                  {/* Main Image */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="
                    relative
                    w-14
                    h-20
                    sm:w-32
                    sm:h-32
                    object-cover
                    rounded-xl
                    shadow-xl
                    border
                    border-white/20
                    group-hover:translate-y-1
                    group-hover:translate-x-1
                    transition
                    duration-500
                    "
                  />
                </div>

                {/* Name */}
                <h3
                  className="
                  text-[10px]
                  sm:text-xl
                  font-semibold
                  text-blue-400
                  mb-1
                  sm:mb-2
                  leading-tight
                  "
                >
                  {person.name}
                </h3>

                {/* Designation */}
                <p
                  className="
                  text-[8px]
                  sm:text-base
                  text-gray-200
                  leading-3
                  sm:leading-7
                  mb-2
                  sm:mb-3
                  "
                >
                  {person.designation}
                </p>

                {/* Contact */}
                <p
                  className="
                  text-[7px]
                  sm:text-sm
                  text-gray-300
                  leading-3
                  sm:leading-6
                  break-all
                  "
                >
                  {person.contact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coordinator;
