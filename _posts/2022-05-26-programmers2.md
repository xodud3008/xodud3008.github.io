---
title: "프로그래머스 약수의 합"
excerpt: "코딩테스트 프로그래머스 연습문제 약수의 합"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 약수의 합, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-05-26
last_modified_at: 2022-05-26
---

#### 해결과정
1. 약수를 구하고 약수이면 answer에 더하기

비교적 쉬운 문제였다. 다른 사람들의 풀이를 보니 정말 다양한 방법이 있었다. 코드를 좀더 간결하고 쉽게 쓸 수 있도록 노력하기!!

```javascript
function solution(n) {
    var answer = 0;
    for(let i = 1; i<=n; i++){
        if(n % i === 0){
            answer += i
        }
    }
    return answer;
}
```
