---
title: "프로그래머스 Lv.0 아이스 아메리카노"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 아이스 아메리카노"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 아이스 아메리카노, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-11-25
last_modified_at: 2022-11-25
---

#### 문제
![48](/assets/images/49.png)

#### 해결과정
1. 배열 정렬을 위한 메소드 사용하기 위해 import
2. 배열 오름차순 정렬 후 마지막 숫자와 마지막 전 숫자 곱하기

```java
import java.util.*;

class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        Arrays.sort(numbers);
        answer = numbers[numbers.length-1] * numbers[numbers.length - 2];
        return answer;
    }
}
```

자바스크립트와 다르게 자바에서는 import해서 메소드 사용하는 것이 많음!! import 잊지 말자
