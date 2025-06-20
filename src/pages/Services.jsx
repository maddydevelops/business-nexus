const Services = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg mb-10">
          At Business Nexus, we offer a suite of services to help entrepreneurs and investors
          connect, communicate, and collaborate more effectively.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-center">
        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Entrepreneur Dashboard</h3>
          <p className="text-gray-600">
            Manage your startup profile, pitch to investors, and track funding opportunities.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Investor Dashboard</h3>
          <p className="text-gray-600">
            Discover innovative startups, explore pitches, and send collaboration requests.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Profile Management</h3>
          <p className="text-gray-600">
            Create detailed bios and showcase your portfolio or startup journey.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Collaboration Requests</h3>
          <p className="text-gray-600">
            Investors can send collaboration invitations directly to entrepreneurs.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Real-Time Chat</h3>
          <p className="text-gray-600">
            Communicate instantly with potential partners using our integrated chat system.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
          <p className="text-gray-600">
            Built with modern tools and best practices to ensure your data is safe and private.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
