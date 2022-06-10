---
title: "프로그래머스 Lv.1 서울에서 김서방 찾기"
excerpt: "코딩테스트 프로그래머스 연습문제 서울에서 김서방 찾기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 서울에서 김서방 찾기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-10
last_modified_at: 2022-06-10
---

#### 문제
![21](/assets/images/21.png)

#### 해결과정
1. seoul 배열에서 Kim의 인덱스를 구할수 있는 indexOf() 함수 사용
2. 템플릿 리터럴 방식 사용

:pushpin: indexOf()
  * 배열의 인덱스를 구하는 자바스크립트 함수

```javascript
function solution(seoul) {
    var answer = '';
    answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`
    return answer;
}
```
