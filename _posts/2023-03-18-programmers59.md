---
title: "프로그래머스 Lv.0 주사위의 개수"
excerpt: "코딩테스트 프로그래머스 Lv.0 코딩테스트 입문 주사위의 개수"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, Java, Javascript]

toc: true
toc_sticky: true
 
date: 2023-03-18
last_modified_at: 2023-03-18
---

#### 문제
![59](/assets/images/59.png)

#### 해결과정

##### 자바 
* 계산해야 하는 변의 개수가 정해져 있기에 가능

```java
// 자바 source
class Solution {
    public int solution(int[] box, int n) {
        int answer = 0;
        answer = (box[0] / n) * (box[1] / n) * (box[2] / n);
        return answer;
    }
}
```

##### 자바스크립트 
* 상자의 크기는 가로, 세로, 높이로 정해지기 때문에 for문을 안써도 될듯
```javascript
// 자바스크립트
function solution(box, n) {
    var answer = 1;
    for(let i = 0; i<box.length; i++) {
        answer *= Math.floor(box[i] / n);
    }
    return answer;
}
```