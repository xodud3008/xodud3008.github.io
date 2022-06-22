---
title: "프로그래머스 Lv.1 최소직사각형"
excerpt: "코딩테스트 프로그래머스 위클리 챌린지 최소직사각형"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 위클리 챌린지, 최소직사각형, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-22
last_modified_at: 2022-06-22
---

#### 문제
![41](/assets/images/41.png)

#### 제한사항
* sizes의 길이는 1 이상 10,000 이하입니다.
  * sizes의 원소는 [w, h] 형식입니다.
  * w는 명함의 가로 길이를 나타냅니다.
  * h는 명함의 세로 길이를 나타냅니다.
  * w와 h는 1 이상 1,000 이하인 자연수입니다.

#### 해결과정
1. 각 배열의 최대값을 v로 최소값을 w로 push
2. v와 w의 최대값을 곱한다

```javascript
function solution(sizes) {
    var answer = 0;
    let v = []
    let w = []
    for(let i = 0; i<sizes.length; i++){
        if(sizes[i][0] > sizes[i][1]){
            v.push(sizes[i][0]);
            w.push(sizes[i][1])
        } else {
            v.push(sizes[i][1]);
            w.push(sizes[i][0])
        }
    }
    v.sort((a, b) => b - a)
    w.sort((a, b) => b - a)
    answer = v[0] * w[0]
    return answer;
}
```