---
title: "프로그래머스 Lv.1 두 정수 사이의 합"
excerpt: "코딩테스트 프로그래머스 연습문제 두 정수 사이의 합"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 두 정수 사이의 합, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-12
last_modified_at: 2022-06-12
---

#### 문제
![27](/assets/images/27.png)

#### 해결과정
1. a, b의 최소값, 최대값을 구해서 두 수 사이 값을 모두 더한다

```javascript
function solution(a, b) {
    var answer = 0;
    for(let i = Math.min(a, b); i<=Math.max(a, b); i++){
        answer += i
    }
    return answer;
}
```
