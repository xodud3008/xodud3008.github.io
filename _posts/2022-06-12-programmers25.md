---
title: "프로그래머스 Lv.1 문자열 내림차순으로 배치하기"
excerpt: "코딩테스트 프로그래머스 연습문제 문자열 내림차순으로 배치하기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 문자열 내림차순으로 배치하기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-12
last_modified_at: 2022-06-12
---

#### 문제
![25](/assets/images/25.png)

#### 해결과정
1. 문자열을 배열로 변환
2. 문자열을 `sort()`로 정렬한 뒤, `reverse()`로 역순 배치
  * 소문자가 먼저 정렬되게 하기 위함
3. reduce로 배열을 합쳐서 다시 문자열로 변환

```javascript
function solution(s) {
    var answer = '';
    newArr = s.split('')
    answer = newArr.sort().reverse().reduce((a, b) => a + b)
    return answer;
}
```
