import { useState } from "react";
import Button from "../Button/Button";
import ChangeIcon from '../../assets/change.svg'

export default function RandomWordSection({ className }) {
  const list = JSON.parse(localStorage.getItem('vocabularyList')) || {};
  const [enToUa, setEnToUa] = useState(true);
  const [randomNum, setRandomNum] = useState(getRandom(list.length));
  const [answer, setanswer] = useState('');
  const [history, setHistory] = useState([]);

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function getColor(word = '', answer = '') {
    let q = 0;
    answer.split('').forEach((el, index) => {
      word[index] === el && ++q;
    });
    let coo = q / answer.length;
    
    if(coo > .9) { return 'exelent';}
    if(coo > .5) { return 'good';}
    if(coo > .3) { return 'notGood';}
    return 'bad'
  }

  function sendanswer() {
    let timeRandomNum;
    do {
      timeRandomNum = getRandom(list.length);
    } while (timeRandomNum === randomNum && list.length > 1)
    setHistory([
      { ua: list[randomNum][enToUa ? 'en' : 'ua'], answer: answer, corect: getColor(list[randomNum][enToUa ? 'en' : 'ua'], answer)  },
      ...history,
    ])
    setanswer('');
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
                <img src={ChangeIcon} alt="" />
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
                    onKeyDown={e => { e.code == "Enter" && sendanswer() }}
                    onChange={el => { setanswer(el.target.value) }}
                    value={answer}
                    className="input" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className="row offset--cm">
            <Button className={'m--full'} onClick={sendanswer}> Send answer</Button>
          </div>
          {
            history &&
            history.map((el, index) => (
              <div  key={index} className={`row row--v-center text text--status-${el.corect}`}>
                <div className="offset--cm">{el.ua}</div>
                <div>-</div>
                <div className="offset--cm">{el.answer}</div>
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


