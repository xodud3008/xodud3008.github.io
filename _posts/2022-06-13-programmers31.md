---
title: "프로그래머스 Lv.1 부족한 금액 계산하기"
excerpt: "코딩테스트 프로그래머스 위클리 챌린지 부족한 금액 계산하기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, 위클리 챌린지, 부족한 금액 계산하기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-13
last_modified_at: 2022-06-13
---

#### 문제
![31](/assets/images/31.png)

#### 해결과정
1. 1부터 count까지 실제 이용 금액(newPrice) 구하기
2. money와 newPrice 차이 계산
3. 차액이 0보다 작거나 같으면 0 출력

```javascript
function solution(price, money, count) {
  var answer = 0;
  let newPrice = 0;
  for(let i = 1; i<=count; i++){
      newPrice += price*i
  }
  answer = newPrice - money
  if(answer <= 0){
      return 0
  }
  return answer;
}
```