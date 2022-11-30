---
title: "프로그래머스 Lv.0 삼각형의 완성조건(1)"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 삼각형의 완성조건(1)"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 삼각형의 완성조건(1), 자바 배열 정렬, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-11-30
last_modified_at: 2022-11-30
---

#### 문제
![48](/assets/images/50.png)

#### 해결과정
1. 가장 긴 변의 길이를 구해서 나머지와 크기 비교
2. Java 배열 정렬 함수 사용 `Arrays.sort(배열)`

```java
import java.util.*;
class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        Arrays.sort(sides);
        if(sides[2] < sides[1] + sides[0]) {
            answer = 1;
        } else {
            answer = 2;
        }
        return answer;
    }
}
```