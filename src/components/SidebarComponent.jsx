import { Link } from "react-router-dom"
import user from '../icons/users.svg'
import '../styles/SidebarStyle.css'
import dashboard from '../icons/dashboard.svg'
import chart from '../icons/chart.svg'
import dolar from '../icons/dolar.svg'
import help from '../icons/help.svg'
import music from '../icons/music.svg'
import settings from '../icons/settings.svg'


function SidebarComponent() {
  return (
    <div className="SidebarComponent">




        {/* SidebarHeader INICIO*/}
        <div className="SidebarHeader">
            {/* AQUI VA LA INFOR DEL OAUTH2.0 */}
            <img src={user} alt="user-icon" />
            <div className="UserData">
                <span>Tu Nombre</span>
                <span>Jonathan Melgar</span>
            </div>
            {/* AQUI TERMINA LA INFOR DEL OAUTH2.0 */}
        </div>
        {/* SidebarHeader FINAL*/}




        {/* SidebarMenu INICIO*/}
        <div className="SidebarMenu">
            <ul>
                <li>
                    <Link to="/">
                        <img src={dashboard} alt="inicio-icon" />
                        <span>Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d1">
                        <img src={chart} alt="D1-icon" />
                        <span>Dimensión 1</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d2">
                        <img src={dolar} alt="D2-icon" />
                        <span>Dimensión 2</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d3">
                        <img src={help} alt="D3-icon" />
                        <span>Dimensión 3</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d4">
                        <img src={music} alt="D5-icon" />
                        <span>Dimensión 4</span>
                    </Link>
                </li>
            </ul>
        </div>
        {/* SidebarMenu FINAL*/}





        {/* SidebarFooter INICIO*/}
        <div className="SidebarFooter">
            <ul>
                <li>
                    <Link to="/config">
                        <img src={settings} alt="D5-icon" />
                        <span>Configuracion</span>
                    </Link>
                </li>
            </ul>
        </div>
        {/* SidebarFooter FINAL*/}
    </div>
  )
}

export default SidebarComponent