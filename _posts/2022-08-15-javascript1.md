---
title: "Javascript 1일차"
excerpt: "자바스크립트 기본 개념"

categories:
  - Javascript
tags:
  - [Javascript, Javascript 개념, Javascript 구조, 웹 프로그래밍]

toc: true
toc_sticky: true
 
dat8: 2022-08-15
last_modified_at: 2022-08-15
---

# Javascript

## 웹 프로그래밍

### 웹 프로그래밍이란?

- 웹에 관련된 프로그램을 만드는 것
- 서버와 클라이언트 간 정보를 주고 받으며 사용자에게 내용을 보여줌
    - 백엔드 : 서버에서 사용자의 요청을 처리하거나 데이터를 관리
    - 프론트엔드 : 서버에서 받아 온 정보를 웹 브라우저에 어떻게 보여줄 것인지 프로그래밍
- 가장 많이 쓰이는 **자바스크립트**

### 자바스크립트로 할 수 있는 것

- 자바스크립트는 원래 웹의 필수 요소가 아닌 움직이는 효과만을 주는 언어였음 ⇒ 서버, 웹 프로그램 개발 가능
- 동적 웹 사이트 개발
- 웹 브라우저에서 실행되는 프로그램 개발
    - ex) 웹 사이트에서 버스 정보 검색 프로그램
- 서버 구성 / 서버용 프로그램
    - Node.js

### 자바스크립트 특징

- 모든 웹 브라우저에서 작동
    - 초창기 시절부터 사용한 언어
    - 최신 문법은 바로 적용할 수 없는 경우가 있음
- 웹 브라우저에서 실행 결과 즉시 확인 가능
    - 코드 실행 위해 별도의 프로그램 필요하지 않음
- 풀스택 웹 개발 / 다양한 용도의 프로그램 개발
    - 프론트 / 백엔드 개발, 사물 인터넷 등
- 다양한 공개 API 사용
- 다양한 라이브러리와 프레임워크 사용

### 자바스크립트 소스 작성

- HTML 문서에 자바스크립트 작성하려면 **</body>** 위에 <script> 태그 삽입
    - 웹 페이지의 처리에 따라 모든 화면이 렌더링 되고나서 스크립트가 실행 되므로 갱신되는 화면의 속도가 빠름
    - 외부 스크립트 삽입 가능

### 자바스크립트 입출력

- 사용자 입력값 받기  - prompt()
    - 괄호 안에 입력한 문구 같이 출력됨
- 알림 창으로 출력 - alert()
- 웹 브라우저 화면에 출력 - document.write()
    - write() 함수는 document 객체에 포함되어 있음 ⇒ **document.write()**
- 콘솔에 출력 - console.log()

### 자바스크립트 소스 작성 시 지켜야 할 규칙

- 대소문자 구별하여 소스 작성
    - sum, Sum, SUM 모두 다르게 인식
- 읽기 쉽게 들여쓰기
- 세미콜론(;)으로 문장 끝 표시
- 소스에 메모 하려면 주석 사용
- 식별자는 정해진 규칙을 지켜 작성
    - 첫 글자는 영문자, 밑줄(_), 달러 기호($)
- 예약어는 식별자로 사용할 수 없음

    |arguments|breake|case|continue|default|
    |---|---|---|---|---|
    |do|else|false|for|function|
    |if|null|return|super|switch|
    |this|true|try|typeof|var|
    |void|while|with|-|-|