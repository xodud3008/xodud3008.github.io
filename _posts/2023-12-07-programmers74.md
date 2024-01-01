---
title: "프로그래머스 오라클 Lv.4 서울에 위치한 식당 목록 출력하기"
excerpt: "다음은 식당의 정보를 담은 REST_INFO 테이블과 식당의 리뷰 정보를 담은 REST_REVIEW 테이블입니다. REST_INFO 테이블은 다음과 같으며 REST_ID, REST_NAME, FOOD_TYPE, VIEWS, FAVORITES, PARKING_LOT, ADDRESS, TEL은 식당 ID, 식당 이름, 음식 종류, 조회수, 즐겨찾기수, 주차장 유무, 주소, 전화번호를 의미합니다."

categories:
  - codingtest
tags:
  - [코딩테스트, 프로그래머스, 오라클, SQL]

toc: true
toc_sticky: true
 
date: 2023-12-07
last_modified_at: 2023-12-07
---

#### 문제
다음은 식당의 정보를 담은 REST_INFO 테이블과 식당의 리뷰 정보를 담은 REST_REVIEW 테이블입니다. REST_INFO 테이블은 다음과 같으며 REST_ID, REST_NAME, FOOD_TYPE, VIEWS, FAVORITES, PARKING_LOT, ADDRESS, TEL은 식당 ID, 식당 이름, 음식 종류, 조회수, 즐겨찾기수, 주차장 유무, 주소, 전화번호를 의미합니다.

REST_INFO와 REST_REVIEW 테이블에서 서울에 위치한 식당들의 식당 ID, 식당 이름, 음식 종류, 즐겨찾기수, 주소, 리뷰 평균 점수를 조회하는 SQL문을 작성해주세요. 이때 리뷰 평균점수는 소수점 세 번째 자리에서 반올림 해주시고 결과는 평균점수를 기준으로 내림차순 정렬해주시고, 평균점수가 같다면 즐겨찾기수를 기준으로 내림차순 정렬해주세요.

#### 해결과정
 - REST_INFO 테이블과 REST_REVIEW테이블을 조인할 수 있는 REST_ID 컬럼을 기준으로 조인합니다.
 - 평균을 구하는 AVG 함수와 GROUP BY 절을 사용합니다.


```sql
SELECT A.REST_ID,
           A.REST_NAME,
           A.FOOD_TYPE,
           A.FAVORITES,
           A.ADDRESS,
           ROUND(AVG(B.REVIEW_SCORE),2) AS SCORE
      FROM REST_INFO A
      JOIN REST_REVIEW B
        ON A.REST_ID = B.REST_ID
     WHERE A.ADDRESS LIKE '서울%'
     GROUP BY A.REST_ID,
              A.REST_NAME,
              A.FOOD_TYPE,
              A.FAVORITES,
              A.ADDRESS
     ORDER BY AVG(B.REVIEW_SCORE) DESC,
              A.FAVORITES DESC
```