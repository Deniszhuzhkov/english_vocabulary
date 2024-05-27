import { useState } from "react";

import TranslationListItem from "../TranslationListItem/TranslationListItem";
import Settings from "../../assets/Settings.svg"


export default function TranslationListSection({ className }) {

  const [vacabularyList, setVacabularyList] = useState(JSON.parse(localStorage.getItem('vacabularyList')));

  function onChange(el, id) {

    let updatedList = vacabularyList.map((element) => {
      if (id === element.id) {
        element[el.target.name] = el.target.value 
        return element
      } else {
        return element
      }
    })
    setVacabularyList(updatedList)
  }

  function saveChange() {
    localStorage.setItem('vacabularyList', JSON.stringify(vacabularyList))
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
                    <th className="table__item--btn">
                      <img src={Settings} alt={'settings'} />
                    </th>
                  </tr>
                </thead>
                <tbody> 
                  {vacabularyList.map(el => (
                    <TranslationListItem
                      key={el.id}
                      onClickSet={() => {deleteItem(el.id)}}
                      onBlur = { () => {saveChange()} }
                      onChange={element => onChange(element, el.id)}
                      value={el}
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