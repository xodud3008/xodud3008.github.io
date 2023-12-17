---
title: "프로그래머스 Lv.0 양꼬치"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 양꼬치"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 양꼬치, 프로그래머스 양꼬치, 프로그래머스 양꼬치, programmers, codingtest, 코딩테스트 연습, 프로그래머스 양꼬치 자바]

toc: true
toc_sticky: true
 
date: 2022-12-12
last_modified_at: 2022-12-12
---

#### 문제
![51](/assets/images/51.png)

#### 해결과정
1. 기초적인 사칙연산 문제

```java
class Solution {
    public int solution(int n, int k) {
        int answer = 0;
        if(n /10 == 0) {
            answer = n * 12000 + k * 2000;
        } else {
            answer = n * 12000 + (k - n / 10) * 2000;
        }
        return answer;
    }
}
```