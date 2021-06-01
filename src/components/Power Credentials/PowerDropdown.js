import React from "react";
/**
 * Shows the dropdown button.
 * Opens modal when clicked.
 * Displays `value` passed as a prop. Update this in parent grid and rerender
 * with a new value when selected by modal.
 */
class PowerDropdown extends React.Component {
  render() {
    return (
      <div className="power-dropdown-button">
        <button
          onClick={() => {
            this.props.openModal(true, this.props.axis);
          }}
        >
          {this.props.value} <i className="fas fa-caret-down" />
        </button>
      </div>
    );
  }
}

export default PowerDropdown;
