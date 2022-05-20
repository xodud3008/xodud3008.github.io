---
title:  "First Project Database settings"
excerpt: "첫번째 프로젝트. 백엔드 개발자. 시퀄라이저를 이용한 데이터베이스 구축. 테이블 간 관계설정"

categories:
  - Project
tags:
  - [Blog, jekyll, Github, Git, TIL, Javascript, codestates, firstproject, 첫번째 프로젝트, 코드스테이츠, 백엔드, 프론트엔드, Database, sequelize, sequelize-cli, seed, migration, 시퀄라이즈, 마이그레이션, 시드, mysql, 시퀄라이즈 관계설정,모델 생성, 시퀄라이즈 사용 방법]

toc: true
toc_sticky: true
 
date: 2022-04-08
last_modified_at: 2022-04-08
---

#### 1. sequelize 사용 환경 설정
```
// sequelize 설치
$ npm install --save sequelize

// sequelize cli 설치
$ npm install --save-dev sequelize-cli
```

#### 2. 모델 생성
sequelize cli를 통해 모델 생성

```
$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

// 컬럼명:데이터 타입으로 넣어준다.
```

#### 3. 마이그레이션
sequelize cli로 만든 모델 데이터베이스에 적용. 데이터베이스를 먼저 생성 후 마이그레이션 해야 한다. 
```
npx sequelize-cli db:migrate
```

* 테이블 명이 자동으로 복수형으로 만들어진다.(e.g. name => names)
* id, createdAt, updatedAt컬럼은 sequelize에서 자동으로 만들어준다.(옵션 설정으로 삭제 가능)
  ```javascript
  user.init(
    // init 설정에서 timestamps를 false로 설정하면 자동 생성 안됨
    {
      timestamps: false,
    }
  ```

#### 4. sequelize 에서 테이블 관계 설정(Model 파일에서)
  * 1:1 관계(hasOne - belongsTo)
    * 한명의 유저는 하나의 프로필을 갖는다.
      ```javascript
      // user 모델에서 profile 연결 설정
      static associate(models) {
        // define association here
        models.user.hasOne(models.profile, {
          foreignKey: "user_id",
          sourceKey: "id",
        });
      }

      // profile 모델에서 user 연결 설정
      static associate(models) {
        // define association here
        models.user.belongsTo(models.user, {
          foreignKey: "user_id",
          targetKey: "id",
        });
      }
      ```

  * 1:N 관계(hasMany - belongsTo)
    * 하나의 interest는 여러개의 group를 갖는다
      ```javascript
      // interest 모델에서 group 연결 설정
      static associate(models) {
        // define association here
        models.interest.hasMany(models.group, {
          foreignKey: "interest_id",
          sourceKey: "id",
        });
      }

      // gorup 모델에서 interest 연결 설정
      static associate(models){
        models.group.belongsTo(models.interest, {
          foreignKey: "interest_id",
          targetKey: "id",
        });
      }
      ```

  * N:M 관계
    * 한명의 user는 여러개의 team에 가입할 수 있다. 하나의 team에 여러명의 user가 가입할 수 있다.(belongsToMany - belongsToMany)
      ```javascript
      // team 모델에서 user 연결 설정
      static associate(models) {
        // define association here
        models.team.belongsToMany(models.user, {
          through: "user_team",
          foreignKey: "team_id",
        });
      }

      // user 모델에서 team 연결 설정
      static associate(models){
        models.user.belongsToMany(models.team, {
          through: "user_team",
          foreignKey: "user_id",
        });
      }
      ```

#### 5. seeder 생성
##### 더미 데이터를 넣을 수 있는 seeder 시작.
```
npx sequelize seed:generate --name 모델명
```

생성된날짜-모델명의 js 파일이 생성된다. Up은 실행 했을 때, Down은 실행 취소 했을 때 작동하는 코드.

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
```

##### seeder를 작성 한 후 데이터베이스에 적용


* 전체 seed 실행
`$ npx sequelize-cli db:seed:all`

* seed 한개 실행
`$ npx sequelize db:seed --seed 파일명(숫자까지 포함한 full 파일명)`

:exclamation: migration을 한 뒤 seed를 실행해야 한다.