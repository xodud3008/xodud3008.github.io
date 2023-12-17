---
title: "프로그래머스 Lv.1 3진법 뒤집기"
excerpt: "코딩테스트 프로그래머스 월간 코드 챌린지 시즌1 3진법 뒤집기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 월간 코드 챌린지 시즌1, 3진법 뒤집기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-27
last_modified_at: 2022-06-27
---

#### 문제
![45](/assets/images/45.png)

#### 해결과정
  1. Number.toString()을 사용해서 3진법으로 변환
    * 괄호 안에 넣은 숫자의 진법으로 변환한 문자 반환, 생략 시 10진법
  2. 뒤집기 위해 배열로 바꾸고 reverse()함수 사용
  3. 다시 10진법으로 변환하기 위해 parseInt()사용
    * parseInt(string, radix) string을 radix로 분석한 정수 반환

:pushpin: toString(), parseInt()로 진법 변환이 가능하다

```javascript
function solution(n) {
    var answer = 0;
    answer = parseInt(n.toString(3).split('').reverse().join(''), 3)
    return answer;
}
```