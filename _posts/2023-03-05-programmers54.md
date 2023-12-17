---
title: "프로그래머스 Lv.0 n의 배수 고르기"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 n의 배수 고르기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, n의 배수 고르기, 프로그래머스 n의 배수 고르기, programmers, codingtest, 코딩테스트 연습, 프로그래머스 n의 배수 고르기 자바, 자바 코딩 테스트, 자바 n의 배수 고르기, 자바스크립트 n의 배수 고르기, n의 배수 고르기 자바스크립트]

toc: true
toc_sticky: true
 
date: 2023-03-05
last_modified_at: 2023-03-05
---

#### 문제
![54](/assets/images/54.png)

#### 해결과정

##### 자바 배열 다루기
* 자바 배열은 고정 길이이기 때문에 특정 인덱스의 값을 삭제하거나 추가하는 메소드 없음
  * 구하는 값의 길이를 구한 뒤 해당 길이로 배열 선언
  * answer 인덱스를 1씩 늘리며 n의 배수값 할당

```java
// 자바 source
class Solution {
    public int[] solution(int n, int[] numlist) {
        int count = 0;
        int idx = 0;
        
        for(int i = 0; i<numlist.length; i++) {
            if(numlist[i] % n == 0) {
                count++;
            }
        }
        
        int[] answer = new int[count];
        
        for(int i = 0; i<numlist.length; i++) {
            if(numlist[i] % n == 0) {
                answer[idx] = numlist[i];
                idx++;
            }
        }
        return answer;
    }
}
```

##### 자바스크립트 push 메소드
* 배열 맨 끝에 값을 삽입하는 메소드
  * array.push();
  * 배열 맨 앞에 값을 추가하려면 unshift() 메소드 사용

```javascript
// 자바스크립트
function solution(n, numlist) {
    var answer = [];
    for(let i = 0; i<numlist.length; i++) {
        if(numlist[i] % n === 0) {
            answer.push(numlist[i])
        }
    }
    return answer;
}
```