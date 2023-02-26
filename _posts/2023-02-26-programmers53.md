---
title: "프로그래머스 Lv.0 문자열안에 문자열"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 문자열안에 문자열"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 문자열안에 문자열, 프로그래머스 문자열안에 문자열, programmers, codingtest, 코딩테스트 연습, 프로그래머스 문자열안에 문자열 자바, 자바 코딩 테스트, 자바 문자열안에 문자열]

toc: true
toc_sticky: true
 
date: 2023-02-26
last_modified_at: 2023-02-26
---

#### 문제
![53](/assets/images/p53.png)

#### 해결과정

##### 자바 contains 메소드
* 문자열이 다른 문자열을 포함하는지 확인하는 메소드
  * str1.contains(str2)
  * 사용하기 전에 import 해주기

##### 자바스크립트 includes 메소드
* 문자열이 다른 문자열을 포함하는지 확인하는 메소드
  * str1.includes(str2)

```java
// 자바 source
import java.util.*;

class Solution {
    public int solution(String str1, String str2) {
        int answer = 0;
        if(str1.contains(str2)) {
            answer = 1;
        } else {
            answer = 2;
        }
        return answer;
    }
}
```

```javascript
// 자바스크립트
function solution(str1, str2) {
    var answer = 0;
    if(str1.includes(str2)) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}
```