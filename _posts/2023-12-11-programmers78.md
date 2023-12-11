---
title: "공배수"
excerpt: "정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요."

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-11
last_modified_at: 2023-12-11
---

#### 문제
정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

- 10 ≤ number ≤ 100
- 2 ≤ n, m < 10

#### 해결과정
조건문을 사용하여 조건에 맞는 식이 실행되도록 합니다.

```java
class Solution {
    public int solution(int number, int n, int m) {
        int answer = 0;
        if(number % n == 0 && number % m == 0) {
            answer = 1;
        } else {
            answer = 0;
        }
        return answer;
    }
}
```