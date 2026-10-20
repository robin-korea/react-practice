//src > board > BoardList.jsx

import { Link, useOutletContext } from "react-router-dom";

function BoardList() {

    const {boardList, setBoardList} = useOutletContext();

    return (
        <>
            <table>
                <thead>
                    <th>번호</th>
                    <th>제목</th>
                    <th>이름</th>
                    <th>날짜</th>
                </thead>
                <tbody>
                    {
                        boardList.map(item => 
                            <tr key={item.seq}>
                                <td>{item.seq}</td>
                                <td className="left">
                                    <Link to={`view/${item.seq}`}>{item.subject}</Link>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.regdate.substring(0, 10)}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div>
                <Link to="add">글쓰기</Link>
            </div>
        </>
    );
}

export { BoardList };