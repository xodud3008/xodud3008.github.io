---
title: "여러 기준으로 정렬하기"
excerpt: "프로그래머스 오라클 Lv.1 여러 기준으로 정렬하기"

categories:
  - CodingTest
tags:
  - [코딩테스트, 프로그래머스, oracle]

toc: true
toc_sticky: true
 
date: 2023-11-22
last_modified_at: 2023-11-22
---

#### 문제
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

동물 보호소에 들어온 모든 동물의 아이디와 이름, 보호 시작일을 이름 순으로 조회하는 SQL문을 작성해주세요. 단, 이름이 같은 동물 중에서는 보호를 나중에 시작한 동물을 먼저 보여줘야 합니다.

#### 해결과정
정렬 순서를 결정하는 order by 절에 정렬의 우선순위 순서로 쓴다.
- 오름차순 : ASC(생략 가능)
- 내림차순 : DESC

```sql
SELECT ANIMAL_ID,
       NAME,
       DATETIME
  FROM ANIMAL_INS
 ORDER BY NAME, DATETIME DESC
```