---
title: "프로그래머스 Lv.1 정수 내림차순으로 배치하기"
excerpt: "코딩테스트 프로그래머스 연습문제 정수 내림차순으로 배치하기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 정수 내림차순으로 배치하기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-06-07
last_modified_at: 2022-06-07
---

#### 문제
![16](/assets/images/16.png)

#### 해결과정
1. 정수 n을 배열로 변환
2. 숫자 한자리씩만 문자로 변환되서 정렬하므로 문자 그대로 정렬해도 됨
  * 자바스크립트 sort() 함수는 기본적으로 문자열 정렬 함수
3. reduce() 함수로 문자를 다 더해서 하나의 문자로 만든 뒤 *1을 해서 숫자로 만든다 

```javascript
function solution(n) {
    var answer = 0;
    let arr = (n + '').split('')
    arr.sort((a, b) => b - a)
    answer = arr.reduce((a, b) => a + b) * 1
    return answer;
}
```
