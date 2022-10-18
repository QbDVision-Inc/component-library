import Button from "./components/atoms/Button/Button";
import ButtonGroup from "./components/molecules/ButtonGroup/ButtonGroup";
import { DropdownButton } from "./components";

const data = [
  {
    value: "General Attribute",
    key: "addGeneralAttribute",
    disabled: false,
    title: "Add",
  },
  {
    value: "Quality Attribute",
    key: "addQualityAttribute",
    disabled: false,
    title: "Add",
  },
  {
    value: "Performance Attribute",
    key: "addPerformanceAttribute",
    disabled: false,
    title: "Add",
  },
];

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <DropdownButton
        label="xyz"
        options={data}
        onOptionsSelect={(e) => console.log(e.value)}
      />
      <br />
      <ButtonGroup>
        <Button label="Button 1" onClick={() => alert("111")} hasArrow />
        <Button
          type="secondary"
          label="Button 2"
          onClick={() => alert("222")}
        />
        <Button label="Button 2" type="ghost" onClick={() => alert("222")} />
        <Button
          label="Button 3"
          type="secondary"
          onClick={() => alert("222")}
        />
      </ButtonGroup>
    </div>
  );
}

export default App;
