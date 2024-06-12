import { useRef } from "react";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";

export default function TranslationAdder({className}) {
  
  const textareaUa = useRef();
  const textareaEn = useRef();


  function addVocabulary() {
    testEmptyItem() && addVocabularyItem();
  }

  function testEmptyItem () {
    return textareaUa.current.value && textareaEn.current.value;
  }

  function addVocabularyItem() {
    const vocabularyList = localStorage.getItem('vocabularyList');
    const vocabularyListArr = vocabularyList ? JSON.parse(vocabularyList) : [];    
  
    vocabularyListArr.push(
      {
        id: vocabularyListArr[vocabularyListArr.length - 1]?.id + 1 || 0,
        en: textareaEn.current.value,
        ua: textareaUa.current.value,
      }
    )
    
    localStorage.setItem('vocabularyList', JSON.stringify(vocabularyListArr))
    
    textareaUa.current.value = '';
    textareaEn.current.value = '';
   
  }

  return (
    <div className={"cell offset--cm" + className && ` ${className}`}>
      <h2 className="row offset--cm">
        Add your word or sentence 
      </h2>
      <div className="row wrap">
        <Textarea
          ref={textareaEn}
          
          title={'En'}
          textareaName={'En'}
          boxClass={'cell offset--cm'}
        />
        <Textarea
          ref={textareaUa}
          
          title={'Ua'}
          textareaName={'Ua'}
          boxClass={'cell offset--cm'}
        />
      </div>

      <div className="row offset--cm">
        <Button onClick={addVocabulary}> Add word/sentence</Button>
      </div>
    </div>
  );
}