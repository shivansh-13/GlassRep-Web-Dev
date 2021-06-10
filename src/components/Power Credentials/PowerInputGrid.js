import React from "react";
import PowerDropdown from "./PowerDropdown";

const PowerInputGrid = ({ openModal }) => {
  return (
    <div className="power-entry">
      <div className="power-entry__header power-entry__header--sph">
        SPHERE (SPH)
      </div>
      <div className="power-entry__header power-entry__header--cyl">
        CYLINDER (CYL)
      </div>
      <div className="power-entry__header power-entry__header--axi">
        AXIS (AXI)
      </div>
      <div className="power-entry__header power-entry__header--add">
        Additional
      </div>
      <div className="power-entry__header power-entry__eye-label--r">
        RIGHT EYE
      </div>
      <div className="power-entry__header power-entry__eye-label--l">
        LEFT EYE
      </div>
      <div className="power-entry__input-sph--r">
        <PowerDropdown axis={false} openModal={openModal} value={0} />
      </div>
      <div className="power-entry__input-sph--l">
        <PowerDropdown axis={false} openModal={openModal} value={0} />
      </div>
      <div className="power-entry__input-cyl--r">
        <PowerDropdown axis={false} openModal={openModal} value={0} />
      </div>
      <div className="power-entry__input-cyl--l">
        <PowerDropdown axis={false} openModal={openModal} value={0} />
      </div>
      <div className="power-entry__input-axi--r">
        <PowerDropdown axis={true} openModal={openModal} value={0} />
      </div>
      <div className="power-entry__input-axi--l">
        <PowerDropdown axis={true} openModal={openModal} value={0} />
      </div>
      <div className="power-entry__input-addi--r">
        <PowerDropdown axis={false} openModal={openModal} value={0} />
      </div>
      <div className="power-entry__input-addi--l">
        <PowerDropdown axis={false} openModal={openModal} value={0} />
      </div>
    </div>
  );
};

export default PowerInputGrid;
