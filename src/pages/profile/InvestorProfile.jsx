import { investors } from '../../data/mockData';
import { useParams } from 'react-router-dom';

const InvestorProfile = () => {
  const { id } = useParams();
  const investor = investors.find(inv => inv.id === parseInt(id));

  return (
    <div className="p-4">
      <img src={investor.avatar} alt={investor.name} className="w-24 h-24 rounded-full" />
      <h2 className="text-2xl font-bold">{investor.name}</h2>
      <p><strong>Interests:</strong> {investor.interests}</p>
      <p><strong>Portfolio:</strong> {investor.portfolio.join(', ')}</p>
    </div>
  );
};

export default InvestorProfile;
