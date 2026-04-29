import "./App.css";
import ActionField from "./components/ActionField/ActionField";
import ControlField from "./components/ControlledField/ControlField";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlledField from "./components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <h1>Get started</h1>

      {/* <SimpleForm /> */}
      {/* <ActionField /> */}
      {/* <ControlField /> */}
      <UnControlledField />
    </>
  );
}

export default App;
