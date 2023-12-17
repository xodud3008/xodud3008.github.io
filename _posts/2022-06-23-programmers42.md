---
title: "프로그래머스 Lv.1 소수 만들기"
excerpt: "코딩테스트 프로그래머스 Summer/Winter Coding(~2018) 소수 만들기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, Summer/Winter Coding(~2018), 소수 만들기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-23
last_modified_at: 2022-06-23
---

#### 문제
![42](/assets/images/42.png)

#### 해결과정
  1. 소수를 판별하는 함수 선언
  2. 3가지 수를 뽑아서 만들 수 있는 수의 배열 만들기
  3. 배열의 각 수가 소수인지 판별 

```javascript
function isPrime(num){
    for(let i = 2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}

function solution(nums) {
    var answer = 0;
    let arr = []
    let newArr = []
    for(let i = 0; i<nums.length; i++){
        for(let j = i + 1; j<nums.length; j++){
            for(let k = j + 1; k<nums.length; k++){
                arr.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    for(let i = 0; i<arr.length; i++){
        if(isPrime(arr[i])){
            answer++;
        }
    }
    return answer;
}
```