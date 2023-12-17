---
title: "프로그래머스 Lv.1 문자열 다루기 기본"
excerpt: "코딩테스트 프로그래머스 연습문제 문자열 다루기 기본"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 문자열 다루기 기본, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-11
last_modified_at: 2022-06-11
---

#### 문제
![22](/assets/images/22.png)

#### 해결과정
1. 문자를 숫자로 변경하는 Number()로 문자 숫자로 변경
2. 길이가 4 or 6이고 숫자인 경우 true, 아니면 false 출력

:pushpin: 자바스크립트에서 `e`
  * 자바스크립트에서 `e`는 지수로 쓰인다. `e`를 처리해주지 않으면 11번 케이스에서 통과 안됨
  * 1개 통과가 안되서 한참을 헤맨...

```javascript
function solution(s) {
    var answer = true;
    if(s.includes('e')) return false
    if((s.length === 4 || s.length === 6) && Number(s)){
        answer = true
    } else {
        answer = false
    }
    return answer;
}
```
