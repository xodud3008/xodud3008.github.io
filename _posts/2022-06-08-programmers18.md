---
title: "프로그래머스 Lv.1 문자열을 정수로 바꾸기"
excerpt: "코딩테스트 프로그래머스 연습문제 문자열을 정수로 바꾸기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 문자열을 정수로 바꾸기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-08
last_modified_at: 2022-06-08
---

#### 문제
![18](/assets/images/18.png)

#### 해결과정
:pushpin: 문자를 정수로 변환하는 방법
"12345" => 12345
1. 문자에 `* 1` or `/ 1`
2. parseInt("12345")
3. Number("12345")

```javascript
function solution(s) {
    var answer = 0;
    answer = s * 1
    return answer;
}
```
