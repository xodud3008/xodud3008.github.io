---
title: "Javascript 5일차"
excerpt: "자바스크립트 객체"

categories:
  - Javascript
tags:
  - [Javascript, Javascript 개념, Javascript 객채, 객체]

toc: true
toc_sticky: true
 
dat8: 2022-10-31
last_modified_at: 2022-10-31
---

# 객체

### 객체

- 하나의 변수에 여러 정보를 저장하기 위해 사용
- 내장 객체
    - 자바스크립트 안에 미리 객체로 정의되어 있음
    - Number, Boolean, Array, Math 등
- 문서 객체 모델(DOM)
    - 객체를 사용해 웹 문서를 관리하는 방식
- 브라우저 객체 모델
    - 웹 브라우저의 주소 표시줄이나 창 크기 등 웹 브라우저 정보를 객체로 다루는 것
    - Navigator, History, Location
- 사용자 정의 객체
    - 사용자가 필요할 때마다 정의해서 사용
- 객체의 속성
    - 객체에서 값을 담고 있는 정보
    - 속성값을 가져올 때 객체 이름 뒤에 마침표(.)를 찍고 뒤에 속성 이름
- 메서드
    - 객체가 어떻게 동작할지 선언해 놓은 함수
    - 객체 이름 뒤에 마침표를 사용해 메서드 실행
- 프로토타입 / 인스턴스
    - 기본 틀(프로토타입)을 사용해서 같은 모양의 객체(인스턴스)들을 생성
    - new 예약어를 사용해서 객체 인스턴스 생성
- 사용자 정의 객체
    - 리터럴 표기법
        
        ```jsx
        var book = {
        	title: "자바스크립트",
        	author: "Kim",
        	pages: 500,
        	price: 15,000,
        	info: function() {
        		alert(this.title + "책의 분량은 " + this.pages + "쪽입니다.")
        	}
        }
        ```
        
    - 속성 값을 가져오려면 마침표 사용
    - 생성자 함수 사용
        
        ```jsx
        function Book(author, pages, price, title) {
        	this.author = author;
        	this.pages = pages;
        	this.price = prices;
        	this.title = title;
        }
        ```
        
### Array 객체

- 여러 개의 항목을 하나의 변수에 저장할 때 배열 사용
- 배열 선언 방법
    
    ```jsx
    var myArray = new Array(); // Array 객체의 인스턴스 생성, 초기값 없는 배열
    
    var numbers = ["one", "two", "three", "four"]; // 리터럴 사용한 초기값 있는 배열
    var numbers = new Array("one", "two", "three", "four"); // Array 객체를 사용한 초기값 있는 배열
    ```
    
- Array 객체 함수
    - concat()
        - 둘 이상의 배열 연결하여 새로운 배열 생성
        - 기존 배열에 영향을 주지 않음
    - join()
        - 배열 요소를 연결하는 함수
        - 각 요소를 연결할 때 구분 기호 지정 가능. 기본값(,)
    - push() / unshift()
        - 배열의 맨 끝 / 맨 앞에 요소 추가
    - pop() / shift()
        - 배열의 맨 끝 / 맨 앞에 요소 추출
        - 추출된 값 출력
    - splice()
        - 원하는 위치에 요소 추가 / 삭제
        - 인수 1개 ⇒ splice(2) : 인수가 가리키는 인덱스 요소부터 배열의 끝 요소까지 삭제
        - 인수 2개 ⇒ splice(2, 1) : 인덱스 값이 2인 요소부터 1개 요소 삭제
        - 인수 3개 이상 ⇒ splice(2, 1, “js”) : 인덱스 값이 2인 요소부터 1개 요소 삭제 후 그 자리에 “js” 삽입
            
                                   ⇒ splice(2, 0, “js”) : 인덱스 값이 2인 요소에 “js” 삽입(삭제 없음)
            
    - slice()
        - 원하는 위치의 요소들 추출
        - 인수 1개 ⇒ slice(2) : 인수가 가리키는 인덱스 요소부터 배열의 끝 요소까지 추출
        - 인수 2개 ⇒ slice(2, 5) : 첫번째 인덱스 부터 두번째 인덱스 바로 앞까지 추출
        - 기존 배열에 영향을 주지 않음
    - 그 밖의 Array 객체 함수
        
        | 함수 | 설명 |
        | --- | --- |
        | every | 배열의 모든 요소가 주어진 함수에 대해 true면 true, 아니면 false 반환 |
        | filter | 배열의 모든 요소 중 주어진 필터링 함수에 대해 true인 요소만 골라 새로운 배열 생성 |
        | forEach | 배열의 모든 요소에 대해 주어진 함수 실행 |
        | indexOf | 주어진 값과 일치하는 값이 있는 배열 요소의 첫 번째 인덱스 찾음 |
        | reverse | 배열을 역순으로 배치 |
        | sort | 배열 정렬 |
        | toString | 배열에서 지정한 부분을 문자열로 반환. 각 요소 쉼표로 구분 |