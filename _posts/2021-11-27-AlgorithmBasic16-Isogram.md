---
title:  "Basic Algorithm 16 Isogram"
excerpt: "문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다."

categories:
  - CodingTest
tags:
  - [Blog, jekyll, Github, Git, CodingTest, Algorithm, isIsogram]

toc: true
toc_sticky: true

date: 2021-11-27
last_modified_at: 2021-11-27
---

#### 문제

문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

#### 입력

인자1: str

string 타입의 공백 없는 문자열

#### 출력

boolean 타입

#### 주의사항

* 빈 문자열을 입력받은 경우, `true` 리턴
* 대소문자 구별하지 않음

#### 입출력 예시

```
let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false
```

#### 해결과정

1. 빈 배열일 경우 `true` 반환
2. 2중 for문으로 중복된 문자가 있는지 확인
3. 대소문자 구별이 없으므로 모든 문자를 소문자로 변환해서 검사

```javascript
function isIsogram(str) {
  if(str === ''){
    return true
  }
  for(let i = 0; i<str.length-1; i++){
    for(let j = i+1; j<str.length; j++){
      if(str[i].toLowerCase() === str[j].toLowerCase()){
        return false
      }      
    }
  }
  return true
}
```



