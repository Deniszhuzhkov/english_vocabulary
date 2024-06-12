import { useState } from "react";

import TranslationListItem from "../TranslationListItem/TranslationListItem";
import Button from "../Button/Button"
import Settings from "../../assets/Settings.svg"

export default function TranslationListSection({ className }) {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('vocabularyList')));
  const [itemAdder, setItemAdder] = useState(false);

  const lastId = list && list[list.length - 1]?.id + 1;

  function onChange(el, id) {
    const updatedList = list.map((element) => {
      if (id === element.id) {
        element[el.target.name] = el.target.value 
        return element
      } else {
        return element
      }
    })
    setList(updatedList)
  }

  function saveChange() {
    localStorage.setItem('vocabularyList', JSON.stringify(list))
  }
  
  function deleteItem(id) {
    const filteredList = list.filter((el) => (el.id !== id));
    setList(filteredList);
    localStorage.setItem('vocabularyList', JSON.stringify(filteredList))
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
          { list && list.length ?
            <div className="cell">
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
                  {list.map(el => (
                    <TranslationListItem
                      key={el.id}
                      onClickSet={() => {deleteItem(el.id)}}
                      onBlur={() => {saveChange()}}
                      onChange={element => {onChange(element, el.id)}}
                      value={el}
                      {...el}
                    />
                  ))}

                  {itemAdder && 
                    <TranslationListItem
                      key={lastId}
                      add={true}
                      onChange={element => {onChange(element, lastId)}}
                      onClickSet={() => {setItemAdder(false);}}
                      value={{id: lastId, en: '', ua: ""}}
          
                    />
                  }
                </tbody>
              </table>
              {!itemAdder && 
                <Button className={'action action--hover-show'} onClick={() => {setItemAdder(true)}}>+</Button>
              }
            </div>
            : <p>Empty list</p>
          }
        </div>
      </div>
    </div>
  );
}