---
title: "프로그래머스 자바 Lv.0 카운트 다운"
excerpt: "정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-11-28
last_modified_at: 2023-11-28
---

#### 문제
정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

- 0 ≤ end_num ≤ start_num ≤ 50

#### 해결과정
반복문을 사용하여 조건에 맞는 횟수만큼 실행합니다. 자바는 배열의 크기를 선언하지 않으면 `ArrayIndexOutOfBoundsException` 에러가 발생합니다.

```java
class Solution {
    public int[] solution(int start, int end_num) {
        int[] answer = new int[start-end_num +1];
        for(int i = 0; i<start - end_num+1; i++) {
            answer[i] = start - i;
        }
        return answer;
    }
}
```