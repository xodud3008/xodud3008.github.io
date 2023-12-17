---
title: "프로그래머스 Lv.0 369"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 369"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, "369", 프로그래머스 369, programmers, codingtest, 코딩테스트 연습, 프로그래머스 369 자바, 자바 코딩 테스트, 자바 369, 자바스크립트 369, 369 자바스크립트]

toc: true
toc_sticky: true
 
date: 2023-03-16
last_modified_at: 2023-03-16
---

#### 문제
![58](/assets/images/58.png)

#### 해결과정

##### 자바 
* split() 메소드를 사용하기 위해 order를 문자형으로 변환
* 문자열 비교하기 위해 equals() 함수 사용

```java
// 자바 source
class Solution {
    public int solution(int order) {
        int answer = 0;
        String arr[] = ("" + order).split("");

        for(int i = 0; i<arr.length; i++) {
            if(arr[i].equals("3") || arr[i].equals("6") || arr[i].equals("9")) {
                answer++;
            }
        }
        return answer;
    }
}
```

##### 자바스크립트 
* 정규표현식을 쓰면 더 간단히 풀 수 있다...
```javascript
// 자바스크립트
function solution(order) {
    var answer = 0;
    let arr = (order+"").split("");
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] !== "0" && arr[i] % 3 === 0) {
            answer++;
        }
    }
    return answer;
}
```