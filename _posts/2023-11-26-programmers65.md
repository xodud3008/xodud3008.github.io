---
title: "나이 정보가 없는 회원 수 구하기"
excerpt: "프로그래머스 오라클 Lv.1 나이 정보가 없는 회원 수 구하기"

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
USER_INFO 테이블에서 나이 정보가 없는 회원이 몇 명인지 출력하는 SQL문을 작성해주세요. 이때 컬럼명은 USERS로 지정해주세요.

#### 해결과정
나이 정보가 없는 컬럼 개수를 세는 문제입니다. 빈값을 확인하는 IS NULL 조건과 개수를 세는 COUNT(*) 함수를 사용합니다.

```sql
SELECT COUNT(*)
  FROM USER_INFO
 WHERE AGE IS NULL
```