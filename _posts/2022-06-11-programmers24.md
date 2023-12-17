---
title: "프로그래머스 Lv.1 직사각형 별찍기"
excerpt: "코딩테스트 프로그래머스 연습문제 직사각형 별찍기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 연습문제, 직사각형 별찍기, programmers, codingtest, 코딩테스트 연습]

toc: true
toc_sticky: true
 
dat8: 2022-06-11
last_modified_at: 2022-06-11
---

#### 문제
![24](/assets/images/24.png)

#### 해결과정
1. 이중 for문으로 조건에 맞게 `*` 출력
2. str을 첫번째 for문에서 선언하여 줄이 바뀔때마다 초기화
3. 가로로 출력하기 위해 str에 `*`을 갯수만큼 더해서 두번째 for문 밖, 첫번째 for문 안에서 출력

:pushpin: repeat()
자바스크립트 내장 함수랑 친해지면 짧게 쓸 수 있다...
```javascript
const row = '*'.repeat(a)
for(let i = 0; i<b; i++){
  console.log(row)
}
```

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for(let i = 0; i<b; i++){
        let str = ''
        for(let j = 0; j<a; j++){
            str += '*'
        }
        console.log(str)
    }
});
```
