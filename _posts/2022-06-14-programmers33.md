---
title: "프로그래머스 Lv.2 최댓값과 최솟값"
excerpt: "코딩테스트 프로그래머스 연습문제 최댓값과 최솟값"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 최댓값과 최솟값, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-14
last_modified_at: 2022-06-14
---

#### 문제
![33](/assets/images/33.png)

#### 해결과정
1. 문자열을 배열로 변환
2. 배열의 최대값, 최소값 구하기
3. 빈 공간으로 분리해서 출력

:pushpin: 
* 자바스크립트에서는 문자도 max, min 가능

```javascript
function solution(s) {
    var answer = '';
    let newArr = s.split(' ')
    let big = Math.max(...newArr)
    let small = Math.min(...newArr)
    answer = small + ' ' + big
    return answer;
}
```