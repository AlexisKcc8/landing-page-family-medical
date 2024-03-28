import './stylesTextLogo.scss';
export const TextLogo = (props) => {
  const { classTextLogo, classTextFamily } = props;
  return (
    <h2 className={`m-0 p-0 text-logo ${classTextLogo}`}>
      <strong>
        <span className={`text-family ${classTextFamily}`}>Family</span>Medical
      </strong>
    </h2>
  );
};
