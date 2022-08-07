import './CustomButton.scss';

export function CustomButton({text, getText}) {

  return (
    <button className="custom__button">
      {getText(text)}
    </button>
  );
}