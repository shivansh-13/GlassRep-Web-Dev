import React from "react";
/**
 * Build options
 * @param {boolean} forAxis Shows 0 to 180 if `true`
 * @param {function} callBack Calls with value when selected
 * @returns Array
 */
function getList(forAxis, callBack) {
  var list = [];
  if (forAxis) {
    for (let i = 1; i < 181; i += 2) {
      const val = i;
      list.push(
        <tr key={i}>
          <td
            onClick={() => {
              callBack(val);
            }}
          >
            {val}
          </td>
          <td
            className="border-left"
            onClick={() => {
              callBack(val + 1);
            }}
          >
            {val + 1}
          </td>
        </tr>
      );
    }
  } else {
    for (var i = 1; i < 81; i++) {
      const val = 0.25 * i;
      list.push(
        <tr key={i}>
          <td
            onClick={() => {
              callBack(-val);
            }}
          >
            {-val}
          </td>
          <td
            className="border-left"
            onClick={() => {
              callBack(val);
            }}
          >
            {val}
          </td>
        </tr>
      );
    }
  }
  return list;
}

/**
 * Show modal to select a value
 * @param {Object} props
 * @param {string} props.title Display title
 * @param {string} props.subtitle Display subtitle
 * @param {boolean} props.forAxis Set `true` to show 0 to 180
 * @param {function} props.onSelectValue Callback with the value selected
 * @param {function} props.openModal Callback with `false` to close this modal
 * @param {boolean} props.isOpen Toggle state
 * @returns null
 */
const PowerPickerModal = ({
  title,
  subtitle,
  forAxis,
  isOpen,
  openModal,
  onSelectValue,
}) => {
  const onSelect = (val) => {
    openModal(false);
    onSelectValue(val);
  };
  if (!isOpen) return null;
  return (
    <div className="power-picker-modal open">
      <div className="power-picker-modal__wrapper">
        <div className="power-picker-modal__header--title">{title}</div>
        <div className="power-picker-modal__header--subtitle">{subtitle}</div>
        <table>
          <tbody>
            <tr>
              <td
                colSpan={2}
                onClick={() => {
                  onSelect(0);
                }}
              >
                0
              </td>
            </tr>
            {getList(forAxis, onSelect)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PowerPickerModal;
