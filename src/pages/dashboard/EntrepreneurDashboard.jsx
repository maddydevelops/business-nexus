import { collaborationRequests } from '../../data/mockData';
import RequestCard from '../../components/RequestCard';

const EntrepreneurDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Collaboration Requests</h2>
      <div className="grid gap-4">
        {collaborationRequests.map((req) => (
          <RequestCard key={req.id} request={req} />
        ))}
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;
