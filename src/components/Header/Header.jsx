import logo from '../../assets/vacabulary_centered.png'

export default function Header() {
  return (
    <header>
      <div className='row'>
        <img src={logo} alt={'logo'} height={100}/>
      </div>
      <div>
        <button>Log In</button>
      </div>
    </header>
  )
}