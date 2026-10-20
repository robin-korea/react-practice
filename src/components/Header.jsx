import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

//src > components > Header.jsx
//src > components > Header.module.css

// function Header() {

//     return (
//         <header>
//             <h1 className="main">Toy Project <small>React</small></h1>
//             <ul className={styles.menu}>
//                 <li><a href="">Home</a></li>
//                 <li><a href="">Member</a></li>
//                 <li><a href="">Admin</a></li>
//                 <li><a href="">Board</a></li>
//             </ul>
//         </header>
//     );
// }


function Header() {

    return (
        <header>
            <h1 className="main">Toy Project <small>React</small></h1>
            <ul className={styles.menu}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/member">Member</NavLink></li>
                <li><NavLink to="/admin">Admin</NavLink></li>
                <li><NavLink to="/board">Board</NavLink></li>
            </ul>
        </header>
    );
}

export { Header };