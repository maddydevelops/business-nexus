import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-600">Business Nexus</span>
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          A smart networking platform connecting visionary entrepreneurs with passionate investors to build the future — together.
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <p>Find and connect with the right people in the startup ecosystem.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
          <p>Send collaboration requests and build powerful partnerships.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Communicate</h3>
          <p>Use real-time chat to communicate and pitch your ideas instantly.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-gray-200">
        &copy; {new Date().getFullYear()} Business Nexus. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
