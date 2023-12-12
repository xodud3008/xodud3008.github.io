---
title: "n보다 커질 때까지 더하기"
excerpt: "정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요."

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 자바]

toc: true
toc_sticky: true
 
date: 2023-12-12
last_modified_at: 2023-12-12
---

#### 문제
정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

- 1 ≤ numbers의 길이 ≤ 100
- 1 ≤ numbers의 원소 ≤ 100
- 0 ≤ n < numbers의 모든 원소의 합

#### 해결과정
주어진 숫자의 합이 n보다 작을 때까지 반복문을 실행합니다.

```java
class Solution {
    public int solution(int[] numbers, int n) {
        int answer = 0;
        for(int i = 0; i<numbers.length; i++) {
            answer += numbers[i];
            if(answer > n) {
                break;
            }
        }
        return answer;
    }
}
```