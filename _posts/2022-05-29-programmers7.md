---
title: "프로그래머스 Lv.1 정수 제곱근 판별"
excerpt: "코딩테스트 프로그래머스 Lv.1 연습문제 음양 더하기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 정수 제곱근 판별, programmers, codingtest, 코딩테스트 연습, 프로그래머스 정수 제곱근 판별, 프로그래머스 정수 제곱근 판별 자바스크립트]

toc: true
toc_sticky: true
 
date: 2022-05-29
last_modified_at: 2022-05-29
---

#### 문제
![7](/assets/images/7.png)

#### 해결과정
1. n의 제곱근을 구한 뒤 1로 나눠 나머지가 0이면 정수 제곱근

```javascript
function solution(n) {
    var answer = 0;
    let number = Math.sqrt(n)
    number % 1 === 0 ? answer = (number + 1) * (number + 1) : answer = -1
    return answer;
}
```
