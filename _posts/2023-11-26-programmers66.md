---
title: "동물의 아이디와 이름"
excerpt: "프로그래머스 오라클 Lv.1 동물의 아이디와 이름, 프로그래머스 SQL 문제, 프로그래머스 오라클, 동물의 아이디와 이름, 오라클 정렬, 오라클 코딩테스트"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, oracle]

toc: true
toc_sticky: true
 
date: 2023-11-26
last_modified_at: 2023-11-26
---

#### 문제
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

동물 보호소에 들어온 모든 동물의 아이디와 이름을 ANIMAL_ID순으로 조회하는 SQL문을 작성해주세요. SQL을 실행하면 다음과 같이 출력되어야 합니다.

|ANIMAL_ID|NAME|
|--|--|
|A349996|Sugar|
|A350276|Jewel|
|A350375|Meo|
|A352555|Harley|

(생락)...

#### 해결과정
ORDER BY를 사용하여 정렬 조건을 설정하는 문제입니다. ANMIAL_ID 순으로 조회하라고만 되어 있으므로 오름차순 정렬 ASC를 사용합니다. ASC는 기본값이라 생략 가능합니다.

```sql
SELECT ANIMAL_ID,
       NAME
  FROM ANIMAL_INS
 ORDER BY ANIMAL_ID
```