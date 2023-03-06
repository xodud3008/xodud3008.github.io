---
title: "프로그래머스 Lv.0 약수 구하기"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 약수 구하기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 약수 구하기, 프로그래머스 약수 구하기, programmers, codingtest, 코딩테스트 연습, 프로그래머스 약수 구하기 자바, 자바 코딩 테스트, 자바 약수 구하기, 자바스크립트 약수 구하기, 약수 구하기 자바스크립트]

toc: true
toc_sticky: true
 
date: 2023-03-06
last_modified_at: 2023-03-06
---

#### 문제
![55](/assets/images/55.png)

#### 해결과정

##### 자바 배열 다루기
* 자바 배열 선언
  * int[] answer = new int[count];
  * {}와 [] 잘 구별해서 사용

```java
// 자바 source
class Solution {
    public int[] solution(int n) {
        int count = 0;
        int idx = 0;
        for(int i = 1; i<=n; i++) {
            if(n % i == 0) {
                count++;
            }
        }
        int[] answer = new int[count];
        
        for(int i = 1; i<=n; i++) {
            if(n % i == 0) {
                answer[idx] = i;
                idx++;
            }
        }
        
        return answer;
    }
}
```

##### 자바스크립트 

```javascript
// 자바스크립트
function solution(n) {
    var answer = [];
    for(let i = 1; i<=n; i++) {
        if(n % i == 0) {
            answer.push(i);
        }
    }
    return answer;
}
```

#### 자바스크립트가 확실히 쉽고 간단하다....