---
title: "프로그래머스 Lv.1 짝수와 홀수"
excerpt: "코딩테스트 프로그래머스 Lv.1 연습문제 짝수와 홀수"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 짝수와 홀수, programmers, codingtest, 코딩테스트 연습, 프로그래머스 짝수와 홀수, 프로그래머스 짝수와 홀수 자바스크립트]

toc: true
toc_sticky: true
 
date: 2022-05-27
last_modified_at: 2022-05-27
---

#### 문제
![5](/assets/images/5.png)

#### 해결과정
1. 2로 나눈 나머지가 0이면 짝수 0이 아니면 홀수
2. 삼항 연산자로 코드 길이를 줄여보자

```javascript
function solution(num) {
    var answer = '';
    num % 2 === 0 ? answer = 'Even' : answer = 'Odd'
    return answer;
}
```
