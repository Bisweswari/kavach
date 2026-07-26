function Collaborators() {
  const collaborators = [
    {
      name: "KIIT",
      logo: "/logos/kiit.png",
    },
    {
      name: "KISS",
      logo: "/logos/kiss.png",
    },
    {
      name: "IEEE",
      logo: "/logos/ieee.png",
    },
    {
      name: "CSI",
      logo: "/logos/csi.png",
    },
    {
      name: "Institution 5",
      logo: "/logos/logo5.png",
    },
    {
      name: "Institution 6",
      logo: "/logos/logo6.png",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">Collaborators</h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          We sincerely acknowledge our collaborating organizations for their
          valuable support in organizing this event.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {collaborators.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 flex items-center justify-center
              shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collaborators;
