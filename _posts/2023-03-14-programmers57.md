---
title: "프로그래머스 Lv.0 세균 증식"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 세균 증식"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 세균 증식, 프로그래머스 세균 증식, programmers, codingtest, 코딩테스트 연습, 프로그래머스 세균 증식 자바, 자바 코딩 테스트, 자바 세균 증식, 자바스크립트 세균 증식, 세균 증식 자바스크립트]

toc: true
toc_sticky: true
 
date: 2023-03-14
last_modified_at: 2023-03-14
---

#### 문제
![57](/assets/images/57.png)

#### 해결과정

##### 자바 
* t만큼 *2 해주기

```java
// 자바 source
class Solution {
    public int solution(int n, int t) {
        int answer = 0;
        answer = n;
        for(int i = 0; i<t; i++) {
            answer = answer * 2;
        }
        return answer;
    }
}
```

##### 자바스크립트 

```javascript
// 자바스크립트
function solution(n, t) {
    var answer = n;
    for(let i = 0; i<t; i++) {
        answer *= 2;
    }
    return answer;
}
```