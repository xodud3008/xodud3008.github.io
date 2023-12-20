---
title: "12세 이하인 여자 환자 목록 출력하기"
excerpt: "다음은 종합병원에 등록된 환자정보를 담은 PATIENT 테이블입니다. PATIENT 테이블은 다음과 같으며 PT_NO, PT_NAME, GEND_CD, AGE, TLNO는 각각 환자번호, 환자이름, 성별코드, 나이, 전화번호를 의미합니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 오라클, SQL]

toc: true
toc_sticky: true
 
date: 2023-12-20
last_modified_at: 2023-12-20
---

#### 문제
다음은 종합병원에 등록된 환자정보를 담은 PATIENT 테이블입니다. PATIENT 테이블은 다음과 같으며 PT_NO, PT_NAME, GEND_CD, AGE, TLNO는 각각 환자번호, 환자이름, 성별코드, 나이, 전화번호를 의미합니다.

PATIENT 테이블에서 12세 이하인 여자환자의 환자이름, 환자번호, 성별코드, 나이, 전화번호를 조회하는 SQL문을 작성해주세요. 이때 전화번호가 없는 경우, 'NONE'으로 출력시켜 주시고 결과는 나이를 기준으로 내림차순 정렬하고, 나이 같다면 환자이름을 기준으로 오름차순 정렬해주세요.

#### 해결과정
나이가 12세 이하, 성별이 여성인 환자를 나이 순으로 내림차순, 이름 순으로 오름차순 정렬합니다.

```sql
-- 코드를 입력하세요
SELECT PT_NAME,
       PT_NO,
       GEND_CD,
       AGE,
       NVL(TLNO,'NONE') AS TLNO
  FROM PATIENT
 WHERE AGE <= 12
   AND GEND_CD = 'W'
 ORDER BY AGE DESC, 
          PT_NAME
```