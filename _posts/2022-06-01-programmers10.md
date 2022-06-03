---
title: "프로그래머스 Lv.1 수박수박수박수박수박수"
excerpt: "코딩테스트 프로그래머스 Lv.1 연습문제 수박수박수박수박수박수"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 수박수박수박수박수박수?, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-06-01
last_modified_at: 2022-06-01
---

#### 문제
![10](/assets/images/10.png)

#### 해결과정
1. n을 2로 나눠서 나머지와 목을 구한다
2. 목 만큼 `수박`을 반복
3. 나머지가 1이면 마지막에 `수`를 붙인다

```javascript
function solution(n) {
    var answer = '';
    let a = n % 2
    let b = Math.floor(n / 2)
    answer = '수박'.repeat(b)
    if(a !== 0){
        answer += '수'
    }
    return answer;
}
```
