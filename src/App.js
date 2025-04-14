import { useState } from 'react';

function Square({ value, onSquareClick }) {
  // 컴포넌트는 자신이 정의한 state에만 접근할 수 있음
  // 대신 부모 컴포넌트에서 자식 컴포넌트로 함수를 전달하여 함수 호출 가능
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
  // 여러 자식 컴포넌트에서 데이터를 수집하거나 자식 컴포넌트가 서로 통신할 때 부모 컴포넌트에 공유 state를 선언
  // 부모 컴포넌트에 공유 state를 선언
  // 자식 컴포넌트가 서로 동기화되고 부모 컴포넌트와도 동기화되도록 유지
  const [squares, setSquares] = useState(Array(9).fill(null));

  // 클로저로 외부에 정의된 setSquares 접근 가능
  // React에서는 주로 이벤트를 나타내는 prop에는 onSomething과 같은 이름을 사용
  // 이벤트를 처리하는 함수를 정의 할 때는 handleSomething과 같은 이름을 사용
  function handleClick(i) {
    // 원본 데이터 불변성
    // 원본 데이터를 직접 변경하지 않고 변경 사항이 있는 새 복사본 데이터를 대체
    // 예시) .slice()를 호출하여 squares 배열의 사본을 생성
    // 불변성 이점
    // 1. 직접적인 데이터 변경을 피하면 이전 버전의 데이터를 그대로 유지하여 나중에 재사용(또는 초기화)할 수 있음(실행 취소 기능)
    // 2. 부모 컴포넌트의 state가 변경되면 모든 자식 컴포넌트가 자동으로 다시 렌더링될 때 변경 사항이 없는 자식 컴포넌트도 포함되는데
    //    불변성을 사용하면 영향을 받지 않는 부분의 리렌더링을 피할 수 있어 성능에 좋음
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  // handleClick(0)은 함수를 호출하기 때문에
  // setSquares를 호출하여 컴포넌트의 state를 변경 -> 보드 전체가 다시 렌더링
  // 이 때 handleClick(0) 다시 호출되므로 무한루프
  // 화살표 함수 이용
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
