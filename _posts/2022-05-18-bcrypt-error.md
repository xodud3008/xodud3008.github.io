---
title: "bcrypt 에러"
excerpt: "sequelize update시 수정은 되지만 500에러가 뜨는 현상"

categories:
  - ErrorHandling
tags:
  - [Blog, jekyll, Github, Git, Javascript, bcrypt, bcrypt 오류, bcrypt 모듈 에러]

toc: true
toc_sticky: true
 
date: 2022-05-18
last_modified_at: 2022-05-18
---

#### 오류 내용

![제목](/assets/images/bcrypt.png)

bcrypt를 적용하고 서버를 실행하면 bcrypt 모듈 에러가 가끔씩 생긴다. bcrypt가 C 언어로 되어 있어서 Node.js에서 인식하기 위해서는 binary로 바꿔줘야 하는데 Node 버전에 따라 에러가 생기는 경우가 종종 있다.

#### 해결방법
두가지 해결방법이 있다.
1. bcrypt 버전을 낮춰서 설치한다.
2. `npm rebuild bcrypt --build-from-source`

**문제 해결 :exclamation::exclamation:**