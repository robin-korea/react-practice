import { Header } from './components/Header';
import { Home } from './Home';
import { Member } from './Member';
import { Admin } from './Admin';
import { Board } from './Board';
import { BoardList } from './board/BoardList';
import { BoardAdd } from './board/BoardAdd';
import { BoardView } from './board/BoardView';
import { BoardEdit } from './board/BoardEdit';
import { BoardDelete } from './board/BoardDelete';
import { HashRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';

//App.jsx

function App() {

    return (
         <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<Member />} />
                <Route path="/admin" element={<Admin />} />
                
                <Route path="/board" element={<Board />}>
                    <Route index element={<BoardList />} />
                    <Route path="add" element={<BoardAdd />} />
                    <Route path="view/:seq" element={<BoardView />} />
                    <Route path="edit/:seq" element={<BoardEdit />} />
                    <Route path="del/:seq" element={<BoardDelete />} />
                </Route>                 
            </Routes>
         </HashRouter>
    );
}


export default App;