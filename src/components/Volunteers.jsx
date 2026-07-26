function Volunteers() {
  const volunteers = [
    { name: "ABC", image: "/volunteers/1.jpg" },
    { name: "ABC", image: "/volunteers/2.jpg" },
    { name: "ABC", image: "/volunteers/3.jpg" },
    { name: "ABC", image: "/volunteers/4.jpg" },
    { name: "ABC", image: "/volunteers/5.jpg" },
    { name: "ABC", image: "/volunteers/6.jpg" },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl font-bold text-center mb-14">
          Student Volunteers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="w-full max-w-[180px] bg-white/10 backdrop-blur-lg rounded-2xl
              p-2 border border-white/20 text-center
              hover:-translate-y-2 transition duration-300"
            >
              <img
                src={volunteer.image}
                alt={volunteer.name}
                className="w-24 h-24 mx-auto rounded-full object-cover
                border-3 border-blue-400 shadow-lg mb-3"
              />

              <h3 className="text-lg font-semibold">{volunteer.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Volunteers;
