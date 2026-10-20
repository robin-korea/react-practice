//src > board > BoardEdit.jsx

import { useEffect, useRef } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function BoardEdit() {

    const {boardList, setBoardList} = useOutletContext();

    const name = useRef(null);
    const subject = useRef(null);
    const content = useRef(null);

    const params = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        const item = boardList.find(item => item.seq == params.seq);

        name.current.value = item.name;
        subject.current.value = item.subject;
        content.current.value = item.content;

    }, []);

    function handleSubmit(event) {

        event.preventDefault();

        const formData = new FormData(event.target);

        setBoardList(

            boardList.map(item => 
                item.seq == params.seq
                    ? {
                        ...item,
                        name: formData.get('name'),
                        subject: formData.get('subject'),
                        content: formData.get('content')
                    }
                    : item
            )

        );

        //navigate('/board');
        navigate('/board/view/' + params.seq);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <th>이름</th>
                        <td className="left"><input type="text" className="short" name="name" ref={name} /></td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" className="full" name="subject" ref={subject} /></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td><textarea className="full" name="content" ref={content}></textarea></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button type="submit">수정하기</button>
            </div>
            </form>
        </>
    );
}

export { BoardEdit };