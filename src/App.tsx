import Button from "./components/atoms/Button/Button";
import ButtonGroup from "./components/molecules/ButtonGroup/ButtonGroup";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <ButtonGroup>
        <Button label="Button 1" />
        <Button label="Button 2" />
      </ButtonGroup>
    </div>
  );
}

export default App;
