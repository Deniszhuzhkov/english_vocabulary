import './Textarea.css'
export default function Textarea(props) {
  return (
    <>
      <label className={props.boxClass} data-flex='1'>
        { props.title ? <p>{props.title}</p> : ''}
        <textarea name={props.textareaName} onChange={props.onChange}></textarea>
      </label>
    </>
  )
}