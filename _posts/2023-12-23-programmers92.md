---
title: "n의 배수"
excerpt: "정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-23
last_modified_at: 2023-12-23

---

#### 문제
정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

- 2 ≤ num ≤ 100
- 2 ≤ n ≤ 9

#### 해결과정
조건문을 사용하여 조건에 맞는 식이 실행되도록 합니다.

```java
class Solution {
    public int solution(int num, int n) {
        int answer = 0;
        if(num % n == 0) {
            answer = 1;
        } else {
            answer = 0;
        }
        return answer;
    }
}
```