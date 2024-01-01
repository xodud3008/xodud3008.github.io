---
title: "프로그래머스 오라클 Lv.1 흉부외과 또는 일반외과 의사 목록 출력하기"
excerpt: "다음은 종합병원에 속한 의사 정보를 담은DOCTOR 테이블입니다. DOCTOR 테이블은 다음과 같으며 DR_NAME, DR_ID, LCNS_NO, HIRE_YMD, MCDP_CD, TLNO는 각각 의사이름, 의사ID, 면허번호, 고용일자, 진료과코드, 전화번호를 나타냅니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 오라클, SQL]

toc: true
toc_sticky: true
 
date: 2023-12-12
last_modified_at: 2023-12-12
---

#### 문제
다음은 종합병원에 속한 의사 정보를 담은DOCTOR 테이블입니다. DOCTOR 테이블은 다음과 같으며 DR_NAME, DR_ID, LCNS_NO, HIRE_YMD, MCDP_CD, TLNO는 각각 의사이름, 의사ID, 면허번호, 고용일자, 진료과코드, 전화번호를 나타냅니다.

DOCTOR 테이블에서 진료과가 흉부외과(CS)이거나 일반외과(GS)인 의사의 이름, 의사ID, 진료과, 고용일자를 조회하는 SQL문을 작성해주세요. 이때 결과는 고용일자를 기준으로 내림차순 정렬하고, 고용일자가 같다면 이름을 기준으로 오름차순 정렬해주세요.

#### 해결과정
두 조건을 모두 만족할 수 있도록 OR을 사용하고, 날짜 형식을 맞추기 위해 TO_CHAR() 함수를 사용합니다.

```sql
SELECT DR_NAME,
       DR_ID,
       MCDP_CD,
       TO_CHAR(HIRE_YMD, 'YYYY-MM-DD') AS HIRE_YMD
  FROM DOCTOR
 WHERE MCDP_CD = 'CS' OR MCDP_CD = 'GS'
 ORDER BY HIRE_YMD DESC,
          DR_NAME
```