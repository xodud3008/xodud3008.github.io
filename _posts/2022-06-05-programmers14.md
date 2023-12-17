---
title: "프로그래머스 Lv.1 완주하지 못한 선수"
excerpt: "코딩테스트 프로그래머스 해시 완주하지 못한 선수"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 해시, 완주하지 못한 선수, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-06-05
last_modified_at: 2022-06-05
---

#### 문제
![14](/assets/images/14.png)

#### 해결과정
1. participant와 completion 배열 sort로 정렬
2. 두 배열을 비교하여 같은 위치에 다른 문자가 있으면 완주하지 못한 사람

:pushpin: javascript의 sort()
* sort는 기본적으로 문자 정렬
* 숫자 정렬을 위해서는 따로 함수식 추가
  * 오름차순: arr.sort((a, b) => a - b)
  * 내림차순: arr.sort((a, b) => b - a)

:bell: javascript에는 배열의 순서를 변경하는 reverse() 함수가 있다

```javascript
function solution(participant, completion) {
    participant.sort()
    completion.sort()
    for(let i = 0; i<participant.length; i++){
        if(participant[i] !== completion[i])
            return participant[i]
    }
}
```
