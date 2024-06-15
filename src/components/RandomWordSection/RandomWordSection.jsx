import { useState } from "react";
import Button from "../Button/Button";


export default function RandomWordSection({ className }) {
  const list = JSON.parse(localStorage.getItem('vocabularyList')) || {};
  const [enToUa, setEnToUa] = useState(true)
  const [randomNum, setRandomNum] = useState(getRandom(list.length))
  const [ansver, setAnsver] = useState()
  const [history, setHistory] = useState([]);

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function sendAnsver() {
    let timeRandomNum;
    do {
      timeRandomNum = getRandom(list.length);
    } while (timeRandomNum === randomNum && list.length > 1)
    setHistory([
      { ua: list[randomNum][enToUa ? 'en' : 'ua'], ansver: ansver },
      ...history,
    ])
    setAnsver('');
    setRandomNum(timeRandomNum);
  }

  return (
    <div className={"cell offset--cm" + className && ` ${className}`}>
      <h2 className="row offset--cm">
        Translate word/sentence
      </h2>

      {list && list.length ?
        <>
          <div className="row">
            <div className="cell">
              <Button onClick={()=>setEnToUa(!enToUa)} className={'action--h--full'}>
                R
              </Button>
            </div>
            <div data-flex='1' className="cell">
              <div className="row row--v-center offset--cm--left">
                <p>
                  <b>{enToUa ? 'Ua' : 'En'}</b>
                </p>
                <p data-flex="1" className="row offset--cm text-translate">
                  {list[randomNum][enToUa ? 'ua' : 'en']}
                </p>
              </div>
              <div className="row row--v-center offset--cm">
                <p><b>{enToUa ? 'En' : 'Ua'}</b></p>
                <div className="cell offset--cm--left" data-flex='1'>
                  <input
                    onKeyDown={e => { e.code == "Enter" && sendAnsver() }}
                    onChange={el => { setAnsver(el.target.value) }}
                    value={ansver}
                    className="input" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className="row offset--cm">
            <Button onClick={sendAnsver}> Send Ansver</Button>
          </div>
          {
            history &&
            history.map(el => (
              <div className="row row--v-center">
                <div className="offset--cm">{el.ua}</div>
                <div>-</div>
                <div className="offset--cm">{el.ansver}</div>
              </div>
            ))
          }
        </>
        :
        <div className="offset--cm">
          <h3>Please add some words</h3>
        </div>
      }
    </div>
  );
}


