---
title: "프로그래머스 Lv.1 문자열 내 마음대로 정렬하기"
excerpt: "코딩테스트 프로그래머스 연습문제 문자열 내 마음대로 정렬하기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 문자열 내 마음대로 정렬하기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-24
last_modified_at: 2022-06-24
---

#### 문제
![43](/assets/images/43.png)

#### 해결과정
  1. javascript sort() 함수를 이용
    * 1을 리턴하면 오름차순 정렬
    * -1을 리턴하면 내림차순 정렬

```javascript
function solution(strings, n) {   
    return strings.sort((a, b) => {
    if (a[n] > b[n]) {
        return 1;   
    } else if (a[n] < b[n]){
        return -1;  
    } else {
        return a > b ? 1 : -1;  
    } 
  });
}
```