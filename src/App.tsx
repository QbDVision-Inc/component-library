import Button from "./atoms/Button/Button";
import ButtonGroup from "./molecules/ButtonGroup/ButtonGroup";

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
