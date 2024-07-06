import { useState } from "react";

import Button from "../Button/Button"
import Settings from "../../assets/Settings.svg"
import TranslationListItem from "../TranslationListItem/TranslationListItem";

export default function TranslationListSection({ className }) {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('vocabularyList')));
  const [newItem, setNewItem] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          let lastId = list[list.length - 1]?.id || 0;
          const jsonData = JSON.parse(event.target.result);
          setList([
            ...list,
            ...jsonData.map(el => (el.id = ++lastId, el))
          ]);
          
        } catch (error) {
          console.log(error);
        }
      };
      reader.readAsText(selectedFile);
    }
  }

  function onChange(el, id) {
    const updatedList = list.map((element) => {
      id === element.id && (element[el.target.name] = el.target.value)
      return element
    })
    setList(updatedList)
  }
  
  function changeNewItem(el) {
    let updatedItem = {
      id: newItem.id,
      en: newItem.en,
      ua: newItem.ua,
      [el.target.name]: el.target.value,
    }
    setNewItem(updatedItem)
  }

  function saveNewItem() {
    
    if (newItem.en) {
      setList([
        ...list,
        newItem
      ]);
      saveChange()
    }
    setNewItem(null)
  }

  function addItem() {
    setNewItem({'id': list && list[list.length - 1]?.id + 1 || 1, en: '', ua: ""})
  }

  function saveChange() {
    localStorage.setItem('vocabularyList', JSON.stringify(list))
  }
  
  function deleteItem(id) {
    const filteredList = list.filter((el) => (el.id !== id));
    setList(filteredList);
    localStorage.setItem('vocabularyList', JSON.stringify(filteredList))
  }

  function downloadJSON() {
    const downloadLink = document.createElement('a');
    downloadLink.href = `data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(list))}`
    downloadLink.download = 'data.json';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <div className={"cell offset--cm" + className && ` ${className}`}>
      <div className="row row--v-center row--between offset--cm">
        <h2 className="row">
          Your List
        </h2>
      </div>
      <div className="row">
        <div className="row  offset--cm--w">
          <button className="download" href="download" onClick={()=>{downloadJSON()}}>download</button>
        </div>
        <div className="row offset--cm--w">
          <label className="upload">
            <input type="file" accept=".json" onLoad={(el)=>{console.log(el);}} onChange={handleFileChange} className="upload__input" />
            <p className="upload__text">uplopad</p>
          </label>
        </div>
        
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
                      onChange={element => {onChange(element, el.id)}}
                      onBlur={() => {saveChange()}}
                      onClickSet={() => {deleteItem(el.id)}}
                      value={el}
                      {...el}
                    />
                  ))}
                  {newItem && 
                    <TranslationListItem
                      activeTabe={true}
                      onChange={element => {changeNewItem(element)}}
                      onBlur={() => {saveNewItem()}}
                      value={newItem}
                      {...newItem}
                    />
                  }
                </tbody>
              </table>
              {!newItem && 
                <Button className={'action action--hover-show'} onClick={() => {addItem()}}>+</Button>
              }
            </div>
            : <p>Empty list</p>
          }
        </div>
      </div>
    </div>
  );
}