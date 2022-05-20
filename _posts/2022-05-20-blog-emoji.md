---
title: "github 블로그 이모지 적용 안되는 현상"
excerpt: "마크다운 문서로 보면 적용 되지만 업로드 했을 때 화면에서는 텍스트로 출력되는 현상"

categories:
  - Error Handling
tags:
  - [Blog, jekyll, Github, Git, git blog, 깃허브 블로그, 깃허브 블로그 이모지, 깃허브 블로그 이모지 적용 안됨]

toc: true
toc_sticky: true
 
date: 2022-05-20
last_modified_at: 2022-05-20
---

#### 오류 내용
깃허브 블로그에 이모지를 적용하면 마크다운으로 보면 이모지가 출력되지만 업로드 했을 때 텍스트로 출력되는 현상. 이 문제를 해결하기 위해 띄워쓰기도 바꿔보고 앞에 강조 표시도 붙여보고 수많은 시도를 했지만 고치지 못했다... 그러다 우연히 보게 된 Jekyll plugins 추가. 한번에 해결되었다.

#### 해결방법
**_config.yml에 plugins 추가**
_config.yml 파일에서 plugins를 검색해 `- jemoji`를 추가한다. 이모지 출력이 잘 된다. :thumbsup:

