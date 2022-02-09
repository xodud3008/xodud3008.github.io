---
title: "Authentication - Token"
excerpt: "인증 & 보안. 토큰 인증, 토큰 사용법"

categories:
  - TIL
tags:
  - [Blog, jekyll, Github, Git, TIL, Javascript, authentication, cookie, session, Node.js, 인증서, 보안, 쿠키, 세션, token, 토큰]

toc: true
toc_sticky: true
 
date: 2021-12-28
last_modified_at: 2021-12-28
---
#### Token 기반 인증
매 요청시 데이터베이스를 확인하는 세션 기반 인증의 불편함을 해결하기 위해 토큰 기반 인증 사용.

**토큰은 유저 정보를 암호화한 상태로 담을 수 있고, 암호화했기 때문에 클라이언트에 담을 수 있다.**

##### JWT(JSON Wdb Token)
* Access Token : 보호된 정보들에 접근할 수 있는 권한부여에 사용.
* Refresh Token : 새로운 Access Token을 발급받는데 사용. 다시 로그인할 필요가 없다.

##### JWT 구조
.으로 나우어진 3 부분이 존재

<img src="/assets/images/jwt.png" width="100%" height="50%" title="store" alt="사진"/>

1. Header : 어떤 종류의 토큰인지, 어떤 알고리즘으로 sign 할지 적혀 있다. 이 제이슨 객체를 base64 방식으로 인코딩하면 첫번째 부분 완성
```
{
    "alg": "HS256",
    "typ": "JWT
}
```
2. Payload : 정보가 담겨있는 곳. 어떤 정보에 접근 가능한지에 대한 권한을 담을 수 있고, 사용자의 유저 이름 등 필요한 데이터는 이곳에 담아 Sign 시킨다. 민감한 정보는 되도록 담지 않는 것이 좋다. base64로 인코딩하면 두번째 블록 완성
```
{
    "sub": "someInformation",
    "name": "phillip",
    "iat": 151623391
}
```
3. Signature : Header, Payload 부분이 완성되면, 원하는 비밀 키를 사용하여 암호화. 만약 HMAC SHA256 알고리즘을 사용하면 아래와 같은 방식으로 signature 생성.
```
HMACSHA256(base64UrlEncode(header) + '.' + base64UrlEncode(payload). secret);
```

##### 토큰기반 인증 절차
<img src="/assets/images/jwt2.png" width="100%" height="50%" title="store" alt="사진"/>

##### 토큰기반 인증의 장점
* Statelessness & Scalability(무상태성 & 확장성)
  * 서버는 클라이언트에 대한 정보를 저장할 필요 없다.(토큰 해독이 되는지만 판단)
  * 클라이언트는 새로운 요청을 보낼 때마다 토큰을 헤더에 포함시키면 된다.(같은 토큰으로 여러 서버에서 인증 가능)
* 안전하다
  * signature를 받은 토큰을 사용하고, 암호화 키를 노출할 필요 없음.
* 어디서나 생성 가능
  * 토큰을 확인하는 서버가 토큰을 만들어야 하는 법이 없다.
  * 토큰 생성용 서버를 만들거나, 다른 회사에서 토큰 관련 작업을 맡기는 것 등 다양한 활용 가능.
* 권한 부여에 용이
  * 토큰의 payload 안에 어떤 정보에 접근 가능한지 정할 수 있다.