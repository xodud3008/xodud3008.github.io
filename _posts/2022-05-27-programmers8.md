---
title: "프로그래머스 Lv.1 내적"
excerpt: "코딩테스트 프로그래머스 Lv.1 월간 코드 챌린지 시즌1 내적"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 내적, 월간 코드 챌린지 시즌1, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-05-30
last_modified_at: 2022-05-30
---

#### 문제
![8](/assets/images/8.png)

#### 해결과정
1. 배열의 길이만큼 같은 인덱스의 수를 곱해서 누적해 나간다.

```javascript
function solution(a, b) {
  var answer = 0;
  for(let i = 0; i<a.length; i++){
      answer += (a[i]*b[i])
  }
  return answer;
}
```
