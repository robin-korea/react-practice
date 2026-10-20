//src > board > BoardView.jsx

import { Link, useOutletContext, useParams } from "react-router-dom";

function BoardView() {

    const {boardList, setBoardList} = useOutletContext();

    //- view/5
    const params = useParams();

    //5번 글
    const item = boardList.find(item => item.seq == params.seq);

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>번호</th>
                        <td className="left">{params.seq}</td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td className="left">{item.name}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td className="left">{item.subject}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td className="left">{item.content}</td>
                    </tr>
                    <tr>
                        <th>날짜</th>
                        <td className="left">{item.regdate}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <Link to="/board">목록보기</Link>&nbsp;
                <Link to={`/board/edit/${item.seq}`}>수정하기</Link>&nbsp;
                <Link to={`/board/del/${item.seq}`}>삭제하기</Link>
            </div>
        </>
    );
}

export { BoardView };