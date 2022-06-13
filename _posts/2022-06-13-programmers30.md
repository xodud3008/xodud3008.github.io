---
title: "프로그래머스 Lv.1 문자열 내 p와 y의 개수"
excerpt: "코딩테스트 프로그래머스 연습문제 문자열 내 p와 y의 개수"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 문자열 내 p와 y의 개수, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-13
last_modified_at: 2022-06-13
---

#### 문제
![30](/assets/images/30.png)

#### 해결과정
1. 문자열 전체 대문자로 변환
2. P와 Y의 개수 세기
3. 갯수가 같으면 true, 다르면 false 출력

```javascript
function solution(s){
    var answer = true;
    let countP = 0;
    let countY = 0;
    newStr = s.toUpperCase()
    for(let i = 0; i<newStr.length; i++){
        if(newStr[i] === 'P'){
            countP++
        } else if(newStr[i] === 'Y') {
            countY++
        }
    }
    if(countP === countY){
        answer = true
    } else {
        answer = false
    }
    return answer;
}
```