---
title: "프로그래머스 Lv.1 자릿수 더하기"
excerpt: "코딩테스트 프로그래머스 연습문제 자릿수 더하기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 완주하지 못한 선수, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-06-06
last_modified_at: 2022-06-06
---

#### 문제
![15](/assets/images/15.png)

#### 해결과정
1. 숫자를 배열로 만든다
  * split() 함수를 쓰기 위해 `''`를 더해 문자로 만든다.
2. 배열을 하나씩 더한다
  * 다시 숫자로 변환하기 위해 `*1` 해준다.

:pushpin: reduce() 함수에 익숙해지자...

```javascript
function solution(n)
{
    var answer = 0;
    newArr = (n + '').split('');
    for(let i = 0; i<newArr.length; i++){
        answer += newArr[i]*1
    }
    return answer;
}
```
