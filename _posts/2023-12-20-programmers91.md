---
title: "프로그래머스 자바 Lv.0 문자열을 정수로 변환하기"
excerpt: "숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-20
last_modified_at: 2023-12-20

---

#### 문제
숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.

- 1 ≤ n_str ≤ 5
- n_str은 0부터 9까지의 정수 문자로만 이루어져 있습니다.

#### 해결과정
정수로 변환하는 Integer.parseInt()함수를 사용합니다.

```java
class Solution {
    public int solution(String n_str) {
        int answer = 0;
        answer = Integer.parseInt(n_str);
        return answer;
    }
}
```