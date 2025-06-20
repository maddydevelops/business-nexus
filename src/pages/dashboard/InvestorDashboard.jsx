import { entrepreneurs } from '../../data/mockData';
import ProfileCard from '../../components/ProfileCard';

const InvestorDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Entrepreneurs</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {entrepreneurs.map((entrepreneur) => (
          <ProfileCard key={entrepreneur.id} user={entrepreneur} role="entrepreneur" />
        ))}
      </div>
    </div>
  );
};

export default InvestorDashboard;
