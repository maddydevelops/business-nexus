const About = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Business Nexus</h1>
        <p className="text-lg mb-6">
          Business Nexus is a dynamic networking platform designed to bridge the gap between
          visionary entrepreneurs and forward-thinking investors. Our mission is to accelerate
          innovation by enabling meaningful connections, partnerships, and growth.
        </p>
        <p className="text-md text-gray-600">
          Whether you're an entrepreneur looking to pitch your startup, or an investor seeking
          promising ventures, Business Nexus provides the tools you need — from collaboration
          requests to real-time communication and profile discovery.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-xl font-semibold">Mission</h3>
          <p className="text-gray-600 mt-2">
            To empower startups and investors with seamless collaboration and growth tools.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Vision</h3>
          <p className="text-gray-600 mt-2">
            A world where innovation is accelerated by meaningful partnerships.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Values</h3>
          <p className="text-gray-600 mt-2">
            Integrity, transparency, collaboration, and continuous innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
