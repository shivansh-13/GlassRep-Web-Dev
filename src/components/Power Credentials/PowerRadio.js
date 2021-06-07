import React from "react";
/**
 * Select Bifocal power (yes or no)
 * radio button group
 */
class PowerRadio extends React.Component {
  render() {
    return (
      <div className="power-radio">
        <div className="power-radio__heading">Do you have a Bifocal power?</div>
        <div className="power-radio__button">
          <input type="radio" id="power-radio-yes" name="power-radio-group" />
          <label htmlFor="power-radio-yes">Yes</label>
        </div>
        <div className="power-radio__button">
          <input type="radio" id="power-radio-no" name="power-radio-group" />
          <label htmlFor="power-radio-no">No</label>
        </div>
      </div>
    );
  }
}

export default PowerRadio;
