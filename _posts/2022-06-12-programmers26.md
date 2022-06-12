---
title: "프로그래머스 Lv.1 나누어 떨어지는 숫자 배열"
excerpt: "코딩테스트 프로그래머스 연습문제 나누어 떨어지는 숫자 배열"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 문자열 내림차순으로 배치하기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-12
last_modified_at: 2022-06-12
---

#### 문제
![26](/assets/images/26.png)

#### 해결과정
1. arr의 각 숫자가 divisor로 나누어지는지 확인
2. 나누어 떨어지면 answer에 넣기
3. 오름차순 정렬
4. answer의 길이가 0이면 -1 출력

```javascript
function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i])
        }
    }
    answer.sort((a, b) => a - b)
    if(answer.length === 0){
        answer = [-1]
    }
    return answer;
}
```
