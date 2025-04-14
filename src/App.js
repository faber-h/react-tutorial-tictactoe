// React 컴포넌트 아키텍처 사용 -> 중복된 코드 피하기
// Board와 Square 컴포넌트는 반드시 대문자로 시작해야 함
// { value } : props
// props를 사용하여 부모 컴포넌트에서 자식 컴포넌트로 전달
// JSX에서 JavaScript로 탈출하려면 중괄호 필요
function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  // JSX 문법을 사용하여 Square 컴포넌트 렌더링
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
