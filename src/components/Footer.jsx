function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        {/* Society Name */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          KAVACH
        </h2>

        <p className="text-cyan-400 text-lg font-medium mb-4">
          Cyber Security Society
        </p>

        {/* Motto */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-cyan-300 font-medium">
          <span>🛡️ Protect</span>
          <span>•</span>
          <span>💡 Learn</span>
          <span>•</span>
          <span>🚀 Innovate</span>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© 2026 KAVACH – Cyber Security Society. All Rights Reserved.</p>

          <p>School of Computer Applications • KIIT Deemed to be University</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
