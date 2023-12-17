---
title: "프로그래머스 Lv.2 최솟값 만들기"
excerpt: "코딩테스트 프로그래머스 연습문제 최솟값 만들기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 최솟값 만들기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-14
last_modified_at: 2022-06-14
---

#### 문제
![34](/assets/images/34.png)

#### 해결과정
:pushpin: 
  * A 배열의 최소값과 B 배열의 최대값을 곱했을 때 최소값을 만들 수 있다.
  * 테스트 케이스가 통과 안되면 배열의 순서 확인

1. A 배열 오름차순 정렬
2. B 배열 내림차순 정렬
3. 같은 인덱스의 숫자 곱해서 누적

```javascript
function solution(A,B){
    var answer = 0;
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    for(let i = 0; i<A.length; i++){
        answer += A[i] * B[i]
    }
    return answer;
}
```