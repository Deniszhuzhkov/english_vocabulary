import { useState } from "react";

import TranslationListItem from "../TranslationListItem/TranslationListItem";
import Settings from "../../assets/Settings.svg"

export default function TranslationListSection({ className }) {


  const [vacabularyList, setVacabularyList] = useState(JSON.parse(localStorage.getItem('vacabularyList')));

  function allowEditable(el) {
    el.target.contentEditable = true;
  }
  function removeEditable(el) {
    el.target.contentEditable = false;
  }

  function deleteItem(id) {
    const updateVacabularyList = vacabularyList.filter((el) => (el.id !== id));
    setVacabularyList(updateVacabularyList);
    localStorage.setItem('vacabularyList', JSON.stringify(updateVacabularyList))
  }

  return (
    <div className={"cell offset--cm" + className && ` ${className}`}>
      <div className="row row--v-center row--between offset--cm">
        <h2 className="row">
          Your List
        </h2>
      </div>

      <div className="cell wrap">
        <div className="offset--cm cell">
          { vacabularyList ?
              <table className="table">
                <thead>
                  <tr>
                    <th>En</th>
                    <th>Ua</th>
                    <th className="table__itrem--btn">
                      <img src={Settings} alt={'settings'} />
                    </th>
                  </tr>
                </thead>
                <tbody> 
                  {vacabularyList.map(el => (
                    <TranslationListItem
                      key={el.id}
                      onBlur={removeEditable}
                      onClick={allowEditable}
                      onClickSet={(id) => deleteItem(el.id)}
                      {...el}
                    />
                  ))}
                </tbody>
              </table>
            : <p>Empty list</p>
          }

        </div>
      </div>
    </div>
  );
}