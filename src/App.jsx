import "./App.css";
import ActionField from "./components/ActionField/ActionField";
import ControlledField from "./components/ControlledField/ControlledField";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlledField from "./components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <h1>Get started</h1>

      {/* <SimpleForm /> */}
      {/* <ActionField /> */}
      <ControlledField />
      {/* <UnControlledField /> */}
    </>
  );
}

export default App;
