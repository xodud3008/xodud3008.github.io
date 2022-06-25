---
title: "프로그래머스 Lv.1 2016년"
excerpt: "코딩테스트 프로그래머스 연습문제 2016년"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 2016년, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-25
last_modified_at: 2022-06-25
---

#### 문제
![44](/assets/images/44.png)

#### 해결과정
  1. javascript의 날짜 관련 함수 사용
  2. getDay()를 사용하면 요일이 숫자로 나온다.
  3. 해당 숫자의 요일을 출력

:pushpin: javascript 날짜 함수
  * new Date() : 현재 날짜 출력
  * getFullYear() : 년도 출력
  * getMonth() : 월 출력
  * getDate() : 날짜 출력
  * getDay() : 요일이 날짜로 출력(일요일부터 0) [0,1,2,3,4,5,6]

```javascript
function solution(a, b) {
    var answer = '';
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let date = new Date(`2016-${a}-${b}`)
    let num = date.getDay()
    answer = day[num]
    return answer;
}
```