---
title: "프로그래머스 Lv.1 가운데 글자 가져오기"
excerpt: "코딩테스트 프로그래머스 연습문제 가운데 글자 가져오기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 가운데 글자 가져오기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-13
last_modified_at: 2022-06-13
---

#### 문제
![32](/assets/images/32.png)

#### 해결과정
1. 문자열의 길이가 짝수이면 문자열의 길이를 2로 나눈 수와, 그 수에 -1을 한 수를 인덱스로 가지는 문자 출력
2. 문자열의 길이가 홀수면 문자열의 길이를 2로 나눈 수에 해당하는 문자 출력

:pushpin: Math.floor() 
* 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
* 홀수를 2로 나누어 정수를 얻기 위해 Math.floor() 해주기

```javascript
function solution(s) {
    var answer = '';
    if(s.length % 2 === 0){
        answer = s[s.length/2-1] + s[s.length/2]
    } else {
        answer = s[Math.floor(s.length/2)]
    }
    return answer;
}
```