---
title: "원소들의 곱과 합"
excerpt: "정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요."

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-11-30
last_modified_at: 2023-11-30
---

#### 문제
정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

- 2 ≤ num_list의 길이 ≤ 10
- 1 ≤ num_list의 원소 ≤ 9

#### 해결과정
for문을 사용하여 필요한 값을 계산한 후 조건에 맞는 결과를 리턴합니다. 모든 원소들을 곱한 값을 구하기 위해 하나의 변수는 초기화를 1로 해줍니다.

```java
class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int a = 0;
        int b = 1;
        for(int i = 0; i<num_list.length; i++){
            a += num_list[i];
            b *= num_list[i];
        }
        if(b < a*a) {
            answer = 1;
        } else {
            answer = 0;
        }
        return answer;
    }
}
```