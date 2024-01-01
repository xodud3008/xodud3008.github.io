---
title: "프로그래머스 자바 Lv.0 첫 번째로 나오는 음수"
excerpt: "정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-19
last_modified_at: 2023-12-19

---

#### 문제
정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

- 5 ≤ num_list의 길이 ≤ 100
- -10 ≤ num_list의 원소 ≤ 100

#### 해결과정
문자열을 변환하는 함수 replace()를 사용합니다.

```java
class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        for(int i = 0; i<num_list.length; i++) {
            if(num_list[i] < 0) {
                answer = i;
                break;
            } else {
                answer = -1;
            }
        }
        return answer;
    }
}
```