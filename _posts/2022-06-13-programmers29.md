---
title: "프로그래머스 Lv.1 이상한 문자 만들기"
excerpt: "코딩테스트 프로그래머스 연습문제 이상한 문자 만들기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 이상한 문자 만들기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-13
last_modified_at: 2022-06-13
---

#### 문제
![29](/assets/images/29.png)

#### 해결과정
1. 문자열 s를 공백을 기준으로 나눠서 배열로 변환
2. 각각의 단어의 인덱스를 확인하여 짝수면 대문자, 홀수면 소문자 출력
3. 마지막에 추가되는 공백을 없애기 위해 slice(0, -1)

```javascript
function solution(s) {
    var answer = '';
    newArr = s.split(' ')
    for(let i = 0; i<newArr.length; i++){
        for(let j = 0; j<newArr[i].length; j++){
            if(j % 2 === 0){
                answer += newArr[i][j].toUpperCase()
            } else {
                answer += newArr[i][j].toLowerCase()
            }
        }
            answer += ' '
    }
    return answer.slice(0, -1);
}
```