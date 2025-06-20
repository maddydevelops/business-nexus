import { Link } from "react-router-dom";

const ProfileCard = ({ user, role }) => (
  <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
    <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
    <h3 className="font-semibold">{user.name}</h3>
    <p>{user.startup}</p>
    <p className="text-sm text-gray-500">{user.pitch}</p>
    <Link
      to={`/profile/${role}/${user.id}`}
      className="text-blue-500 underline hover:text-blue-700"
    >
      View Full Profile
    </Link>
  </div>
);

export default ProfileCard;
