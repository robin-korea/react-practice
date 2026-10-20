import { Outlet } from "react-router-dom";
import { boardData } from "./mocks/board";
import { useEffect, useState } from "react";

// src > Board.jsx

function Board() {

    //mock > boardData
    //state > boardList

    const [boardList, setBoardList] = useState(() => {

        const result = document.cookie
            .split('; ')
            .find(item => item.startsWith('boardData='))
            ?.split('=')[1];

        if (result != null) {
            return JSON.parse(decodeURIComponent(result));
        } else {
            return boardData; //mock
        }

    });

    useEffect(() => {

        document.cookie = `boardData=${encodeURIComponent(JSON.stringify(boardList))}; path=/; max-age=31536000`;

    }, [boardList]);

    

    return (
        <div>
            <h2>게시판 페이지</h2>
            <p>- 업무와 관련된 내용만 작성하세요.</p>
            <p>- 출처가 불분명한 게시물을 작성하지 마세요.</p>

            {/* 
                <div>글쓰기, 목록보기, 수정하기 등</div> 

                props 전달
                <BoardList list={boardList} setter={setBoardList} />
            */}
            <Outlet context={{boardList, setBoardList}} />
        </div>
    );
}

export { Board };
