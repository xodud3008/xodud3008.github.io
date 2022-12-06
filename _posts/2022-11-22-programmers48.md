---
title: "프로그래머스 Lv.0 아이스 아메리카노"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 아이스 아메리카노"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 코딩테스트 입문, 아이스 아메리카노, 프로그래머스 아이스 아메리카노, 프로그래머스 아이스 아메리카노 자바]

toc: true
toc_sticky: true
 
date: 2022-11-22
last_modified_at: 2022-11-22
---

#### 문제
![48](/assets/images/48.png)

#### 해결과정
1. 배열을 사용하기 위해 길이가 2인 배열 선언
2. 각 배열에 맞는 값 계산

```java
class Solution {
    public int[] solution(int money) {
        int[] answer = new int[2];
        answer[0] = money / 5500;
        answer[1] = money % 5500;
        return answer;
    }
}
```

자바로 시작하는 알고리즘 연습. 자바스크립트만 쓰다 자바로 하려니 상당히 어렵지만... 자바에 익숙해지기 위해 노오오오력!!
