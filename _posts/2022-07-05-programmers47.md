---
title: "프로그래머스 Lv.2 N개의 최소공배수"
excerpt: "코딩테스트 프로그래머스 연습문제 N개의 최소공배수"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, N개의 최소공배수, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-07-05
last_modified_at: 2022-07-05
---

#### 문제
![47](/assets/images/47.png)

#### 해결과정
  1. 유클리드 호제법 정의
  2. answer를 1로 초기화 후 answer와 arr을 계산해 나간다.

```javascript
function lcm(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return lcm(num1, num2);
}

function solution(arr) {
    var answer = 1;
    arr.sort((a, b) => a - b)
    for(let i = 0; i<arr.length ;i++){
        answer = lcm(arr[i], answer)
    }
    
    return answer;
}
```