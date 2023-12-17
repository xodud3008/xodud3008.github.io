---
title: "프로그래머스 Lv.1 최대공약수와 최소공배수"
excerpt: "코딩테스트 프로그래머스 Lv.1 연습문제 최대공약수와 최소공배수"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 최대공약수, 최소공배수, 유클리드 호제법, programmers, codingtest, 코딩테스트 연습, 프로그래머스 최대공약수와 최소공배수, 프로그래머스 최대공약수와 최소공배수 자바스크립트]

toc: true
toc_sticky: true
 
date: 2022-05-27
last_modified_at: 2022-05-27
---

#### 문제
![4](/assets/images/4.png)

#### 해결과정
1. 유클리도 호제법으로 최대공약수, 최소공배수를 구한다.
2. 문제 요구사항에 맞게 최대공약수, 최소공배수 순으로 출력

:pushpin: 유클리드 호제법
```javascript
  function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}
```

```javascript
function solution(n, m) {
    var answer = [];
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    answer = [gcd(n,m), lcm(n,m)];
    return answer;
}
```
