---
title: "정수 찾기"
excerpt: "정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요."

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-11-28
last_modified_at: 2023-11-28
---

#### 문제
정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

- 3 ≤ num_list의 길이 ≤ 100
- 1 ≤ num_list의 원소 ≤ 100
- 1 ≤ n ≤ 100

#### 해결과정
같은 정수를 확인하도록 반복문을 돌면서 확인합니다. 중간에 같은 숫자를 찾은 경우 반복문이 더 실행되지 않도록 `break`를 사용합니다. 

```java
class Solution {
        public int solution(int[] num_list, int n) {
            int answer = 0;
            for(int i = 0; i<num_list.length; i++) {
                if(num_list[i] == n) {
                    answer = 1;
                    break;
                } else {
                    answer = 0;
                }
            }
            return answer;
        }
    }
```