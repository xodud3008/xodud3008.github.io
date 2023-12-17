---
title: "프로그래머스 Lv.1 핸드폰 번호 가리기"
excerpt: "코딩테스트 프로그래머스 Lv.1 연습문제 핸드폰 번호 가리기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 핸드폰 번호 가리기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-05-31
last_modified_at: 2022-05-31
---

#### 문제
![9](/assets/images/9.png)

#### 해결과정
1. 번호의 마지막 4자리 만큼 자른 뒤, 전체 길이에서 4를 뺀 만큼 *를 반복

```javascript
function solution(phone_number) {
  var answer = '';
  let num = phone_number.slice(-4)
  let char = '*'.repeat(phone_number.length - 4)
  answer = char + num
  return answer;
}
```
