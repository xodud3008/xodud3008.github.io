---
title: "대문자로 바꾸기"
excerpt: "프로그래머스 자바 Lv.0 대문자로 바꾸기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-11-26
last_modified_at: 2023-11-26
---

#### 문제
알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

#### 해결과정
대문자로 변환하는 함수 toUpperCase()를 사용합니다.

```java
class Solution {
    public String solution(String myString) {
        String answer = "";
        answer = myString.toUpperCase();
        return answer;
    }
}
```