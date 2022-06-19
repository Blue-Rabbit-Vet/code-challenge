import logo from "./logo.svg";
import "./App.css";

// import components
import Jumbo from "./components/jumbo";
import AboutMe from "./components/aboutMe";
import FullUserForm from "./components/fullUserForm";
import UsernameForm from "./components/usernameForm";
import AvatarForm from "./components/avatarForm";
import Cat from "./components/cat";
function App() {
  // For the sake of simplicity I will fill out the app.js jsx to be a single
  // page application with all components listed in order.
  return (
    <div className="App">
      <Jumbo />
      <AboutMe />
      <FullUserForm />
      <UsernameForm />
      <AvatarForm />
      <Cat />
    </div>
  );
}

export default App;
