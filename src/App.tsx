import React from "react";

import { RecordHeader } from "./components";

function App() {
  return (
    <div>
      <RecordHeader
        title="ThermoFisher AEX Chromatography Resin"
        currentState="Draft"
        breadcrumb={[
          { label: "QTPP", url: "#" },
          { label: "GA-13 - Dosage Form" },
        ]}
        label="MTS-4"
        backButtonLink="#"
      />
    </div>
  );
}

export default App;
