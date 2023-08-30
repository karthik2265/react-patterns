import "./App.css";
import useUser from "./patterns/CustomHooks/useUser";

// Usage
function App() {
  const { user, isLoading, isSessionExpired } = useUser();
  if (isLoading) {
    return <h1>Loading... your profile</h1>;
  }
  if (!isLoading && !isSessionExpired) {
    return <h1>Something went wrrong on our side, please try again after some time</h1>;
  }
  if (!isLoading && isSessionExpired) {
    return <h1>Session expired please login</h1>;
  }
  return (
    <div>
      <h1>My profile</h1>
      <h3>{user?.name}</h3>
    </div>
  );
}

export default App;
