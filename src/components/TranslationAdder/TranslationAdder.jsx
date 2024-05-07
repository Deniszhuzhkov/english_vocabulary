import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea"
import { useState } from "react";

// const [value, setValue] = useState();


function change(e) {
  console.log(e.target.value); 
}



export default function TranslationAdder({style}) {
  return (
    <div className="cell offset--cm" style={style}>
      <h2 className="row offset--cm">
        Add your text or sentence
      </h2>
      <div className="row wrap">
        <Textarea
          title={'En'}
          textareaName={'En'}
          onChange={change}
          boxClass={'cell offset--cm'}
        />
        <Textarea
          title={'Ua'}
          textareaName={'Ua'}
          boxClass={'cell offset--cm'}
        />
      </div>

      <div className="row offset--cm">
        <Button> Add text/sentence</Button>
      </div>
    </div>
  );
}