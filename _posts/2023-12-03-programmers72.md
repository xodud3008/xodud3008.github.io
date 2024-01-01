---
title: "프로그래머스 자바 Lv.0 제곱수 판별하기"
excerpt: "어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-03
last_modified_at: 2023-12-03
---

#### 문제
어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

- 1 ≤ n ≤ 1,000,000

#### 해결과정
Math.sqrt() 함수를 사용하여 제곱근을 구합니다. 1로 나눴을 때 나머지가 0이면 제곱수입니다.

```java
class Solution {
    public int solution(int n) {
        int answer = 0;
        if(Math.sqrt(n)%1 == 0) {
            answer = 1;
        } else {
            answer = 2;
        }
        return answer;
    }
}
```