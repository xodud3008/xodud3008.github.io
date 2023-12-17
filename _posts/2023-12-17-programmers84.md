---
title: "문자열로 변환"
excerpt: "정수 n이 주어질 때, n을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-17
last_modified_at: 2023-12-17

---

#### 문제
정수 n이 주어질 때, n을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요.

- 1 ≤ n ≤ 10000

#### 해결과정
문자열로 변환하는 함수 Interger.toString() 함수를 사용합니다.

```java
class Solution {
    public String solution(int n) {
        String answer = "";
        answer = Integer.toString(n);
        return answer;
    }
}
```