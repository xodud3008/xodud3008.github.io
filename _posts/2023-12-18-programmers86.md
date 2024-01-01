---
title: "프로그래머스 오라클 Lv.1 경기도에 위치한 식품창고 목록 출력하기"
excerpt: "다음은 식품창고의 정보를 담은 FOOD_WAREHOUSE 테이블입니다. FOOD_WAREHOUSE 테이블은 다음과 같으며 WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, TLNO, FREEZER_YN는 창고 ID, 창고 이름, 창고 주소, 전화번호, 냉동시설 여부를 의미합니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 오라클, SQL]

toc: true
toc_sticky: true
 
date: 2023-12-18
last_modified_at: 2023-12-18
---

#### 문제
다음은 식품창고의 정보를 담은 FOOD_WAREHOUSE 테이블입니다. FOOD_WAREHOUSE 테이블은 다음과 같으며 WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, TLNO, FREEZER_YN는 창고 ID, 창고 이름, 창고 주소, 전화번호, 냉동시설 여부를 의미합니다.

FOOD_WAREHOUSE 테이블에서 경기도에 위치한 창고의 ID, 이름, 주소, 냉동시설 여부를 조회하는 SQL문을 작성해주세요. 이때 냉동시설 여부가 NULL인 경우, 'N'으로 출력시켜 주시고 결과는 창고 ID를 기준으로 오름차순 정렬해주세요.

#### 해결과정
NULL일 때 출력하는 값을 지정하는 함수 NVL을 사용합니다.

```sql
-- 코드를 입력하세요
SELECT WAREHOUSE_ID,
       WAREHOUSE_NAME,
       ADDRESS,
       NVL(FREEZER_YN, 'N')
  FROM FOOD_WAREHOUSE
 WHERE ADDRESS LIKE '경기도%'
 ORDER BY WAREHOUSE_ID
```