// 컴포넌트 생성
// 컴포넌트 : 사용자 인터페이스 일부를 표시하는 재사용 가능한 코드 조각
// 애플리케이션의 UI 엘리먼트를 렌더링, 관리, 업데이트할 때 사용

// 함수를 정의
// export 키워드 : 함수를 파일 외부에서 접근할 수 있도록 만들어줌
// default 키워드 : 코드를 사용하는 다른 파일에서 이 함수가 파일의 주요 함수임을 알려줌
export default function Board() {
  // 버튼을 반환
  // <button> : JSX 엘리먼트
  // JSX 엘리먼트 : JavasScript 코드와 HTML 태그의 조합으로 표시할 내용을 설명
  // className="square" : 버튼 prop 또는 프로퍼티, CSS에 버튼의 스타일을 지정하는 방법 알려줌
  // X : 버튼 내부에 표시되는 텍스트
  // </button> : JSX 엘리먼트를 닫아 버튼 내부에 다음 콘텐츠를 배치해서는 안 됨을 나타냄
  return <button className="square">X</button>;
}
