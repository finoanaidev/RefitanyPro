import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <div>
         <div className='SideMenu'>
            <ul>
                <li><Link to="/admin/accueilSyndic">Accueil</Link></li>
                <li><Link to="/admin/copro/copropriete">Copropriete</Link></li>
                <li><Link to="/admin/compatibilite/compatibilite">Compatibilite</Link></li>  
                <li><Link to="/admin/assemble/assemble">Assemble Generale</Link></li> 
                <li><Link to="/admin/evenement/evenement">Evenement</Link></li>             
            </ul>
        </div>
    </div>
  )
}

export default Header
