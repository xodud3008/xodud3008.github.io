---
title: "프로그래머스 Lv.0 암호 해독"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 암호 해독"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 암호 해독, 프로그래머스 암호 해독, programmers, codingtest, 코딩테스트 연습, 프로그래머스 암호 해독 자바, 자바 코딩 테스트, 자바 암호 해독, 자바스크립트 암호 해독, 암호 해독 자바스크립트]

toc: true
toc_sticky: true
 
date: 2023-03-07
last_modified_at: 2023-03-07
---

#### 문제
![56](/assets/images/56.png)

#### 해결과정

##### 자바 
* 자바스크립트와 비슷한 로직
  * 자바 문자열 인덱스에 접근하는 방법 : str.charAt(i)

```java
// 자바 source
class Solution {
    public String solution(String cipher, int code) {
        String answer = "";
        for(int i = 1; i<=cipher.length(); i++) {
            if(i % code == 0) {
                answer += cipher.charAt(i - 1);
            }
        }
        return answer;
    }
}
```

##### 자바스크립트 

```javascript
// 자바스크립트
function solution(cipher, code) {
    var answer = '';
    for(let i = 1; i<=cipher.length; i++) {
        if(i % code === 0) {
            answer += cipher[i-1];
        }
    }
    return answer;
}
```