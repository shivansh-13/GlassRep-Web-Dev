import React from "react";
import InputInc from "./InputInc";

class AdditionalPowerGrid extends React.Component {
  render() {
    return (
      <div className="additional-power-grid">
        <div className="additional-power-grid__header">ADDITIONAL POWER</div>
        <div className="additional-power-grid__eye-label--r">
          OD (RIGHT EYE)
        </div>
        <div className="additional-power-grid__eye-label--l">OS (LEFT EYE)</div>
        <div className="additional-power-grid__input--l">
          <InputInc axis={false} />
        </div>
        <div className="additional-power-grid__input--r">
          <InputInc axis={false} />
        </div>
      </div>
    );
  }
}

export default AdditionalPowerGrid;
