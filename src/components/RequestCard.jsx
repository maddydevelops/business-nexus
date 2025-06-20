const RequestCard = ({ request }) => (
  <div className="bg-white shadow p-4 rounded-xl">
    <h4 className="font-semibold">{request.investorName}</h4>
    <p className="text-sm text-gray-600">{request.message}</p>
    <span
      className={`text-sm font-medium ${
        request.status === "Accepted" ? "text-green-600" : "text-yellow-500"
      }`}
    >
      {request.status}
    </span>
  </div>
);

export default RequestCard;
