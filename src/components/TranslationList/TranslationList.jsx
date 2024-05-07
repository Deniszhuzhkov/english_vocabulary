import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea"

export default function TranslationList({style}) {
  return (
    <div className="cell offset--cm" style={style}>
      <h2 className="row offset--cm">
        Your List
      </h2>
      <div className="cell wrap">
        <div className="offset--cm row row--v-center">
          <p>Word</p>
          <span> - </span>
          <p>asd</p>
        </div>
      </div>
    </div>
  );
}