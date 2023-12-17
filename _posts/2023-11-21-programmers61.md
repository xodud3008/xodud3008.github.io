---
title: "어린 동물 찾기"
excerpt: "프로그래머스 오라클 Lv.1 어린 동물 찾기"

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, oracle]

toc: true
toc_sticky: true
 
date: 2023-11-21
last_modified_at: 2023-11-21
---

#### 문제
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

동물 보호소에 들어온 동물 중 젊은 동물1의 아이디와 이름을 조회하는 SQL 문을 작성해주세요. 이때 결과는 아이디 순으로 조회해주세요.

젊은 동물은 INTAKE_CONDITION이 AGED가 아닌 경우를 뜻함

#### 해결과정
같지 않다를 의미하는 `<>` 부호 활용

```sql
SELECT ANIMAL_ID, 
       NAME
  FROM ANIMAL_INS
 WHERE INTAKE_CONDITION <> 'AGED'
 ORDER BY ANIMAL_ID
```