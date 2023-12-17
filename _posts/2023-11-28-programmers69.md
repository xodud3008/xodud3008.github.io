---
title: "아픈 동물 찾기"
excerpt: "ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 오라클]

toc: true
toc_sticky: true
 
date: 2023-11-28
last_modified_at: 2023-11-28
---

#### 문제
동물 보호소에 들어온 동물 중 아픈 동물의 아이디와 이름을 조회하는 SQL 문을 작성해주세요. 이때 결과는 아이디 순으로 조회해주세요.

- 아픈 동물은 INTAKE_CONDITIONdl SICK인 경우

#### 해결과정
나이 정보가 없는 컬럼 개수를 세는 문제입니다. 빈값을 확인하는 IS NULL 조건과 개수를 세는 COUNT(*) 함수를 사용합니다.

```sql
SELECT ANIMAL_ID,
       NAME
  FROM ANIMAL_INS
 WHERE INTAKE_CONDITION = 'SICK
```