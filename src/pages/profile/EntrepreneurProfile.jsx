import { entrepreneurs } from '../../data/mockData';
import { useParams } from 'react-router-dom';

const EntrepreneurProfile = () => {
  const { id } = useParams();
  const user = entrepreneurs.find(ent => ent.id === parseInt(id));

  return (
    <div className="p-4">
      <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full" />
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p><strong>Startup:</strong> {user.startup}</p>
      <p><strong>Description:</strong> {user.description}</p>
      <p><strong>Funding Need:</strong> {user.fundingNeed}</p>
      <p className="mt-2 italic text-gray-500">{user.bio}</p>
    </div>
  );
};

export default EntrepreneurProfile;
