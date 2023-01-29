---
title: "프로그래머스 Lv.0 배열 자르기"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 배열 자르기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 배열 자르기, 프로그래머스 배열 자르기, programmers, codingtest, 코딩테스트 연습, 프로그래머스 배열 자르기 자바, 자바 코딩 테스트, 자바 배열 자르기]

toc: true
toc_sticky: true
 
date: 2023-01-28
last_modified_at: 2023-01-28
---

#### 문제
![52](/assets/images/p52.png)

#### 해결과정

##### 자바 배열 자르는 방법
* coptOfRange() 메소드
  * Arrays.copyOfRange(해당 배열, 시작 인덱스, 끝 인덱스)
  * 사용하기 전에 import 해주기 


```java
import java.util.*;

class Solution {
    public int[] solution(int[] numbers, int num1, int num2) {
        int[] answer = {};
        answer = Arrays.copyOfRange(numbers,num1, num2+1);
        return answer;
    }
}
```