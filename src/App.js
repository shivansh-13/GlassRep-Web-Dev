import React from "react";
import "./App.css";
import PowerInputGrid from "./components/PowerInputGrid";
import PowerPickerModal from "./components/PowerPickerModal";
import "./sass/main.scss";

class App extends React.Component {
  state = { modalOpen: false, forAxis: false };
  openModal = (openState, forAxis) => {
    this.setState({ modalOpen: openState, forAxis: forAxis });
  };
  render() {
    return (
      <div className="power-entry-form">
        <PowerInputGrid openModal={this.openModal} />
        <PowerPickerModal
          onSelectValue={(val) => {
            console.log(val);
            //TODO: Do something with value
          }}
          isOpen={this.state.modalOpen}
          openModal={this.openModal}
          title="RIGHT EYE" //TODO: pass a proper value
          subtitle="Sphere" //TODO: pass a proper value
          forAxis={this.state.forAxis} //TODO: pass a proper value
        />
      </div>
    );
  }
}

export default App;
