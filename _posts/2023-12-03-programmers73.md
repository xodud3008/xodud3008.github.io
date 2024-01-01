---
title: "프로그래머스 오라클 Lv.4 보호소에서 중성화한 동물"
excerpt: "ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 오라클, SQL]

toc: true
toc_sticky: true
 
date: 2023-12-03
last_modified_at: 2023-12-03
---

#### 문제
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

ANIMAL_OUTS 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. ANIMAL_OUTS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. ANIMAL_OUTS 테이블의 ANIMAL_ID는 ANIMAL_INS의 ANIMAL_ID의 외래 키입니다.

보호소에서 중성화 수술을 거친 동물 정보를 알아보려 합니다. 보호소에 들어올 당시에는 중성화1되지 않았지만, 보호소를 나갈 당시에는 중성화된 동물의 아이디와 생물 종, 이름을 조회하는 아이디 순으로 조회하는 SQL 문을 작성해주세요.

- 중성화를 거치지 않은 동물은 성별 및 중성화 여부에 Intact, 중성화를 거친 동물은 Spayed 또는 Neutered라고 표시되어있습니다.

#### 해결과정
ANIMAL_INS 테이블과 ANIMAL_OUTS테이블을 조인할 수 있는 ANIMAL_ID 컬럼을 기준으로 조인합니다.

보호소에 들어왔을때 중성화 되지 않은 Intact 조건과 보호소에서 중성화한 Spayed, Neutered 조건을 통해 문제에 맞는 데이터를 조회합니다.


```sql
SELECT A.ANIMAL_ID,
       A.ANIMAL_TYPE,
       A.NAME
  FROM ANIMAL_INS A JOIN ANIMAL_OUTS B
    ON A.ANIMAL_ID = B.ANIMAL_ID
 WHERE A.SEX_UPON_INTAKE LIKE 'Intact%'
   AND (B.SEX_UPON_OUTCOME LIKE 'Neutered%'
        OR B.SEX_UPON_OUTCOME LIKE 'Spayed%')
 ORDER BY ANIMAL_ID
```