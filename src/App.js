// React 컴포넌트에서는 useState 함수 제공
// useState : 호출하여 무언가를 "기억"할 수 있는 함수
import { useState } from 'react';

function Square() {
  // value : 값을 저장
  // setValue : 값을 변경하는데 사용
  // useState(null) : null - state 변수의 초기값으로 사용
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  // onClick 핸들러에서 set 함수를 호출함으로써 React <button>이 클릭될 때마다 Square를 다시 렌더링
  // set함수 호출 시 React는 그 안에 자식 컴포넌트 자동 업데이트
  return <button className="square" onClick={handleClick}>{value}</button>;
}

// 각 Square에는 고유한 state가 존재
// 각각의 value는 다른 사각형과 완전히 독립적
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
