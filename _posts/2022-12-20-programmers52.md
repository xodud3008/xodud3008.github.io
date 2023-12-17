---
title: "프로그래머스 Lv.0 피자 나눠 먹기 (1)"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 피자 나눠 먹기 (1)"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 피자 나눠 먹기 (1), 프로그래머스 피자 나눠 먹기 (1), programmers, codingtest, 코딩테스트 연습, 프로그래머스 피자 나눠 먹기 (1) 자바]

toc: true
toc_sticky: true
 
date: 2022-12-20
last_modified_at: 2022-12-20
---

#### 문제
![51](/assets/images/52.png)

#### 해결과정
1. 나머지와 몫을 구하는 문제

```java
class Solution {
  public int solution(int n) {
    int answer = 0;
    if(n % 7 == 0) {
      answer = n / 7;    
    } else {
      answer = n / 7 + 1;    
    }
    return answer;
  }
}
```