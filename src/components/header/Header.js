import logo from '../../assets/img/logo_startmovie.png';
import { TopMenu } from '../menu/TopMenu';
import "./Header.css";

export const Header = ()=>{
    return (
        <div>
            <div className='flex, text-center'>
            <img className= 'logo' src={logo} alt="logo" />
            <h1>Bienvenido a Startmovie</h1> 

            </div>
            <TopMenu />       
        </div>
    )
}
