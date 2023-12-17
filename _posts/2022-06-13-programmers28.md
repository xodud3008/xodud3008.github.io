---
title: "프로그래머스 Lv.1 행렬의 덧셈"
excerpt: "코딩테스트 프로그래머스 연습문제 행렬의 덧셈"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 행렬의 덧셈, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-13
last_modified_at: 2022-06-13
---

#### 문제
![28](/assets/images/28.png)

#### 해결과정
1. 이중 for문으로 해당 행, 열의 인덱스를 지정해서 더해준다.

```javascript
function solution(arr1, arr2) {
    var answer = [[]];
    for(let i = 0; i<arr1.length; i++){
        answer[i] = []
        for(let j = 0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    return answer;
}
```
:pushpin: 이중 맵 풀이
```javascript
A.map((a, i) => a.map((b, j) => b + B[i][j]))
```
