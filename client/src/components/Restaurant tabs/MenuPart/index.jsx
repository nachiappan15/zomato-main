import React, {useState} from 'react'
import Menu from '../Overview/Menu'


const MenuPart = () => {

    const [menus, setMenus] = useState([""])
    return (
        <>
            <div>
                {menus.map(menu => {
                    return<>
                    <Menu/>
                    </>
                })}
                
            </div>
        </>
    )
}

export default MenuPart
