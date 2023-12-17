---
title: "프로그래머스 Lv.1 나머지가 1이 되는 수 찾기"
excerpt: "코딩테스트 프로그래머스 월간 코드 챌린지 시즌3 나머지가 1이 되는 수 찾기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 월간 코드 챌린지 시즌3, 나머지가 1이 되는 수 찾기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-11
last_modified_at: 2022-06-11
---

#### 문제
![23](/assets/images/23.png)

#### 해결과정
1. n을 i로 나누어 가며 나머지가 1인 수를 찾는다.
2. 최소값을 찾기 위해 `break`를 넣어서 조건에 만족하면 멈추기

```javascript
function solution(n) {
    var answer = 0;
    for(let i = 1; i<n; i++){
        if(n % i === 1){
            answer = i
            break;
        }
    }
    return answer;
}
```
