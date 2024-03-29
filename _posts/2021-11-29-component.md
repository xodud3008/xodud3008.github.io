---
title: "컴포넌트 단위로 개발하기"
excerpt: "컴포넌트 단위로 개발하기"

categories:
  - Javascript
tags:
  - [Blog, jekyll, Github, Git, Javascript, React, Styled-component, CSS, CDD,]

toc: true
toc_sticky: true

date: 2021-11-29
last_modified_at: 2021-11-29
---

## Component Driven Development(CDD)

### 컴포넌트 단위 개발

디자인과 개발 단계에서부터 재사용할 수 있는 UI 컴포넌트를 만들어 효율적으로 페이지를 구성하는 방법

#### Storybook

CDD가 트렌드로 자리잡으면서 이를 지원하는 도구 중 하나인 Component Explorer(컴포넌트 탐색기) 등장. 많은 UI 개발도구 중 하나인 Storybook

##### 특징

* 각각의 컴포넌트들을 따로 볼 수 있게 구성해주어 한번에 하나의 컴포넌트에서 작업 가능
* 전체 UI를 한눈에 보고 개발할 수 있음
* 재사용성 확대를 위한 컴포넌트 문서화
* 자동으로 컴포넌트를 시각화하여 시뮬레이션할 수 있는 다양한 테스트 상태 확인 가능
* 사전에 버그 방지, 테스트 및 개발 속도 향상
* 독립적인 개발환경에서 실행 
  - 애플리케이션의 다양한 상황에 구애받지 않고 UI 컴포넌트 집중적으로 개발할 수 있음

##### 주요 기능

* UI 컴포넌트들을 카탈로그 화하기
* 컴포넌트 변화를 Stories로 저장
* 핫 모듈 재 로딩과 같은 개발 툴 경험을 제공
* 리액트를 포함한 다양한 뷰 레이어 지원

##### 설치방법

https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/

   ### CSS in JS 방법론

인터넷이 만들어진 이후 기술의 발달과 다양한 환경(디바이스)에서 인터넷 사용. 프로젝트의 규모나 복잡도가 커지고 함께 작업하는 팀원들의 수 증가. **구조화된 CSS 필요성 대두**

#### CSS 구조화를 위한 다양한 시도

##### CSS 전처리기(Css Prreprocessor)

* CSS가 구조적으로 작성될 수 있게 도움을 주는 도구
* CSS 전처리기 자체만으로는 웹서버가 인지하지 못함
  * 각 CSS 전처리기에 맞는 컴파일러 사용
  * 컴파일러 사용하게 되면 실제로 사용하는 CSS 문서로 변환

* 이를 통해 CSS 파일들을 잘 구조화 할 수 있게 되었고, 최소한 CSS 파일을 몇개의 작은 파일로 분리할 수 있는 방법이 생김

###### SASS(Syntactically Awesome Style Sheets)

가장 유명한 CSS 전처리기.  CSS를 확장해주는 스크립팅 언어. CSS를 만들어주는 자바스크립트처럼 특정 속성(ex. color, margin, width 등)의 값(ex. #ffffff, 25rem, 100px 등)을 변수로 선언하여 재사용할 수 있도록 함. SASS는 SCSS 코드를 읽어서 전처리한 다음 컴파일해서 전역 CSS 번들 파일을 만들어주는 전처리기의 역할.

SASS가 `CSS 구조화`를 해결해 주는 장점이 있지만 전처리기가 내부에서 어떤 작업을 하는지는 알지 못한 채, 스타일이 겹치는 문제를 해결하기 위핸 단순히 계층 구조를 만들어 내는 것에 의지. 그 결과 컴파일된 CSS의 용량은 어마어마하게 커지게 되었다.

```javascript
// SASS 변수 사용 예제
// 반복되는 코드가 있으면 변수를 활용해서 재사용. 변수 선언할 때는 $ 기호 활용

$base-color: rgb(198, 83, 140, 0.88)
.alert{
	border: 1px solid $border-dark
}
.button{
	color: $border-dark
```

##### CSS 방법론

CSS 전처리기의 문제를 보완하기 위해 BEM, OOCSS, SMACSS 같은 CSS 방법론 대두

###### 지향점

* 코드의 재사용
* 코드의 간결화(유지보수 용이)
* 코드의 확장성
* 코드의 예측성(클래스 명으로 의미 예측)

##### 대표적 CSS 방법론 BEM

Block, Element, Modifier로 구분하여 클래스명을 작성하는 방법. Block, Element, Modifier 각각 -와 __로  구분.

클래스명은 재사용을 용이하게 하며, HTML/CSS/SASS 파일에서도 더 일관된 코딩 구조를 만들어 준다.

하지만 클래스명 선택자가 장황해지고, 긴 클래스명 때문에 마크업이 불필요하게 커지며, 재사용하려고 할 때마다 모든 UI 컴포넌트를 명시적으로 확장해야 하는 문제점 발생.

**SASS와 BEM에서 캡슐화를 위해서는 개발자들이 유일한 클래스명을 선택하는 것에 의존할 수 밖에 없음**

```javascript
// BEM 클래스명 작성 방법
// Block		Element.    Modifier
	.header__navigation--navi-text {
		color: red;
	}

```

##### Styled-component

CSS를 컴포넌트 영역으로 불러들이기 위해서(캡슐화를 위해) CSS-in-JS가 탄생. 대표적으로 Styled-component가 있다. Styled-component를 사용하면 기존 CSS 문법으로도 스타일 속성이 추가된 React 컴포넌트를 만들 수 있다.

```javascript
//Styled-component 예시
const Button = styled.a`
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
`;
```

###### Styled-component 특징

* **Automatic critical CSS**: 화면에 어떤 컴포넌트가 랜더링 되었는지 추적해서 해당 컴포넌트에 대한 스타일 자동 삽입.
* **No class name bugs**: 스스로 유니크한 `className` 을 생성. 이는 `className` 의 중복이나 오타로 인한 버그를 줄여준다.
* **Easier deletion of CSS**: 모든 스타일 속성이 특정 컴포넌트와 연결되어 있기 때문에 컴포넌트를 더 이상 사용하지 않아 삭제할 경우 이에 대한 스타일 속성도 함께 삭제
* **Simple dynamic styling**: `className`을 일일이 수동으로 관리할 필요 없이 React 의 props 나 전역 속성을 기반으로 컴포넌트에 스타일 속성을 부여하기 때문에 간단하고 직관적
*   **Painless maintenance**: 컴포넌트에 스타일을 상속하는 속성을 찾아 다른 CSS 파일들을 검색하지 않아도 되기 때문에 코드의 크기가 커지더라도 유지보수가 어렵지 않음
*  **Automatic vendor prefixing**: 개별 컴포넌트마다 기존의 CSS 를 이용하여 스타일 속성을 정의하면 될 뿐입니다. 이외의 것들은 Styled Component 가 알아서 처리

###### 설치방법

```
# with npm
$ npm install --save styled-components
---------------------------------------------------------------------------
# with yarn
$ yarn add styled-components
```

Styled-Component는 Package.json에 다음 코드를 추가하도록 권장

```javascript
{
	"resolutions": {
		"styled-components": "^5"
	}
}
```

###### 사용방법

1. 스타일을 정의함과 동시에 해당 스타일을 가진 컴포넌트를 만들 수 있다.

```javascript
import styled from "styled-components";

// <h1> 태그를 렌더링 할 title component를 만듭니다.
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function App() {
  return (
  	<Title>Hello World!</Title>
  );
}
```

2. 스타일 속성을 지닌 컴포넌트를 정의할 때 함수를 전달하고, 그 함수 안에서 props를 사용할 수도 있다.

```javascript
// Button component
...
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
...

// App component
...
  <Button>Normal</Button>
  <Button primary>Primary</Button>
...
```

3. 같은 스타일 속성을 지닌 여러개의 컴포넌트들 중 몇 개의 컴포넌트에는 약간의 변화를 주고 싶은 경우 상속받고자 하는 스타일 속성을 지닌 컴포넌트를 `styled()`로 감싼 뒤, 변경할 속성만 새로 정의

```javascript
// 기존의 Button 컴포넌트에 Tomato 컴포넌트만을 위한 새로운 속성 추가
const Tomato = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```

##### useRef

useRef를 사용해야 하는 경우(DOM 엘리먼트의 주소값을 활용해야 하는 경우)

* focus
* text selection
* media playback
* 애니메이션 적용
* d3.js, greensock등 DOM 기반 라이브러리 활용

React는 이런 예외적인 상황에서 useRef으로 DOM 노드, 엘리먼트, 그리고 리액트 컴포넌트 주소값을 참조할 수 있다.

```javascript
const 주소값을_담는_그릇 = useRef(참조자료형)
// 이제 주소값을_담는_그릇 변수에 어떤 주소값이든 담을 수 있습니다.
return (
    <div>
      <input ref={주소값을_담는_그릇} type="text" />
        {/* React에서 사용 가능한 ref라는 속성에 주소값을_담는_그릇을 값으로 할당하면*/}
        {/* 주소값을_담는_그릇 변수에는 input DOM 엘리먼트의 주소가 담깁니다. */}
        {/* 향후 다른 컴포넌트에서 input DOM 엘리먼트를 활용할 수 있습니다. */}
    </div>
  );
```

 이 주소값은 컴포넌트가 re-render 되더라도 바뀌지 않는다. 이 특성을 활용하여 아래의 제한된 상황에서 useRef를 활용할 수 있다.

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

