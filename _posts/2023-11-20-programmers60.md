---
title: "프로그래머스 Lv.0 특정한 문자를 대문자로 바꾸기"
excerpt: "프로그래머스 Lv.0 java 특정한 문자를 대문자로 바꾸기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, Java]

toc: true
toc_sticky: true
 
date: 2023-11-20
last_modified_at: 2023-11-20
---

#### 문제
![p60](/assets/images/p60.png)

#### 해결과정
- 문자열을 변경하는 함수 replace 활용
- 대문자로 변경하는 toUpperCase() 사용

```java
// 자바 source
class Solution {
    public String solution(String my_string, String alp) {
        String answer = "";
        answer = my_string.replace(alp, alp.toUpperCase());
        return answer;
    }
}
```