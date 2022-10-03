import Button from "./components/atoms/Button/Button";
import ButtonGroup from "./components/molecules/ButtonGroup/ButtonGroup";
import Link from "./components/atoms/Link";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Link label={"Hello"} href={"#"} isExternal />
      <ButtonGroup>
        <Button label="Button 1" isDisabled onClick={() => alert("111")} />
        <Button label="Button 2" isLoading onClick={() => alert("222")} />
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
