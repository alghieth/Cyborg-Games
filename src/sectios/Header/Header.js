import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import NaveItem, {NaveItemDropDown} from '../../components/NaveItem/NaveItem'
import profile_img from '../../assets/images/profile-header.jpg'

function Header() {
    const darkMood = () => {
        document.querySelector('body').setAttribute("data-theme", 'dark')
    };
    const lightMood = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    };
    const toggelMood = (e) => {
        if (e.target.checked) lightMood();
        else darkMood();
    }
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
    <div className="container">
        <Link to="/" className="navbar-brand">
            <img src={logo} alt='sdsd'/>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto navBar">
                <NaveItem>
                    <Link to='/' className="nav-link">Home</Link>
                </NaveItem>
                <NaveItem>
                    <Link to='/browse' className='nav-link'>Browse</Link>
                </NaveItem>
                <NaveItemDropDown>
                    <a href="dssds" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                    <ul className="dropdown-menu">
                        <li><Link to="/details" className="dropdown-item">Details</Link></li>
                        <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                    </ul>
                </NaveItemDropDown>
                <NaveItem>
                <Link to="/stream" className="nav-link">Stream</Link>
                </NaveItem>
                <NaveItem>
                    <Link className='profile profile-link' to='/profile' >Profile <img src={profile_img} alt=''/></Link>
                </NaveItem>
            </ul>
            <div className='toggel-btn'>
            <input type='checkbox' id='mood' style={{display: 'none'}} onChange={toggelMood}/>
            <label id='mood-btn' htmlFor='mood'></label>
        </div>
        </div>
    </div>
</div>

  )
}

export default Header