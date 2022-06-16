---
title: "프로그래머스 Lv.1 예산"
excerpt: "코딩테스트 프로그래머스 Summer/Winter Coding(~2018) 예산"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, Summer/Winter Coding(~2018), 예산, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-16
last_modified_at: 2022-06-16
---

#### 문제
![37](/assets/images/37.png)

#### 해결과정
1. d를 오름차순 정렬
2. budget에서 d가 0보다 크거나 같을때까지 계속 빼 나간다

```javascript
function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b)
    for(let i = 0; i<d.length; i++){
        if(budget - d[i] >= 0){
            answer++
            budget -= d[i]
        }
    }
    return answer;
}
```