---
title: "뒤에서 5등까지"
excerpt: "정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요."

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-11
last_modified_at: 2023-12-11
---

#### 문제
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

- 6 ≤ num_list의 길이 ≤ 30
- 1 ≤ num_list의 원소 ≤ 100

#### 해결과정
배열을 정렬하는 Arrays.sort()를 사용합니다. 정렬 후 새로운 배열에 값을 넣어줍니다.

```java
import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[5];
        Arrays.sort(num_list);
        for(int i = 0; i<5; i++) {
            answer[i] = num_list[i];
        }
        return answer;
    }
}
```