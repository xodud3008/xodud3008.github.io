---
title: "프로그래머스 자바 Lv.0 문자열의 앞의 n글자"
excerpt: "문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-26
last_modified_at: 2023-12-26

---

#### 문제
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

- my_string은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ my_string의 길이 ≤ 1,000
- 1 ≤ n ≤ my_string의 길이


#### 해결과정
charAt(i) 함수를 사용하여 문자열의 i번째 알파벳를 찾고, n번만큼 반복해서 알파벳을 더해줍니다.

```java
class Solution {
    public String solution(String my_string, int n) {
        String answer = "";
        for(int i = 0; i<n; i++) {
            answer += my_string.charAt(i);
        }
        return answer;
    }
}
```