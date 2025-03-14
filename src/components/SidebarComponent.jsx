import { Link } from "react-router-dom"
import user from '../icons/ivan.png'
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
                <span>TU NOMBRE</span>
                <span>IVAN</span>
            </div>
            {/* AQUI TERMINA LA INFOR DEL OAUTH2.0 */}
        </div>
        {/* SidebarHeader FINAL*/}




        {/* SidebarMenu INICIO*/}
        <div className="SidebarMenu">
            <ul>
                <li>
                    <Link to="/" className="Link">
                        <img src={dashboard} alt="inicio-icon" />
                        <span>Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d1" className="Link">
                        <img src={chart} alt="D1-icon" />
                        <span>Dimencion 1</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d2" className="Link">
                        <img src={dolar} alt="D2-icon" />
                        <span>Dimencion 2</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d3" className="Link">
                        <img src={help} alt="D3-icon" />
                        <span>Dimencion 3</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d4" className="Link">
                        <img src={music} alt="D4-icon" />
                        <span>Dimencion 4</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d5" className="Link">
                        <img src={music} alt="D5-icon" />
                        <span>Dimencion 5</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d6" className="Link">
                        <img src={music} alt="D6-icon" />
                        <span>Dimencion 6</span>
                    </Link>
                </li>
                <li>
                    <Link to="/d7" className="Link">
                        <img src={music} alt="D7-icon" />
                        <span>Dimencion 7</span>
                    </Link>
                </li>
            </ul>
        </div>
        {/* SidebarMenu FINAL*/}





        {/* SidebarFooter INICIO*/}
        <div className="SidebarFooter">
            <ul>
                <li>
                    <Link to="/config" className="Link">
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