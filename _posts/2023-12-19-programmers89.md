---
title: "프로그래머스 오라클 Lv.1 조건에 맞는 회원수 구하기"
excerpt: "다음은 어느 의류 쇼핑몰에 가입한 회원 정보를 담은 USER_INFO 테이블입니다. USER_INFO 테이블은 아래와 같은 구조로 되어있으며 USER_ID, GENDER, AGE, JOINED는 각각 회원 ID, 성별, 나이, 가입일을 나타냅니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 오라클, SQL]

toc: true
toc_sticky: true
 
date: 2023-12-19
last_modified_at: 2023-12-19
---

#### 문제
다음은 어느 의류 쇼핑몰에 가입한 회원 정보를 담은 USER_INFO 테이블입니다. USER_INFO 테이블은 아래와 같은 구조로 되어있으며 USER_ID, GENDER, AGE, JOINED는 각각 회원 ID, 성별, 나이, 가입일을 나타냅니다.

USER_INFO 테이블에서 2021년에 가입한 회원 중 나이가 20세 이상 29세 이하인 회원이 몇 명인지 출력하는 SQL문을 작성해주세요.

#### 해결과정
조건의 범위를 설정하기 위해 괄호로 묶어줍니다.

```sql
-- 코드를 입력하세요
SELECT COUNT(*)
  FROM USER_INFO
 WHERE (JOINED >= '2021-01-01' AND JOINED <= '2021-12-31')
   AND (AGE >= 20 AND AGE <= 29)
```