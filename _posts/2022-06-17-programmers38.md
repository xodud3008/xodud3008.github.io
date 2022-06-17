---
title: "프로그래머스 Lv.1 두 개 뽑아서 더하기"
excerpt: "코딩테스트 프로그래머스 월간 코드 챌린지 시즌1 두 개 뽑아서 더하기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 월간 코드 챌린지 시즌1, 두 개 뽑아서 더하기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-17
last_modified_at: 2022-06-17
---

#### 문제
![38](/assets/images/38.png)

#### 해결과정
1. 이중 for문으로 두개씩 뽑아서 더한 값 만들기
2. 중복된 값을 확인하여 answer에 하나만 push

```javascript
function solution(numbers) {
    var answer = [];
    let arr = []
    for(let i = 0; i<numbers.length; i++){
        for(let j = i + 1; j<numbers.length; j++){
            arr.push(numbers[i] + numbers[j])
        }
    }
    arr.sort((a, b) => a - b)
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            answer.push(arr[i])
        }
    }
    return answer;
}
```