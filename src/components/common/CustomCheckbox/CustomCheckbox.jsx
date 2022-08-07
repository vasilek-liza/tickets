import './CustomCheckbox.scss';

export function CustomCheckbox({onClick, checked, text}) {
  return (
    <div className="custom__checkbox" onClick={onClick}>
      <input type="checkbox" checked={checked} onChange={(evt) => evt.preventDefault()}/>
      <label>{text}</label>
    </div>
  );
}