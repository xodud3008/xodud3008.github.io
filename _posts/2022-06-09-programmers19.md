---
title: "프로그래머스 Lv.1 콜라츠 추측"
excerpt: "코딩테스트 프로그래머스 연습문제 콜라츠 추측"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 콜라츠 추측, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-09
last_modified_at: 2022-06-09
---

#### 문제
![19](/assets/images/19.png)

#### 해결과정
1. num이 1이 될때까지 반복해야 되기 때문에 while문 사용
2. 조건에 맞게 if문을 작성하고
3. 마지막에 answer가 500인지 아닌지 확인

```javascript
function solution(num) {
    var answer = 0;
    while(num !== 1){
        if(num % 2 === 0){
            num = num / 2;
            answer++
        } else {
            num = (num * 3) + 1;
            answer++
        }
    }
    if(answer > 500){
        answer = -1
    }
    return answer;
}
```
