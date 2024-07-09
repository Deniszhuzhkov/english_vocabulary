import logo from '../../assets/vocabulary_centered.png'

export default function Header(props) {
  return (
    <header className='header'>
      <div className='header__section'>
        <img src={logo} alt={'logo'} height={100}/>
      </div>
      <div className="header__section">
        <nav className='navigate'>
          <div className="navigate__item">
            <button onClick={props.onClick} className='navigate__action'>How to use it</button>
          </div>
        </nav>
      </div>
    </header>
  )
}