import TranslationListItem from "../TranslationListItem/TranslationListItem";

export default function TranslationListSection({className}) {
  const vacabluraryList = JSON.parse(localStorage.getItem('vacabluraryList'));

  return (
    <div className={"cell offset--cm" + className && ` ${className}`}>
      <h2 className="row offset--cm">
        Your List
      </h2>
      <div className="cell wrap">
        <div className="offset--cm cell">
          <table className="table">
            <thead>
              <tr>
                <th>En</th>
                <th>Ua</th>
              </tr>
            </thead>
            <tbody>
              {vacabluraryList && vacabluraryList.map((home,index) => (
                <TranslationListItem key={index} {...home} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}