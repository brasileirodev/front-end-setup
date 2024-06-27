import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import sessionStore from '../../store/store';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStore.logout();
    navigate('/');
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default observer(Dashboard);
