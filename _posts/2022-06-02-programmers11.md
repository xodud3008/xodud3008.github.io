---
title: "프로그래머스 Lv.1 K번째수"
excerpt: "코딩테스트 프로그래머스 Lv.1 정렬 K번째수"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 정렬, K번째수, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
date: 2022-06-02
last_modified_at: 2022-06-02
---

#### 문제
![11](/assets/images/11.png)

#### 해결과정
1. 필요한 배열만큼 `slice`로 자른다.
2. 오름차순 정렬 후 해당 인덱스의 수 출력


:pushpin: slice() 사용법
* 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
* 원본 배열은 바뀌지 않는다.

```javascript
arr = [1, 2, 3, 4, 5]
// 3과 4를 뽑는 방법
arr.slice(2, 4)

// 음수를 넣으면 뒤에서부터 출력
arr.slice(-2)
// [4, 5]
```

```javascript
function solution(array, commands) {
    var answer = [];
    for(let i = 0; i<commands.length; i++){
        newArr = array.slice(commands[i][0]-1, commands[i][1])
        newArr.sort((a, b) => a - b)
        answer.push(newArr[commands[i][2]-1])
    }
    return answer;
}
```
