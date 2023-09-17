---
title:  "[Greedy] 짐 나르기"
excerpt: "알고리즘 문제. [Greedy] 짐 나르기"

categories:
  - CodingTest
tags:
  - [Blog, jekyll, Github, Git, Javascript, 알고리즘, Greedy Algorithm, 자바스크립트, 백엔드, CS, Computer Science, 코딩테스트, greedy 알고리즘, 그리디 알고리즘, 짐 나르기]

toc: true
toc_sticky: true
 
date: 2022-02-20
last_modified_at: 2021-02-20
---

#### 문제
김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다. 박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다.
예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 2번째 짐과 4번째 짐은 같이 넣을 수 있지만 1번째 짐과 3번째 짐의 무게의 합은 150kg이므로 박스의 무게 제한을 초과하여 같이 넣을 수 없다.
박스를 최대한 적게 사용하여 모든 짐을 옮기려고 합니다.
짐의 무게를 담은 배열 stuff와 박스의 무게 제한 limit가 매개변수로 주어질 때, 모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 movingStuff 함수를 작성하세요.

#### 입력
* 인자 1: stuff
  * `number` 타입의 40 이상 240 이하의 자연수를 담은 배열
* 인자 2: limited
  * `number` 타입의 40 이상 240 이하의 자연수

#### 출력
* `number` 타입을 리턴
* 모든 짐을 옮기기 위해 필요한 박스 개수의 최솟값을 숫자로 반환

#### 주의사항
* 옮겨야 할 짐의 개수는 1개 이상 50,000개 이하
* 박스의 무게 제한은 항상 짐의 무게 중 최대값보다 크게 주어지므로 짐을 나르지 못하는 경우는 없다.

#### 입출력 예시
```javascript
let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); // 3

let output = movingStuff([60, 80, 120, 90, 130], 140);
console.log(output); // 4
```

#### 해결과정
가장 가벼운 것을 기준으로 제일 무거운 것부터 limited보다 작거나 작게 합쳐서 빼는 방식으로 하려고 했으나 실패.
가장 무거운 것을 기준으로 limited보다 작거나 같게 합쳐서 빼는 방식으로 해결.

```javascript
function movingStuff(stuff, limit) {
  let newStuff = stuff.sort((a, b) => a - b)
  let count = 0;
  while(newStuff.length > 0){
    if(newStuff[0] + newStuff[newStuff.length - 1] <= limit){
      newStuff.shift();
    }
    newStuff.pop()
    count++;
  }
  return count
}
```
