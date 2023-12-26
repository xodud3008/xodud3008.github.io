---
title: "프로그래머스 오라클 Lv.1 모든 레코드 조회하기"
excerpt: "ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 오라클, SQL]

toc: true
toc_sticky: true
 
date: 2023-12-26
last_modified_at: 2023-12-26
---

#### 문제
동물 보호소에 들어온 모든 동물의 정보를 ANIMAL_ID순으로 조회하는 SQL문을 작성해주세요.

#### 해결과정
모든 레코드를 조회하는 `*`을 사용합니다.

```sql
SELECT *
  FROM ANIMAL_INS
 ORDER BY ANIMAL_ID
```