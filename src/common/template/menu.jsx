import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuTree label='Clientes' icon='group' >
            <MenuItem path='/novo' label='Cadastrar' icon='plus-circle' />
            <MenuItem path='/' label='Consulta' icon='navicon' />
        </MenuTree>
    </ul>
)