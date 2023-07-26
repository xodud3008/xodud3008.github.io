---
title: "Authentication - oauth"
excerpt: "인증 & 보안. oauth 인증. oauth인증 사용법"

categories:
  - Study
tags:
  - [Blog, jekyll, Github, Git, Javascript, authentication, cookie, session, Node.js, 인증서, 보안, 쿠키, 세션, token, 토큰, oauth]

toc: true
toc_sticky: true
 
date: 2021-12-28
last_modified_at: 2021-12-28
---

### OAuth
OAuth2.0은 인증을 위한 표준 프로토콜의 한 종류. 보안 리소스에 엑세스하기 위해 클라이언트에게 권한을 제공하는 프로세스를 단순화하는 프로토콜 중 한 방법이다.

#### 언제, 왜 쓸까?
서비스별로 회원가입을 하나하나 하는 것이 매우 귀찮아서 자주 사용하는 서비스의 ID 와 Password만 기억해 놓고 해당 서비스를 통해 서셜 로그인을 할 수 있다.
OAuth는 보안상의 이점도 있다. 검증되지 않은 App에서 OAuth를 사용하여 로그인하면, 민감한 정보가 노출될 일이 없고, 인증 권한에 대한 허가를 미리 유저에게 구해야 하기 때문에 더 안전하게 사용할 수 있다.

#### OAuth 용어
* Resource Owner: 엑세스 중인 리소스의 유저.
* Client: Resource owner를 대신하여 보호된 리소스에 엑세스하는 응용프로그램.
* Resource server: Client의 요청을 수락하고 응답할 수 있는 서버.
* Authorization server: Resource server가 액세스 토큰을 발급받는 서버. 클라이언트 및 리소스 소유자를 성공적으로 인증한 후 엑세스 토큰을 발급하는 서버.
* Authorization grant: 클라이언트가 엑세스 토큰을 얻을 때 사용하는 자격 증명의 유형.
* Authorization code: access token을 발급받기 전 필요한 code. 클라이언트 ID로 이 code를 받은 후, client secret과 ccode를 이용해 Access token을 받아온다.
* Access token: 보호된 리소스에 엑세스하는 데 사용되는 credentials. Authorization code와 client secret을 이용해 받아온 이 Access token으로 이제 resource server에 접근할 수 있다.
* Scope: 토큰의 권한을 정의. 주어진 엑세스 토큰을 사용하여 엑세스할 수 있는 리소스의 범위.
