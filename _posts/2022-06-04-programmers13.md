---
title: "프로그래머스 Lv.1 제일 작은 수 제거하기"
excerpt: "코딩테스트 프로그래머스 Lv.1 연습문제 제일 작은 수 제거하기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 제일 작은 수 제거하기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-06-04
last_modified_at: 2022-06-04
---

#### 문제
![13](/assets/images/13.png)

#### 해결과정
1. 배열의 길이가 1이면 -1 출력
2. 배열의 길이가 1 이상이면 배열의 최소값 구하기
3. 필터 함수를 사용하여 최소값을 제외한 값 출력

```javascript
function solution(arr) {
    var answer = [];
    if(arr.length === 1){
        answer = [-1]
    } else {
        let num = Math.min(...arr)
        answer = arr.filter((element) => element !== num);
    }
    return answer;
}
```
