import Textarea from "../Textarea/Textarea"
import Button from "../Button/Button";

export default function RandomWordSection({style}) {
  return (
    <div className="cell offset--cm" style={style}>
      <h2 className="row offset--cm">
        Word
      </h2>
      <div className="row">
        <Textarea
          textareaName={'wordAnswer'}
          boxClass={'cell offset--cm'}
        />
      </div>
      <div className="row offset--cm">
        <Button> Send Ansver</Button>
      </div>
    </div>
  );
}