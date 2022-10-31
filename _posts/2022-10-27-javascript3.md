---
title: "Javascript 3일차"
excerpt: "자바스크립트 제어문"

categories:
  - Javascript
tags:
  - [Javascript, Javascript 개념, Javascript 제어문]

toc: true
toc_sticky: true
 
dat8: 2022-10-27
last_modified_at: 2022-10-27
---

# 제어문

### 제어문

- if문
    - 소괄호 안의 조건의 참이면 중괄호 안의 소스 실행, false면 무시
- if ~ else
    - 조건을 확인해서 맞을 때와 맞지 않을 때의 명령 따로 설정
- 조건 연산자
    - ?와 :
    - 조건이 하나 이고 true, false 일 때 실행할 명령어도 하나일 때 사용
    - 조건 ? true일 때 명령 : false일 때 명령
- truthy / falsy
    - falsy 값 : **`0`, `“”`, `NaN`, `undefiend`, `Null`, `false`**
- switch 문
    - 한번에 여러 개의 조건을 확인할 수 있음
        
        ```jsx
        switch(session) {
        	case "1" : document.write("일번");
        		break;
        	case "2" : document.write("이번");
        		break;
        	case "3" : document.write("삼번");
        		break;
        	default : document.write("영번");
        ```
        
- 반복문
    - for문
        - 동작을 여러번 실행할 때 사용
        - 중첩 for 문
            - 코드를 간결하게 줄일 수 있음
    - while
        - 괄호 안의 조건이 만족할 때 실행
    - do ~ while
        - 조건이 맨 뒤에 붙음
        - 일단 한번 실행 시킨 후 조건을 확인 ⇒ false라고 해도 한번은 실행됨
    - break
        - 특정 시점에서 반복문을 중단
    - continue
        - 반복문의 시작 지점으로 돌아가고 싶을 때