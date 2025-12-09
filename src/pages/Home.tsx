import useKeycloak from '../hook/useKeycloak';
import TestFetch from './TestFetch';

export default function Home() {

  const { keycloak, authenticated } = useKeycloak();

     const handleLogin = () => {
    keycloak?.login();
  };

  const handleLogout = () => {
    keycloak?.logout();
  };

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User Logged in: {keycloak?.tokenParsed?.name} </div>
        <TestFetch />
    </div>
  )
}
