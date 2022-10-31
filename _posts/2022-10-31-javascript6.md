---
title: "Javascript 6일차"
excerpt: "자바스크립트 웹 문서 다루는 방법, DOM"

categories:
  - Javascript
tags:
  - [Javascript, Javascript 개념, Javascript DOM, 웹 문서 다루는 방법, DOM]

toc: true
toc_sticky: true
 
dat8: 2022-10-31
last_modified_at: 2022-10-31
---

# 웹 문서 다루는 방법, DOM

### 문서 객체 모델(DOM)

- 웹 문서의 모든 요소를 자바스크립트를 이용하여 조작할 수 있도록 객체를 사용해 문서를 해석하는 방법
- DOM 트리
    - DOM 구조는 나무처럼 생김
    - 웹 문서의 요소를 부모와 자식 요소로 구분
    - 가지와 노드로 표현
        - 노드 : 웹 문서에 있는 요소나 속성
        - 가지 : 노드 간 연결 관계
    - 맨 위에 있는 요소(html) : 루트 노드
- DOM 요소에 접근하는 방법
    - 선택자 사용(CSS 선택자와 같음)
    - getElementBy : 요소 노드까지만 접근. 선택자 표시(#, .) 안함
        - getElementById() : id로 접근
        - getElementsByClassName() : class 값으로 접근. 해당하는 모든 클래스에 접근
        - getElementsByTagName() : 태그 이름으로 접근. 해당하는 모든 태그에 접근
    - querySelector(), querySelectorAll() : 요소 노드 뿐만 아니라 텍스트, 속성 노드까지 접근 가능. 선택자 표시
        - 다양한 방법으로 접근(id, class, 태그 등)
    - getAttribute(), setAttribute() : HTML 태그 속성 가져오거나 수정
        - 이미지 요소에 접근할 때
            - querySelector()로 이미지 요소에 접근 ⇒ getAttribute()로 속성에 접근 ⇒ setAttribute()로 속성 값 수정
- DOM에서 이벤트 처리
    - DOM 요소에 이벤트 처리기 연결
        - 이벤트가 발생한 웹 요소를 가져온 후 이벤트 처리기 연결하는 방법
        - 이벤트 처리기를 자바스크립트에서 실행
        - 하나의 요소에 하나의 이벤트 처리기만 사용할 수 있음
    - addEventListener() 함수
        - 이벤트가 발생한 요소에 이벤트 처리기를 연결하는 함수
        - 특정 요소, Document 객체, window 객체 어디서든 사용 가능
        - 여러 이벤트 동시에 처리 가능
- 웹 요소 스타일 가져와 수정
    
    ```jsx
    // id가 heading인 요소의 글자색 파란색으로 변경
    document.querySelector("#heading").style.color = "blue"
    
    // class가 check인 모든 요소의 글자색 파란색으로 변경
    document.querySelectorAll(".check").style.color = "blue"
    ```
    
- DOM에 요소 추가
    - 새로운 노드 추가하는 방법
        - `<p class=”accent”>주문이 완료되었습니다</p>` 추가하는 방법
            
            ```jsx
            // 1. 요소 노드 생성
            var newP = document.createElement("p")
            
            // 2. 텍스트 노드 생성
            var newText = document.createTextNode("주문이 완료되었습니다.")
            
            // 3. 자식 노드로 추가
            newP.appendChild(newText)
            
            // 4. newP 노드 body 노드의 자식 노드로 추가
            document.body.appendChild(newP)
            
            // 5. 속성 노드 생성
            var attr = document.createAttribute("class")
            attr.value = "accent"
            
            // 6. 속성 노드 연결
            newP.setAttributeNode(attr)
            ```
            
            | 함수 | 설명 |
            | --- | --- |
            | createElement() | 요소 노드 생성 |
            | createTextNode() | 텍스트 노드 생성 |
            | appendChild() | 요소 노드에 자식 노드로 추가 |
            | createAttribute() | 요소에 속성이 있으면 속성 노드 생성 |
            | setAttributeNode() | 속성 노드를 요소 노드에 연결 |
            | appendChild() | 새로 만든 요소를 부모 노드에 추가 |
            
- 추가한 노드 순서 바꾸거나 삭제
    - 노드 리스트
        - querySelectorAll() 함수로 여러 개의 노드를 한번에 가져와서 한꺼번에 저장되는 것(배열 형식)
    - 원하는 노드 접근
        - hasChildNodes() 함수
            - 자식 노드가 있는지 확인하는 함수
            - true / false 값 반환
        - childNodes 속성
            - 현재 노드의 자식 노드에 접근
            - 요소 노드 뿐만 아니라 태그와 태그 사이의 줄바꿈도 빈 텍스트 노드인 자식 노드로 인식
            - 요소 노드, 텍스트 노드, 주석 노드까지 모두 접근할 수 있음
        - children 속성
            - 요소 노드에만 접근할 때 사용
        - insertBefore() / insertAfter()
            - 원하는 위치에 노드 삽입
        - removeChild()
            - 부모 노드에서 자식 노드를 삭제하는 함수
            - 괄호 안에 삭제하려는 자식 노드
            - 노드는 스스로 자신을 삭제할 수 없기 때문에 부모 노드에 접근한 후 부모 노드에서 삭제해야 함
                - parentNode 속성 ⇒ 현재 노드의 부모 요소 노드 반환