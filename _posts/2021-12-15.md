---
title:  "알고리즘 with 수학"
excerpt: "수학 공식을 이용한 알고리즘 공식 구현"

categories:
  - TIL
tags:
  - [Blog, jekyll, Github, Git, TIL, Javascript, 알고리즘, Greedy Algorithm, 자바스크립트, 백엔드, CS, Computer Science, 코딩테스트]

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

