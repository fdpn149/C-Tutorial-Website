import './Header.css'
import cImg from './assets/C.png'

function Header({title}) {
    return (<>
        <div className='header'>
            <img className='logo' src={cImg} alt='C的Logo' />
            <div className='title'>{title}</div>
        </div>
    </>)
}

export default Header;