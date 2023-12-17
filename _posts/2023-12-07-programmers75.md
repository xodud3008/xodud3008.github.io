---
title: "홀짝에 따라 다른 값 반환하기"
excerpt: "양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-07
last_modified_at: 2023-12-07
---

#### 문제
양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

- 1 ≤ n ≤ 100

#### 해결과정
조건문을 사용하여 조건에 맞는 식이 실행되도록 합니다.

```java
class Solution {
    public int solution(int n) {
        int answer = 0;
        if(n % 2 == 1) {
            for(int i = 1; i<=n; i+=2) {
                answer += i;
            } 
        } else {
                for(int i = 0; i<=n; i+=2) {
                    answer += i*i;
                }
            }
        return answer;
    }
}
```