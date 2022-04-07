---
title:  "First Project 준비단계"
excerpt: "첫번째 프로젝트. 백엔드 개발자. 소셜 로그인 구현을 해보자"

categories:
  - FirstProject
tags:
  - [Blog, jekyll, Github, Git, TIL, Javascript, codestates, firstproject, 첫번째 프로젝트, 코드스테이츠, 백엔드, 프론트엔드]

toc: true
toc_sticky: true
 
date: 2022-04-07
last_modified_at: 2022-04-07
---

### 프로젝트 규칙

#### Team Rules
💡 Commit message : git add . ⇒ git add 파일명 , 커밋메세지 세분화

💡 Branch name : 슬래시 사용

💡 Code convention : prettier 사용

💡 Issue Sharing Guide
  * 질문이 있거나 도움이 필요한 경우 망설이지는 않지만 생각을 충분히 한 후 질문하기
  * 답변은 최선을 다하여 해주기

#### Git Rule
* feature 브랜치(branch)에서 작업
* develop에서 브랜치 생성
* develop과 master에 직접 푸시 X / 풀 리퀘스트 O
* Pull Request 생성 전 리베이스하는 동안 잠재적인 충돌 제거
* 병합 후, 로컬과 원격에 있는 feature 브랜치 삭제
* feature 브랜치의 빌드 검사 / 코드 스타일 체크 등 모든 테스트 통과 검증 후 Pull Request
* .gitignore 사용
* develop과 master 브랜치 보호

#### Git Message Rule
* 동명사X 관사X 명사O
* 부정문 Don't 사용
* 줄 바꿈을 통해서 제목과 본문을 구분
* 제목에 대문자를 사용
* 제목을 마침표 사용 X
* 제목에 명령법(imperative mood) 사용
* 오타 수정 = Fix typo

#### Module Versions
* node (v16.13.0)
* npm (v8.3.0)

#### Code Style
* prettier
  ```
  {
    "tabWidth": 2,
    "endOfLine": "lf",
    "arrowParens": "avoid",
    "singleQuote": true,
    "semi": true,
    "trailingComma": "all",
    "printWidth": 80
  }
  ```

#### Stack
* Javascript
* React
* Mysql
* Node.js
