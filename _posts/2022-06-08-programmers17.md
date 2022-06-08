---
title: "프로그래머스 Lv.1 자연수 뒤집어 배열로 만들기"
excerpt: "코딩테스트 프로그래머스 연습문제 자연수 뒤집어 배열로 만들기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 자연수 뒤집어 배열로 만들기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-06-08
last_modified_at: 2022-06-08
---

#### 문제
![17](/assets/images/17.png)

#### 해결과정
1. 자연수 n을 배열로 변환
2. reverse()로 배열 뒤집기
3. map() 함수로 문자에 *1 해서 숫자로 변환 후 출력

```javascript
function solution(n) {
    var answer = [];
    newArr = (n +'').split('')
    newArr.reverse()
    answer = newArr.map(a => a*1)
    return answer;
}
```
