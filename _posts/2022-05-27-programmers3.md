---
title: "프로그래머스 Lv.1 평균 구하기"
excerpt: "코딩테스트 프로그래머스 Lv.1 연습문제 평균 구하기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 평균 구하기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-05-27
last_modified_at: 2022-05-27
---

#### 문제
![3](/assets/images/3.png)

#### 해결과정
1. 배열의 합을 구하고, 배열의 길이만큼 나눠준다.

:pushpin: 배열의 합을 구하는 reduce 함수
```javascript
  let result = arr.reduce((a, b) => {
        return answer = a + b
    })
```

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
