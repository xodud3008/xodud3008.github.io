---
title: "프로그래머스 Lv.1 시저 암호"
excerpt: "코딩테스트 프로그래머스 연습문제 시저 암호"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 시저 암호, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-20
last_modified_at: 2022-06-20
---

#### 문제
![40](/assets/images/40.png)

#### 해결과정
1. 알파벳의 아스키 코드를 이용
2. z나 Z가 되면 a,A로 돌아가야 하기 때문에 각 z의 아스키 코드에서 26을 빼준다

:pushpin: 알파벳의 소문자 대문자의 아스키 코드가 이어져 있지 않다.
  * 소문자, 대문자를 별도로 계산해야 함
  * 따라서 대문자를 계산할 때 소문자의 아스키 코드가 겹치지 않도록 조건을 넣어주어야 한다
    * `num + n > 90 && num <= 90`

```javascript
function solution(s, n) {
    var answer = '';
    for(let i = 0; i<s.length; i++){
        let num = s.charCodeAt(i)
        if((num + n > 90 && num <= 90 ) || num + n > 122){
            answer += String.fromCharCode((num + n) - 26)
        } else if(s[i] === ' ') {
            answer += ' '
        } else {
            answer += String.fromCharCode(num + n)
        }
    }
    return answer;
}
```