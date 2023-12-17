---
title: "프로그래머스 Lv.1 음양 더하기"
excerpt: "코딩테스트 프로그래머스 Lv.1 월간 코드 챌린지 시즌2 음양 더하기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 음양 더하기, programmers, codingtest, 코딩테스트 연습, 프로그래머스 음양 더하기, 프로그래머스 음양 더하기 자바스크립트]

toc: true
toc_sticky: true
 
date: 2022-05-28
last_modified_at: 2022-05-28
---

#### 문제
![6](/assets/images/6.png)

#### 해결과정
1. signs가 true면 같은 위치에 있는 absolutes의 숫자 더하기, 아니면 빼기

```javascript
function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i<absolutes.length; i++){
        if(signs[i] === true){
            answer += absolutes[i]
        } else {
            answer -= absolutes[i]
        }
    }
    return answer;
}
```
