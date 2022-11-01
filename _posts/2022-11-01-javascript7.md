---
title: "Javascript 7일차"
excerpt: "자바스크립트 Form, BOM"

categories:
  - Javascript
tags:
  - [Javascript, Javascript 개념, Javascript BOM, Javascript Form, BOM, Form]

toc: true
toc_sticky: true
 
dat8: 2022-11-01
last_modified_at: 2022-11-01
---

# 폼, BOM

### 폼에 접근하는 방법

- id, class를 사용해 폼 요소에 접근
    - DOM에서 방식과 유사
- name 값을 사용해 폼 요소에 접근
    - id, class 값이 없고 name 속성만 있을 때 사용
    - form 태그에 name 속성이 지정되어 있어야 하고, form 태그에 포함된 요소에도 name 속성이 있어야 함
    - 최상위 form 태그의 name 속성 부터 하위 요소 name 속성으로 내려가야 함
- form 배열을 사용해 폼 요소에 접근
    - `document.forms` ⇒ HTMLCollection[] (폼 배열)
    - `element` 폼 안에 있는 폼 요소를 모두 가져오는 속성. form 태그 안에 포함된 요소에 접근할때 사용

### 폼 요소 입력값 검증

- 자바스크립트 방식
    - 해당 input 태그에 접근해 JS로 조건을 걸어 form validation
        - `select()` 사용자가 기존에 입력한 값을 선택
        - `focus()` 기존에 입력한 값을 지우고 그 자리에 커서 위치
- 태그 자체에서 검증
    - HTML5의 `<input>` 태그에 폼 검증을 위한 여러 유형, 속성 추가
        
        
        | 유형 | 설명 |
        | --- | --- |
        | `<input type=”email”>` | 이메일 주소 검증 |
        | `<input type=”tel”>` | 전화번호 검증 |
        | `<input type=”url”>` | 사이트 주소 검증. http:로 시작하지 않으면 오류 표시 |
        
        | 속성 | 설명 |
        | --- | --- |
        | autocomplete | 자동 완성 기능 |
        | autofocus | 해당 필드에 마우스 커서 자동으로 표시 |
        | placeholder | 필드 안에 힌트 표시 |
        | required | 필수 입력 항목으로 지정 |

### 다양한 폼 요소

- 선택 목록 및 옵션 항목
    - `<select>` 태그와 `<option>` 태그를 사용해 여러 항목 중 원하는 항목을 선택할 수 있게 하는 요소
    - `document.testForm.major.options` ⇒ `<testForm>` 태그 안의 major `<select>` 태그의 `<option>` 태그들
        - 인덱스로 특정 `<option>`에 접근 ⇒ `document.testForm.major.options[4]`
        - `document.testForm.major.options[4].innerText` ⇒ 화면에 표시하는 내용에 접근
        - `document.testForm.major.options[4].value` ⇒ 서버에 넘겨주는 값
- 선택 목록에서 사용자가 선택한 옵션 항목
    - `selectedIndex` 속성 ⇒ 인덱스 값 활용
    - `document.testForm.major.options.selectedIndex` ⇒ 사용자가 선택한 값의 인덱스 확인
- 라디오 버튼, 체크 상자
    - 라디오 버튼 : 여러 항목 중 하나만 선택
        - `document.testForm.subject` ⇒ subject를 name요소로 가진 라디오 버튼 요소
        - 라디오 버튼은 같은 name 값을 가진 요소가 여러 개이기 때문에 `RadioNodeList` 형태로 저장
    - 체크 상자 : 여러 항목 선택 가능
        - 서로 다른 name 속성을 갖고 있기 때문에 폼 이름 뒤에 체크 상자 이름 연결해서 접근
        - `document.testForm.mailing1` ⇒ `<testForm>` 태그의 name = mailing1 체크 상자 접근
    - 라디오 버튼, 체크 상자 요소 중 checked 요소 ⇒ 선택하면 true / 아니면 false

### BOM

- 브라우저 객체 모델(BOM)
    - 자바스크립트 프로그램을 통해 브라우저 창을 관리할 수 있도록 브라우저 요소를 객체화해 놓은 것
    - 브라우저 창이 열리면 가장 먼저 window 객체 생성 ⇒ 각 요소에 해당하는 하위 객체 생성
        
        | 객체 | 설명 |
        | --- | --- |
        | window | 브라우저 창이 열릴 때 하나씩 만들어지는 최상위 객체 |
        | document | 웹 문서에서 `<body>` 태그를 만나면 만들어지는 객체. HTML 정보를 갖고 있음 |
        | history | 현재 창에서 사용자의 방문 기록 저장 |
        | location | 현재 페이지에 대한 URL 정보 |
        | navigator | 현재 사용 중인 웹 브라우저 정보 |
        | screen | 현재 사용 중인 화면 정보 |

- window 객체
    - 웹 브라우저 상태를 제어하는 객체. 자바스크립트객체 중 최상위이자 기본이 되는 객체
    - 여러가지 속성이 있고 객체 이름 뒤에 마침표(.)를 붙여서 사용
        
        | 속성 | 설명 |
        | --- | --- |
        | document | 브라우저 창에 표시된 웹 문서에 접근 |
        | frameElement | 현재 창이 다른 요소 안에 표함되어 있으면 그 요소 반환. 포함되어 있지 않으면 null 반환 |
        | innerHeight | 내용 영역 높이 |
        | innerWidth | 내용 영역 너비 |
        | localStorage | 웹 브라우저에서 데이터를 저장하는 로컬 스토리지 반환 |
        | location | window 객체의 위치 / 현재 url |
        | name | 브라우저 창의 이름을 가져오거나 수정 |
        | outerHeight | 브라우저 창의 바깥 높이 |
        | outerWidth | 브라우저 창이 바깥 너비 |
        | pageXOffset / scrollX | 스크롤 했을 때 화면이 수평으로 이동하는 픽셀 수 |
        | pageYOffset / scrollY | 스크롤 했을 때 화면이 수직으로 이동하는 픽셀 수 |
        | parent | 현재 창이나 서브 프레임의 부모 프레임 |
        | screenX | 브라우저 창의 왼쪽 테두리가 모니터 왼쪽 테두리에서부터 떨어져 있는 거리 |
        | screenY | 브라우저 창의 위쪽 테두리가 모니터 위쪽 테두리에서부터 떨어져 있는 거리 |
        | sessionStorage | 웹 브라우저에서 데이터를 저장하는 세션 스토리지 반환 |
    
    - 함수
            
        | 함수 | 설명 |
        | --- | --- |
        | alert() | 알림 창 표시 |
        | blur() | 창에서 포커스 제거 |
        | close() | 현재 열려 있는 창 닫기 |
        | confirm() | 확인, 취소가 있는 확인 창 |
        | focus() | 현재 창에 포커스 |
        | moveBy() | 현재 창을 지정한 크키만큼 이동 |
        | moveTo() | 현재 창을 지정한 좌표로 이동 |
        | open() | 새로운 창 열기 |
        | postMessage() | 다른 창으로 메세지 전달 |
        | print() | 현재 문서 인쇄 |
        | prompt() | 프롬프트 창에 입력한 텍스트 반환 |
        | resizeBy() | 지정한 크기만큼 현재 창 크기 조절 |
        | resizeTo() | 동적으로 브라우저 창 크기 조절 |
        | scroll() | 문서에서 특정 위치로 스크롤 |
        | scrollBy() | 지정한 크기만큼씩 스크롤 |
        | scrollTo() | 지정한 위치까지 스크롤 |
        | setCursor() | 현재 창의 커서 변경 |
        | showModalDialog() | 모달 창 표시 |
        | sizeToContent() | 내용에 맞게 창 크기 맞춤 |
        | stop() | 로딩 중지 |

- Navigator 객체
    - 웹 브라우저와 관련된 정보가 담겨 있는 곳
    - 렌더링 엔진
        - 브라우저에서 웹 문서를 화면에 표시하기 위해 웹 문서의 태그와 스타일을 해석하는 프로그램
    - 속성
        
        | 속성 | 설명 |
        | --- | --- |
        | appCodeName | 브라우저 이름(코드 이름)을 문자열로 반환 |
        | appName | 브라우저 공식 이름을 문자열로 반환 |
        | appVersion | 브라우저 버전 문자열로 반환 |
        | battery | 배터리 충전 상태 |
        | connection | 브라우저 장치의 네트워크 정보가 담긴 객체 |
        | cookieEnabled | 쿠키 정보를 무시한다면 false, 아니면 true |
        | geolocation | 모바일 기기를 사용한 위치 정보가 담긴 객체 반환 |
        | maxTouchPoints | 장치에서 동시에 터치 가능한 포인트가 몇 개인지 반환 |
        | platform | 브라우저 플랫폼 정보를 갖고 있는 문자열 반환 |
        | userAgent | 현재 브라우저 정보가 있는 사용자 에이전트 문자열을 밯놘 |

- History 객체
    - 브라우저에서 돌아다녔던 사이트 주소 저장
    - 보안 문제 때문에 읽기 전용
    - 속성
        
        | 속성 | 설명 |
        | --- | --- |
        | length | 현재 브라우저 창의 history 목록에 있는 항목의 개수 반환 |

    - 함수
        
        | 함수 | 설명 |
        | --- | --- |
        | back() | history 목록에서 이전 페이지를 현재 화면으로 불러움 |
        | forward() | history 목록에서 다음 페이지를 현재 화면에 불러옴 |
        | go() | history 목록에서 현재 페이지를 기준으로 상대 위치에 있는 페이지 현재 화면에 불러옴 |

- Location 객체
    - 현재 문서의 url 주소 정보. 현재 브라우저 창에 열릴 사이트나 문서 지정할 수 있음
    - 속성
        
        | 속성 | 설명 |
        | --- | --- |
        | hash | url중 #로 시작하는 해시 부분 |
        | host | url 호스트 이름과 포트 번호 |
        | hostname | url 호스트 이름 |
        | href | 전체 url. 변경하면 해당 주소로 이동 |
        | pathname | url 경로 |
        | port | url 포트 번호 |
        | protocol | utl 프로토콜(http://. ftp://) |
        | password | 도메인 이름 앞에 username과 password를 함께 입력해서 접속하는 url일 경우 password 정보 저장 |
        | search | url중 ? 로 시작하는 검색 내용 부분 |
        | username | 도메인 이름 앞에 username을 함께 입력해서 접속한 사이트 url일 경우 username 정보 저장 |

    - 함수
        
        | 함수 | 설명 |
        | --- | --- |
        | assign() | 현재 문서에 새 문서 주소를 할당해 새 문서 가져옴 |
        | reload() | 현재 문서를 다시 불러옴(새로고침) |
        | replace() | 현재 문서의 url을 지우고 다른 url의 문서로 교체 |
        | toString() | 현재 문서의 url문자열로 반환 |

- screen 객체
    - 화면 크기나 정보를 알아낼 때 사용
    - 속성
        
        | 속성 | 설명 |
        | --- | --- |
        | availHeight | 화면에서 윈도우의 작업 표시줄이나 맥의 메뉴/독 같은 UI 영역을 제외한 부분의 높이 |
        | availWidth | UI 영역을 제외한 부분의 너비 |
        | colorDepth | 화면상에서 픽셀 렌더링할 때 사용하는 색상 수 |
        | height | UI 영역을 포함한 화면의 높이 |
        | orientation | 화면의 현재 방향. (기본값 : 가로) |
        | pixelDepth | 화면상에서 픽셀을 렌더링할 떄 사용하는 비트 수 |
        | width | UI 영역을 포함한 화면의 너비 |

    - 함수
        
        | 함수 | 설명 |
        | --- | --- |
        | lockOrientation() | 화면 방향 잠금 |
        | unlockOrientation() | 화면 방향 잠금 해제 |
        
        - 풀 스크린 상태일 때나 방향 전환이 가능한 앱에서 사용