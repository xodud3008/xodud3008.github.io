---
title: "프로그래머스 Lv.1 약수의 합"
excerpt: "코딩테스트 프로그래머스 Lv.1 연습문제 약수의 합"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 약수의 합, programmers, codingtest, 코딩테스트 연습, 프로그래머스 약수의 합, 프로그래머스 약수의 합 자바스크립트]

toc: true
toc_sticky: true
 
date: 2022-05-26
last_modified_at: 2022-05-26
---

#### 문제
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

##### 제한사항
* n은 0 이상 3000이하인 정수입니다.

##### 입출력 예
|n|return|
|--|--|
|12|28|
|5|6|

* 입출력 예 #1
  12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

* 입출력 예 #2
  5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

#### 해결과정
1. 약수를 구하고 약수이면 answer에 더하기

비교적 쉬운 문제였다. 다른 사람들의 풀이를 보니 정말 다양한 방법이 있었다. 코드를 좀더 간결하고 쉽게 쓸 수 있도록 노력하기!!

```javascript
function solution(n) {
    var answer = 0;
    for(let i = 1; i<=n; i++){
        if(n % i === 0){
            answer += i
        }
    }
    return answer;
}
```
