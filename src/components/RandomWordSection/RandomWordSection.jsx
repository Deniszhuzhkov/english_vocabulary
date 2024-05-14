import Textarea from "../Textarea/Textarea"
import Button from "../Button/Button";

export default function RandomWordSection({className}) {
  return (
    <div className={"cell offset--cm" + className && ` ${className}`}>
      <h2 className="row offset--cm">
        <span style={{color: 'red'}}>In progress</span>
      </h2>
      <div className="row">
        <Textarea
          textareaName={'wordAnswer'}
          boxClass={'cell offset--cm'}
          disabled={'disabled'}
        />
      </div>
      <div className="row offset--cm">
        <Button className={'disabled'}> Send Ansver</Button>
      </div>
    </div>
  );
}