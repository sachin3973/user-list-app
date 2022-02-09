import "./App.css";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <h1>USER LIST APP</h1>
      <div className="container">
        <UserForm />
        <UserList />
      </div>
    </div>
  );
}

export default App;
