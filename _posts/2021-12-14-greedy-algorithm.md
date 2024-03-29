---
title:  "시간 복잡도 & Greedy Algorithm"
excerpt: "알고리즘 구현 시 시간 복잡도를 고려해서 효율적으로 코드를 작성해야 한다"

categories:
  - codingtest
tags:
  - [Blog, jekyll, Github, Git, Javascript, 알고리즘, Greedy Algorithm, 자바스크립트, 백엔드, CS, Computer Science, 코딩테스트, codingtest]

toc: true
toc_sticky: true
 
date: 2021-12-14
last_modified_at: 2021-12-14
---
## 알고리즘

문제를 해결하는 최선의 선택

### Time Complexity(시간 복잡도)

알고리즘 문제에서는 문제의 해답을 찾는 것이 중요하지만 얼마나 효율적으로 해결했는지도 중요. 알고리즘의 로직을 코드로 구현할 때, 시간 복잡도를 고려해야 함.

#### 종류

* **Big-O(빅-오): 최악의 경우**
* Big-Ω(빅-오메가): 최선의 경우
* Big-θ(빅-세타): 중간(평균)의 경우

#### Big-O 표기법

시간 복잡도를 표현하는 방법. `입력값의 변화에 따라 연산을 실행할 때, 연산 횟수에 비해 시간이 얼마만큼 걸리는가?`를 표기하는 방법

1. O(1)  
constant complexity라고 하며, 입력값이 증가하더라도 시간이 늘어나지 않는다. 입력값의 크기와 관계없이, 즉시 출력값을 얻어낼 수 있다

2. O(n)  
linear complexity라고 부르며, 입력값이 증가함에 따라 시간 또한 `같은 비율`로 증가하는 것을 의미. 입력값이 1일 때 1초의 시간이 걸리고, 입력값을 100배로 증가시켰을 때 1초의 100배인 100초가 걸리는 알고리즘을 구현했다면, 그 알고리즘은 O(n)의 시간 복잡도를 가진다. 보통 하나의 반복문(for)이 O(n)의 시간 복잡도를 가진다. 2n, 5n, 10n으로 시간 복잡도가 증가한다 하더라도 입력값이 커지면 커질수록 계수의 영향력이 점점 퇴색되기 때문에 그냥 O(n)으로 표기한다.

3. O(log n)  
logarithmic complexity라고 부르며 Big-O표기법중 O(1) 다음으로 빠른 시간 복잡도를 갖는다. BST의 값 탐색도 같은 로직으로 O(log n)의 시간 복잡도를 가진 알고리즘(탐색기법)

4. O(n^2)  
quadratic complexity라고 하며, 입력값이 증가함에 따라 시간이 n의 제곱수의 비율로 증가하는 것을 의미한다. 보통 다중 반복문이 O(n^2)의 시간복잡도를 가진다.

5. O(n^2)  
exponential complexity라고 하며, Big-O 표기법 중 가장 느린 시간 복잡도를 갖는다. 연산을 할 때 마다 계속 2배로 증가하는 것을 말한다. 시간 복잡도가 O(2^n)이라면 다른 접근 방식을 고민해 보는 것이 좋다. 대표적인 예로 재귀로 구현하는 피보나치 수열이 있다.

#### Stack에서 나올 수 있는 시간 복잡도
* O(1) : 스택에 새로운 요소를 넣거나 뺄 때
* O(n) : 스택 탐색

### Greedy Algorithm

선택의 순간마다 당장 눈앞에 보이는 최적의 상황만을 쫓아 최종적인 해답에 도달하는 방법. 어느 정도 최적에 근사한 값을 빠르게 도출할 수 있는 장점이 있어 근사 알고리즘으로 사용할 수 있다.

#### 단계

1. 선택 절차(Selection Procedure): 현재 상태에서의 최적의 해답을 선택합니다.
2. 적절성 검사(Feasibility Check): 선택된 해가 문제의 조건을 만족하는지 검사합니다.
3. 해답 검사(Solution Check): 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 선택 절차로 돌아가 위의 과정을 반복합니다.

#### 적용 조건
* 탐욕적 선택 속성 : 앞의 선택이 이후의 선택에 영향을 주지 않는다.
* 최적 구분 구조 : 문제에 대한 최종 해결 방법은 부분 문제에 대한 최적 문제 해결 방법으로 구성