//src > board > BoardAdd.jsx

import { useNavigate, useOutletContext } from "react-router-dom";
import { boardData } from "../mocks/board";

function BoardAdd() {

    const {boardList, setBoardList} = useOutletContext();

    const navigate = useNavigate();

    function handleSubmit(event) {

        event.preventDefault();

        const formData = new FormData(event.target);

        //새글
        const item = {
            seq: Math.max(...boardList.map(item => item.seq)) + 1,
            name: formData.get('name'),
            subject: formData.get('subject'),
            content: formData.get('content'),
            regdate: new Date().toLocaleDateString()
        };

        setBoardList([...boardList, item]);

        navigate('/board');

    }

    return (
        <>  
            <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <th>이름</th>
                        <td className="left"><input type="text" className="short" name="name" /></td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" className="full" name="subject" /></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td><textarea className="full" name="content"></textarea></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button type="submit">글쓰기</button>
            </div>
            </form>
        </>
    );
}

export { BoardAdd };