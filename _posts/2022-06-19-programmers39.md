---
title: "프로그래머스 Lv.1 소수 찾기"
excerpt: "코딩테스트 프로그래머스 연습문제 소수 찾기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 소수 찾기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-19
last_modified_at: 2022-06-19
---

#### 문제
![39](/assets/images/39.png)

#### 해결과정
1. 소수를 판별하는 함수를 따로 선언
2. 2부터 시작해서 n까지 판별하여 갯수 세기

:pushpin: 생각보다 오래 걸린 문제...
  * n까지의 배열을 만들어서 소수를 확인하려 했으나 잘 안됐다
  * `에라토스테네스의 체` 라는 걸 이용하는 문제인 거 같지만 잘 모르겠고...
  * 제곱근까지 검사하는 호율적인 코드가 있으니 확인해보자

```javascript
function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}
function solution(n) {   
    var answer = 0;
    let arr = [];
    for(let i = 2; i<=n; i++){
        if(isPrime(i)){
            answer++
        }
    }
    return answer;
}
```