---
title: "rny_string"
excerpt: "'m'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-18
last_modified_at: 2023-12-18

---

#### 문제
'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

- 1 ≤ rny_string의 길이 ≤ 100
- rny_string은 영소문자로만 이루어져 있습니다.

#### 해결과정
문자열을 변환하는 함수 replace()를 사용합니다.

```java
class Solution {
    public String solution(String rny_string) {
        String answer = "";
        answer = rny_string.replace("m", "rn");
        return answer;
    }
}
```