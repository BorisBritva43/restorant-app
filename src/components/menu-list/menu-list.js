import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';

class MenuList extends Component {

    render() {

        const { menuItems } = this.props;

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem} />
                    })
                }
                <MenuListItem />
            </ul>
        )
    }
};


export default MenuList;