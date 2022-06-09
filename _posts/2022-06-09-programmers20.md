---
title: "프로그래머스 Lv.1 하샤드 수"
excerpt: "코딩테스트 프로그래머스 연습문제 하샤드 수"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 하샤드 수, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-09
last_modified_at: 2022-06-09
---

#### 문제
![20](/assets/images/20.png)

#### 해결과정
1. 숫자를 배열로 변환해여 배열의 합 구하기
2. x를 배열의 합으로 나누어 떨어지면 true, 아니면 false

```javascript
function solution(x) {
    var answer = true;
    let newArr = (x+'').split('')
    let num = newArr.reduce((a, b) => a*1 + b*1)
    if(x % num === 0){
        answer = true
    } else {
        answer = false
    }
    return answer;
}
```
