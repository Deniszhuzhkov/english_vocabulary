import { useRef } from "react";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";

export default function TranslationAdder({className}) {
  const textareaUa = useRef();
  const textareaEn = useRef();

  function addVacabulary() {
    testEmptyItem() && addVacabularyItem();
  }

  function testEmptyItem () {
    return textareaUa.current.value && textareaEn.current.value;
  }

  function addVacabularyItem() {
    const vacabluraryList = localStorage.getItem('vacabluraryList');
    const vacabluraryListObject = vacabluraryList ? JSON.parse(vacabluraryList) : [];    
  
    vacabluraryListObject.push(
      {
        en: textareaEn.current.value,
        ua: textareaUa.current.value,
      }
    )
    
    localStorage.setItem('vacabluraryList', JSON.stringify(vacabluraryListObject))
  }

  return (
    <div className={"cell offset--cm" + className && ` ${className}`}>
      <h2 className="row offset--cm">
        Add your word or sentence 
      </h2>
      <div className="row wrap">
        <Textarea
          ref={textareaUa}
          title={'En'}
          textareaName={'En'}
          boxClass={'cell offset--cm'}
        />
        <Textarea
          ref={textareaEn}
          title={'Ua'}
          textareaName={'Ua'}
          boxClass={'cell offset--cm'}
        />
      </div>

      <div className="row offset--cm">
        <Button onClick={addVacabulary}> Add text/sentence</Button>
      </div>
    </div>
  );
}