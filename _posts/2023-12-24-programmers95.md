---
title: "길이에 따른 연산"
excerpt: "정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-24
last_modified_at: 2023-12-24

---

#### 문제
정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

- 2 ≤ num_list의 길이 ≤ 20
- 1 ≤ num_list의 원소 ≤ 9
- num_list의 원소를 모두 곱했을 때 2,147,483,647를 넘는 입력은 주어지지 않습니다.

#### 해결과정
조건문을 사용하여 조건에 맞는 식이 실행되도록 합니다.

```java
class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        if(num_list.length >= 11) {
            for(int i = 0; i<num_list.length; i++) {
                answer += num_list[i];
            } 
        } else {
            answer = 1;
            for(int i = 0; i<num_list.length; i++) {
                answer *= num_list[i];    
            }
        }
        return answer;
    }
}
```