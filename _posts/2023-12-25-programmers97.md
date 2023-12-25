---
title: "프로그래머스 오라클 Lv.1 평균 일일 대여 요금 구하기"
excerpt: "다음은 어느 자동차 대여 회사에서 대여중인 자동차들의 정보를 담은 CAR_RENTAL_COMPANY_CAR 테이블입니다. CAR_RENTAL_COMPANY_CAR 테이블은 아래와 같은 구조로 되어있으며, CAR_ID, CAR_TYPE, DAILY_FEE, OPTIONS 는 각각 자동차 ID, 자동차 종류, 일일 대여 요금(원), 자동차 옵션 리스트를 나타냅니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 오라클, SQL]

toc: true
toc_sticky: true
 
date: 2023-12-25
last_modified_at: 2023-12-25
---

#### 문제
CAR_RENTAL_COMPANY_CAR 테이블에서 자동차 종류가 'SUV'인 자동차들의 평균 일일 대여 요금을 출력하는 SQL문을 작성해주세요. 이때 평균 일일 대여 요금은 소수 첫 번째 자리에서 반올림하고, 컬럼명은 AVERAGE_FEE 로 지정해주세요.

#### 해결과정
평균값을 구하기 위해 AVGG() 함수를 사용합니다. ROUND() 함수를 사용하여 평균값을 소수 첫번째 자리에서 반올림하고, 컬럼명을 AVERAGE_FEE로 설정합니다.

```sql
SELECT ROUND(AVG(DAILY_FEE), 0) AS AVERAGE_FEE
  FROM CAR_RENTAL_COMPANY_CAR
 WHERE CAR_TYPE = 'SUV'
```