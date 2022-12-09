---
title: "프로그래머스 Lv.1 약수의 개수와 덧셈"
excerpt: "코딩테스트 프로그래머스 Lv.1 월간 코드챌린지 시즌2 약수의 개수와 덧셈"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 프로그래머스 약수의 개수와 덧셈, 약수의 개수와 덧셈 자바스크립트, 약수의 개수와 덧셈, programmers, codingtest, 코딩테스트 연습, 프로그래머스 약수의 개수와 덧셈 자바스크립트]

toc: true
toc_sticky: true
 
date: 2022-05-25
last_modified_at: 2022-05-25
---

#### 문제
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

##### 제한사항
* 1 ≤ left ≤ right ≤ 1,000

##### 입출력 예
|left|right|result|
|--|--|--|
|13|17|43|
|24|27|52|

![3](/assets/images/1.png)

#### 해결과정
1. 약수를 구하는 함수 선언
2. 약수의 개수를 구해서 짝수면 더하고 홀수면 빼기

:pushpin: 더 쉬운 풀이
  * 제곱근이 정수면 약수의 개수가 홀수이다
  * Math.sqrt()로 제곱근을 구한 뒤 Number.isInteger()로 정수인지 확인

```javascript
function solution(left, right) {
  var answer = 0;
  
  for(let i = left; i<=right; i++){
      if(divide(i) % 2 === 0){
          answer = answer + i
      } else {
          answer = answer - i
      }
  }
  return answer;
}

function divide(num){
  let count = 0;
  for(let i = 1; i<=num; i++){
      if(num % i === 0){
          count++;
      }
  }
  return count
}
```
