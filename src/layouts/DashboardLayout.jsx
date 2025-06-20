// src/layouts/DashboardLayout.jsx
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Business Nexus</h2>
        <ul className="space-y-2">
          <li><a href="/dashboard/investor" className="hover:underline">Investor Dashboard</a></li>
          <li><a href="/dashboard/entrepreneur" className="hover:underline">Entrepreneur Dashboard</a></li>
        </ul>
      </aside>
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
