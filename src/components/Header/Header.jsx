import logo from '../../assets/vocabulary_centered.png'

export default function Header(props) {
  return (
    <header>
      <div className='row'>
        <img src={logo} alt={'logo'} height={100}/>
      </div>
      <nav className='navigate'>
        <div className="navigate__item">
          <button onClick={props.onClick} className='navigate__action'>How to use it</button>
        </div>
      </nav>
      {/* <div>
        <button>Log In</button>
      </div> */}
    </header>
  )
}