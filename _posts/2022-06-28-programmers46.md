---
title: "프로그래머스 Lv.1 폰켓몬"
excerpt: "코딩테스트 프로그래머스 찾아라 프로그래밍 마에스터 폰켓몬"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 찾아라 프로그래밍 마에스터, 폰켓몬, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-28
last_modified_at: 2022-06-28
---

#### 문제
![46](/assets/images/46.png)

#### 해결과정
  1. 중복값 제거하기 위해 정렬 하고 중복값 제거
  2. 중복값이 제거된 배열과 원래 배열 길이 / 2한 값 중 작은 수 찾기

```javascript
function solution(nums) {
    var answer = 0;
    let arr = []
    nums.sort((a, b) => a - b)
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== nums[i + 1]){
            arr.push(nums[i])
        }
    }
    answer = Math.min(arr.length, nums.length / 2)
    return answer;
}
```