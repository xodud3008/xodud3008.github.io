---
title:  "알고리즘 with 수학"
excerpt: "수학 공식을 이용한 알고리즘 공식 구현"

categories:
  - TIL
tags:
  - [Blog, jekyll, Github, Git, TIL, Javascript, 알고리즘, Greedy Algorithm, 자바스크립트, 백엔드, CS, Computer Science, 코딩테스트, 순열, 중복순열, 조합, 멱집합, 최대공약수, 최소공배수]

toc: true
toc_sticky: true
 
date: 2021-12-15
last_modified_at: 2021-12-15
---

#### 중복순열

반복문 Version

```javascript
let result = [];
let arr = [1, 2, 3]
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr.length; j++){
    for(let k = 0; k < arr.length; k++){
      result.push([arr[i], arr[j], arr[k]]);
    }
  }
}
```

재귀함수 Version

```javascript
let result = [];

//bucket은 조합을 담아낼 일회성 그릇이라고 생각하면 된다.
function multiPermutation(arr, n, bucket) {
  if(n === 0) { // 탈출조건
    result.push(bucket);
    return;
  }
  for(let i = 0; i < arr.length; i++){
    multiPermutation(arr, n - 1, bucket.concat(arr[i]))
  }
  return result;
}
multiPermutation([1,2,3], 3, []);
```

#### 순열

반복문 Version

```javascript
let result = [];
let arr = [1, 2, 3]
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr.length; j++){
    for(let k = 0; k < arr.length; k++){
      if(i === j || j ===k || k === i) continue;
      result.push([arr[i], arr[j], arr[k]]);
    }
  }
}
```

재귀함수 Version

```javascript
let result = [];
function permutation(arr, n, bucket){
  if(n === 0){
    result.push(bucket);
    return;
  }
  for(let i = 0; i < arr.length; i++){
    let rest = arr.slice();
    let pick = rest.splice(i, 1);
    permutation(rest, n - 1, bucket.concat(pick));
  }
  return result
}
permutation([1,2,3], 3, []);
```

forEach

```javascript
function permutation(sortFresh, choiceNum) {
    let result = [];
    if (choiceNum === 1) return sortFresh.map((v) => [v]);

    sortFresh.forEach((v, idx, sortFresh) => {
      const fixer = v;
      const restArr = sortFresh.filter((_, index) => index !== idx);
      const permuationArr = permutation(restArr, choiceNum - 1);
      const combineFixer = permuationArr.map((v) => [fixer, ...v]);
      result.push(...combineFixer);
    });
    return result;
  }
```

#### 조합

반복분 Version

```javascript
let result = [];
let arr = [1,2,3];

for(let i = 0; i < arr.length; i++){
  for(let j = i + 1; j < arr.length; j++){
    result.push([arr[i], arr[j]])
  }
}
```

재귀함수 Version

```javascript
let result = [];
function combination(arr, n, bucket){
  if(n === 0){
    result.push(bucket);
    return;
  }
  for(let i = 0; i < arr.length; i++){
    let pick = arr[i];
    let rest = arr.slice(i + 1);
    combination(rest, n - 1, bucket.concat(pick));
  }
  return result;
}
combination([1,2,3], 2, []);
```

#### 멱집합
집합 {1, 2, 3}의 모든 부분집합을 멱집합이라고 한다.
```javascript
function powerSet(arr) {
  //check표시 해줄 배열
  let check = new Array(arr.length).fill(0);
  //모든 부분집합이 담길 배열이다.
  let powerSetArr = [];
  const dfs = (depth) => {
    //check에 1인 index와 같은 index에 있는 arr만 filter해서 넣어준다.
    if (depth === check.length) {
      powerSetArr.push(arr.filter((v, idx) => check[idx]));
    } else {
      //포함되는 경우
      check[depth] = 1;
      dfs(depth + 1);
      //포함되지 않는 경우
      check[depth] = 0;
      dfs(depth + 1);
    }
  };
  dfs(0);
  return powerSetArr;
}
```

#### 최대공약수(GCD) / 최소공배수(LCM) with 유클리드 호제법
```javascript
function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}
```