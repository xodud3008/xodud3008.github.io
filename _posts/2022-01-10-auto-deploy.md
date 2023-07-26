---
title: "Auto Deploy"
excerpt: "AWS를 이용한 배포 자동화 구성"

categories:
  - Study
tags:
  - [Blog, jekyll, Github, Git, aws, 배포 자동화, auto deploy, 배포]

toc: true
toc_sticky: true
 
date: 2022-01-10
last_modified_at: 2022-01-10
---
### 배포 자동화
한 번의 클릭 혹은 명령어 입력으로 전체 배포 과정을 자동으로 진행하는 것.
* 수동적이고 반복적인 배포 과정을 자동화함으로써 시간 절약
* 휴먼 에러 방지

#### 배포 자동화 파이프라인
![1157](/assets/images/pipe.png)

#### AWS 개발자 도구
AWS에서 제공하는 개발자 도구 섹션에서 제공하는 서비스를 활용하여 배포 자동화 파이프라인을 구축할 수 있다.

##### Code Commit
Source 단계를 구성할 때 CodeCommit 서비스를 이용한다. CodeCommit은 GitHub와 유사한 버전 관리 도구. CodeCommit은 GitHub와 비교했을 때 보안 관련 기능에 강점을 가진다. 소스 코드의 유출이 크게 작용하는 기업에서 매우 중요한 요소.

##### CodeBuild
유닛 테스트, 컴파일, 빌드와 같은 빌드 단계에서 필수적으로 실행되어야 할 작업을 명령어를 통해 실행할 수 있다.

##### CodeDeploy
실행되고 있는 서버 애플리케이션에 실시간으로 변경 사항을 전달할 수 있다. 또한 S3 서비스를 통해 S3 버킷을 통해 업로드된 정적 웹 사이트에 변경 사항을 실시간으로 전달하고 반영할 수 있다.

##### CodePipeline
각 단계를 연결하는 파이프라인을 구축할 때 사용