import { useState } from "react";

export default function TranslationListItem(props) {
  let [inputEn, setInputEn] = useState(props.activeTabe || false);
  let [inputUa, setInputUa] = useState(false);

  function onBlur(setInputFn, runFnProps) {
    setInputFn(false)
    runFnProps && runFnProps()
  };

  return (
    <tr onClick={props.onClick} className="table__row">
      <td
        onClick={()=>{setInputEn(true)}}
        className="table__item table__item--text"
      >
        {
          inputEn ? 
            <input
              className="table__input"
              autoFocus={true}
              onBlur={() => {onBlur(setInputEn, props.onBlur)}}
              onChange={props.onChange}
              value={props.en}

              name="en"
            ></input>
          :
            <p className="table__text">{ props.en }</p>
        }
      </td>
      <td
        className="table__item table__item--text"
        onClick={()=>{setInputUa(true)}}
      >
        { inputUa ?
            <input
              className="table__input"
              onChange={props.onChange}
              autoFocus={true}
              onBlur={() => {onBlur(setInputUa, props.onBlur())}}
              value={props.ua}
              name="ua"
            ></input>
          : 
            <p className="table__text" >{ props.ua }</p>
        }
      </td>
      
      <td className="table__item table__item--btn">
        { 
        !props.activeTabe &&
          <button className="table__action table__action--red" onClick={props.onClickSet}>X</button>
        }
      </td>
    </tr>
  )
}