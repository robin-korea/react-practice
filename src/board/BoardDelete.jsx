//src > board > BoardDelete.jsx

import { browser } from "react-dom";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";

function BoardDelete() {

// ① 부모 라우트가 <Outlet>을 통해 자식 라우트를 표시할 때, 자식에게 전달한 데이터를 가져옵니다.
// ② useState로 관리하는 상태나 함수를 전달할 때 사용할 수 있습니다.
// ③ <Outlet context={{ boardList, setBoardList }} />
// ④ useOutletContext()로 전달받음
    const {boardList, setBoardList} = useOutletContext();

// ① React Router에서 페이지를 이동시키는 함수
    const navigate = useNavigate();

    const params = useParams();

    function handleDelete() {

        setBoardList(
            boardList.filter(item => 
                item.seq != params.seq
            )
        )

        navigate('/board');

    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>게시물 삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>정말 삭제하겠습니까?</div>
                            <span onClick={handleDelete}>삭제하기</span>&nbsp;
                            <Link to={`/board/view/${params.seq}`}>돌아가기</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export { BoardDelete };