export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <img src="/EscaleraX_Logo.png" alt="EscaleraX Logo" className="h-20 mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Only Pay When You Scale</h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Performance-Based Brand Systems: Ads, Funnels, Automation & AI — all built to profit.
        </p>
        <a href="https://calendly.com/edgar-guerrero-escalerax" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
            Book a Free Scaling Audit
          </button>
        </a>
      </section>
    </div>
  );
}
