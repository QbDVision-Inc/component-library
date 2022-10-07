import Button from "./components/atoms/Button/Button";
import ButtonGroup from "./components/molecules/ButtonGroup/ButtonGroup";
import Link from "./components/atoms/Link";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <ButtonGroup>
        <Button label="Button 1" onClick={() => alert("111")} />
        <Button
          type={"secondary"}
          label="Button 2"
          onClick={() => alert("222")}
        />
        <Button label="Button 2" type={"ghost"} onClick={() => alert("222")} />
        <Button
          label="Button 3"
          type={"secondary"}
          onClick={() => alert("222")}
        />
      </ButtonGroup>
    </div>
  );
}

export default App;
