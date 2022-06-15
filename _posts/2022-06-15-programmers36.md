---
title: "프로그래머스 Lv.1 없는 같은 숫자는 싫어"
excerpt: "코딩테스트 프로그래머스 연습문제 없는 같은 숫자는 싫어"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 없는 같은 숫자는 싫어, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-15
last_modified_at: 2022-06-15
---

#### 문제
![36](/assets/images/36.png)

#### 해결과정
1. 숫자를 비교하여 다르면 answer에 넣기

```javascript
function solution(arr)
{
    var answer = [];

    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            answer.push(arr[i])  
        } 
    }
    
    return answer;
}
```