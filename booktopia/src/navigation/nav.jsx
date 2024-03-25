import React from 'react';
import { Link } from 'react-router-dom';
// import GenreView from '../components/genreView';
const Nav = (props) => {
    const {items,textProperty, valueProperty, selectedItem, onItemSelect} = props;
        return (
            <nav>
                <ul class="nav justify-content-center"> {items && items.map(item => (
                    <li onClick={() => onItemSelect(item)} key={item[valueProperty]} className={item===selectedItem? 'nav-item active':'nav-item'}>
                        <Link class="nav-link" to={`/Home/${item[valueProperty]}`}>{item[textProperty]}</Link>
                        {/* <GenreView/> */}
                    </li>
                ))}
                </ul>
            </nav>
        );
    }

export default Nav;