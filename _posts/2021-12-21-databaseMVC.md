---
title:  "데이터베이스 MVC & ORM"
excerpt: "데이터베이스 MVC, ORM"

categories:
  - TIL
tags:
  - [Blog, jekyll, Github, Git, TIL, Javascript, Database, schema, relation, relation database, SQL, NoSQL, MVC, ORM]

toc: true
toc_sticky: true
 
date: 2021-12-22
last_modified_at: 2021-12-22
---
### 데이터베이스 MVC & ORM
#### MVC(Model-View-Controller)
사용자 인터페이스, 데이터 및 논리 제어를 구현하는데 사용되는 소프트웨어 디자인 패턴. 

소프트웨어의 비지니스 로직과 화면을 구분하는데 중점을 둔다. 이러한 관심사 분리를 통해 효율적으로 코드를 관리 할 수 있다.

* Model: 데이터의 정보를 갖고 있다. 자신이 데이터를 갖고 있거나 데이터베이스와 연결되어 데이터를 가져올 수 있다. 이 데이터로 컨트롤러와 상호작용 한다.
* View: 레이아웃과 화면 처리. 표시할 데이터를 컨트롤러에 요청하고 모델에서 받아 다시 컨트롤로가 전달
* Controller: 모델과 뷰로 명령 라우팅. 앱의 사용자로부터 입력에 대한 응답으로 Model 또는 View를 업데이트하는 로직 포함

<img src="/assets/images/datamvc.png" width="80%" height="50%" title="dbmvc" alt="사진"/>

#### ORM(Object Relation Mapping)
객체와 관계형 데이터베이스의 데이터를 자동으로 매핑 해준다.
자바스크립트 객체와 관계형 데이터베이스의 불일치를 자동으로 해결
<img src="/assets/images/orm.png" width="80%" height="30%" title="dbmvc" alt="사진"/>

##### 장점
* 객체 지향적 코드를 사용해 직관적
* 재사용 및 유지보수 편리
* DBMS 종속성 낮아짐
##### 단점
* ORM만으로 서비스 구현 어려움
* 프로시저가 많은 시스템에서 사용 어려움

##### 참고 [ORM이란](http://www.incodom.kr/ORM#h_702209f3f35878a32ee91352ddc6bbe7)