import sessionStore from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    sessionStore.login();
    navigate('/dashboard');
  };
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={handleLogin}
        className="
        bg-blue-500 text-white p-2 rounded-md
      "
      >
        Login
      </button>
    </div>
  );
};

export default observer(Login);
