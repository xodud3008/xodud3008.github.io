---
title: "Javascript 4일차"
excerpt: "자바스크립트 함수와 이벤트"

categories:
  - Javascript
tags:
  - [Javascript, Javascript 개념, Javascript 함수, Javascript 이벤트, 함수와 이벤트]

toc: true
toc_sticky: true
 
dat8: 2022-10-30
last_modified_at: 2022-10-30
---

# 함수와 이벤트

### 함수

- 장점
    - 각 명령의 시작과 끝을 명확하게 구별할 수 있음
    - 같은 기능이 필요할 때마다 재사용 가능
- 사용방법
    - 함수 정의 ⇒ 실행
    - 함수 선언의 위치는 어디든 상관 없음
        - 웹 브라우저는 함수 선언 부분을 가장 먼저 해석
- 재사용
    - 매개변수 사용
        - 함수를 실행하기 위해 필요하다고 지정하는 값
    - return
        - 실행 결과를 함수 밖으로 넘길 때 사용
        - 넘겨줄 값, 변수, 식 지정
- 변수 적용 범위
    - 스코프 : 변수를 선언하고 사용할 때 변수가 적용되는 범위
    - 지역 변수
        - 함수 안에서 선언하고 사용
        - var 예약어를 붙여야 함 ⇒ var 없으면 함수 안에서 선언했어도 전역 변수 취급
    - 전역 변수
        - 스크립트 전체에서 사용하는 변수
        - 변수를 한번 선언하고 나면 그 값을 계속 유지
    - 블록 변수
        - 선언한 블록(중괄호 { } )에서만 유효
        - let 예약어로 선언
    - 익명 함수
        - 이름이 없는 함수 ⇒ 함수 자체가 식
        - 변수에 할당 / 다른 함수의 매개 변수로 사용 가능
    - 즉시 실행 함수
        - 함수를 정의함과 동시에 실행
        - 변수에 할당 / 함수에서 반환하는 값 변수에 할당 가능
    - 화살표 표기법
        - function 예약어를 사용하지 않고 ⇒ 로 표현
            
            ```jsx
            let hi = () => "안녕하세요?"
            
            let greet = name => `${name}님, 안녕하세요?`
            
            let add = (a, b) => a + b;
            ```
            

### 이벤트

- 웹 문서 영역 안에서 이루어지는 동작
- 마우스 이벤트
    
    | 속성 | 설명 |
    | --- | --- |
    | click | HTML 요소를 마우스로 눌렀을 때 |
    | dbclick | HTML 요소를 마우스로 더블클릭 |
    | mousedown | 사용자가 요소 위에서 마우스 버튼을 누르는 동안 |
    | mousemove | 요소 위에서 마우스 포인터를 움직일 때 |
    | mouseover | 포인터가 요소 위로 옮겨질 때 |
    | mouseout | 마우스 포인터가 요소를 벗어날 때 |
    | mouseup | 누르고 있던 마우스 버튼에서 손을 뗄 때 |

- 키보드 이벤트
    
    | 속성 | 설명 |
    | --- | --- |
    | keypress | 키를 눌렀을 때 |
    | keydown | 키를 누르는 동안 |
    | keyup | 키에서 손을 뗄 때 |

- 문서 로딩 이벤트
    
    | 속성 | 설명 |
    | --- | --- |
    | abort | 웹 문서가 완전히 로딩되기 전에 불러오기를 멈췄을 때 |
    | error | 문서가 정확히 로딩되지 않았을 때 |
    | load | 문서 로딩이 끝나면 이벤트 발생 |
    | resize | 문서 화면 크기가 바뀌었을 때 |
    | scroll | 문서 화면이 스크롤되었을 때 |
    | unload | 문서를 벗어날 때 |

- 폼 이벤트
    
    | 속성 | 설명 |
    | --- | --- |
    | blur | 폼 요소에 포커스를 잃었을 때 |
    | change | 목록이나 체크 상태 등이 변경되었을 때. `<input>`, `<select>`, `<textarea>` |
    | focus | 폼 요소에 포커스가 놓였을 때. `<label>`, `<select>`, `<textarea>`, `<button>` |
    | reset | 폼이 다시 시작되었을 때 |
    | submit | submit 버튼을 눌렀을 때 |

- 이벤트 처리기(이벤트 핸들러)
    - 이벤트와 이벤트 처리 함수를 연결해 주는 것
    - 이벤트 이름 앞에 on을 붙여서 사용