
export default function TranslationListItem(props) {
  return (
    <tr onClick={props.onClick} onBlur={props.onBlur} className="table__row">
      <td className="table__item">{props.en}</td>
      <td className="table__item">{props.ua}</td>
      <td className="table__item table__item--btn">
        <button className="table__action table__action--red" onClick={props.onClickSet}>X</button>
      </td>
    </tr>
  )
}