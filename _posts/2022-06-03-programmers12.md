---
title: "프로그래머스 Lv.1 x만큼 간격이 있는 n개의 숫자"
excerpt: "코딩테스트 프로그래머스 Lv.1 연습문제 x만큼 간격이 있는 n개의 숫자"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, x만큼 간격이 있는 n개의 숫자, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-06-03
last_modified_at: 2022-06-03
---

#### 문제
![12](/assets/images/12.png)

#### 해결과정
1. 1부터 시작하는 반복문으로 x를 i씩 곱해서 배열에 넣는다.

```javascript
function solution(x, n) {
    var answer = [];
    for(let i = 1; i<=n; i++){
        if(answer.length < n){
            answer.push(x*i)
        }
    }
    return answer;
}
```
