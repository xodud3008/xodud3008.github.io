---
title: "소문자로 바꾸기"
excerpt: "프로그래머스 Lv.1 소문자로 바꾸기 자바"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, java, 자바]

toc: true
toc_sticky: true
 
date: 2023-11-22
last_modified_at: 2023-11-22
---

#### 문제
알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

* 제한사항
  * 1 ≤ myString의 길이 ≤ 100,000
  * myString은 알파벳으로 이루어진 문자열입니다.

#### 해결과정
- 문자열을 변경하는 replace 활용
- 소문자로 변경하는 toLowerCase()  

```java
class Solution {
    public String solution(String myString) {
        String answer = "";
        answer = myString.replace(myString, myString.toLowerCase());
        return answer;
    }
}
```