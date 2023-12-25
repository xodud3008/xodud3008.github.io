---
title: "프로그래머스 자바 Lv.0 문자열 곱하기"
excerpt: "문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-25
last_modified_at: 2023-12-25

---

#### 문제
문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

- 1 ≤ my_string의 길이 ≤ 100
- my_string은 영소문자로만 이루어져 있습니다.
- 1 ≤ k ≤ 100


#### 해결과정
k번 반복해서 문자열을 더해줍니다.

```java
class Solution {
    public String solution(String my_string, int k) {
        String answer = "";
        for(int i = 0; i<k; i++) {
            answer += my_string;
        }
        return answer;
    }
}
```