---
title: "프로그래머스 Lv.1 없는 숫자 더하기"
excerpt: "코딩테스트 프로그래머스 월간 코드 챌린지 시즌3 없는 숫자 더하기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 월간 코드 챌린지 시즌3, 없는 숫자 더하기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-15
last_modified_at: 2022-06-15
---

#### 문제
![35](/assets/images/35.png)

#### 해결과정
1. 0 ~ 9가 있는 배열 생성
2. `indexof()`로 arr중 numbers에 없는 숫자 찾기
  * `indexOf()`는 해당하는 인덱스가 없으면 -1 반환
  * 비슷한 함수로 `includes()`가 있음
3. 없는 숫자 더하기

```javascript
function solution(numbers) {
    var answer = 0;
    let arr = [1,2,3,4,5,6,7,8,9,0]
    for(let i = 0; i<arr.length; i++){
        if(numbers.indexOf(arr[i]) === -1){
            answer += arr[i]
        }
    }
    return answer;
}
```

:pushpin: 다른 사람의 풀이를 보던 중 신박한 풀이를 봤다...
```javascript
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
```
세상에 천재가 많은듯.....