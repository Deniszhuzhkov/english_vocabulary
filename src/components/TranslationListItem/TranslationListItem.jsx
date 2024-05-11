
export default function TranslationListItem(props) {
  return (
    <tr className="table__row" key={props.index}>
      <td className="table__item">{props.en}</td>
      <td className="table__item">{props.ua}</td>
    </tr>
  )
}