var store = [{
        "title": "자바스크립트 기본개념1",
        "excerpt":"변수 개념 상황에 따라 변할 수 있는 값 선언은 let을 사용 할당을 위해 ‘=’ 사용 ex) let i = apple 할당이 없다면 undefined(정의되지 않음) 활용 변수를 활용하여 반복적인 작업 편리하게 할 수 있다. ex) 구구단을 출력할 때, 단수를 변수로 설정해서 변수만 바꿔가며 출력 가능 변수명에 공백 사용 불가, Camel Case로...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","javascript basic","function","변수","함수","자바스크립트 기본개념","타입","조건문 codestates"],
        "url": "/til/javascript01/",
        "teaser": null
      },{
        "title": "자바스크립트 기본개념2",
        "excerpt":"문자열 str.index[0] : 첫번째 index는 0부터 1X +연산자 사용 가능 문자열 + 문자열 = 문자열이 합쳐진다. 숫자 + 문자열 = 문자열로 변환됨 str.indexOf : 찾고자 하는 문자열 처음으로 일치하는 index 반환, 없을 땐 -1 str.includes() : index를 포함하고 있는지 판별만 가능(true / false) str.split(‘ ‘) : ‘ ‘를 기준으로 배열...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","javascript basic","function","자바스크립트 기본개념","타입","문자열","반복문","codestates"],
        "url": "/til/javascript02/",
        "teaser": null
      },{
        "title": "HTML 기본 개념",
        "excerpt":"HTML 웹 페이지의 구조를 만드는 마크업 언어. 태그들을 활용해 구성. 태그를 열고 닫는 구조 ex) &lt;div&gt;&lt;/div&gt; 태그 내부에 내용이 없다면 &lt;div /&gt;로 표현 태그 종류 html : html 문서 전체를 감싸는 태그 head : 머리말. CSS, JavaScript 연결. meta : 문서의 다양한 정보 제공 title : 타이틀바에 입력될 내용 script...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","javascript basic","function","자바스크립트 기본개념","타입","문자열","반복문","codestates","HTML"],
        "url": "/til/html/",
        "teaser": null
      },{
        "title": "CSS 기초 - 개념",
        "excerpt":"개념 사용자에게 편의를 제공하기 위한 스타일링에 사용. 독릭적으로 사용되지 않고 반드시 HTML에서 동작한다. 시맨틱 태그: &lt;divb&gt;와 같은 역할이지만 이름에 의미를 붙여서 부르는 태그 사용방법 body{ color: red, font-size: 30px } background와 background-color의 차이점 background-color는 단순히 색 옵션만 가능 background는 다양한 옵션 추가 가능 ex) background-color/image/repeat/attachment/position CSS 파일을 사용하기 위해 HTML...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","javascript basic","function","자바스크립트 기본개념","타입","문자열","반복문","codestates","HTML","CSS","CSS 사용법"],
        "url": "/til/css/",
        "teaser": null
      },{
        "title": "[Jekyll] 블로그 포스팅 테스트",
        "excerpt":"첫 번째 포스트 기술 블로그를 위한 깃허브 블로그 한글 테스트 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 이 헌법에 의한 최초의 대통령의 임기는 이 헌법시행일로부터 개시한다. 모든 국민은 보건에 관하여 국가의 보호를...","categories": ["Blog"],
        "tags": ["Blog","jekyll","Github","Git"],
        "url": "/blog/first-post/",
        "teaser": null
      },{
        "title": "Algorithm largestProductOfThree",
        "excerpt":"문제 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴 입력 number 타입을 요소로 갖는 임의의 배열 출력 number 타입을 리턴 주의사항 입력으로 주어진 배열은 중첩되지 않은 1차원 배열 배열의 요소는 음수와 0을 포함하는 정수 배열의 길이는 3 이상 해결과정 입력된 배열을 내림차순으로 정렬 계산값을 저장할...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","Codingtest","Algorithm","largestProductOfThree"],
        "url": "/codingtest/Algorithm08/",
        "teaser": null
      },{
        "title": "Algorithm Isogram",
        "excerpt":"문제 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다. 입력 인자1: str string 타입의 공백 없는 문자열 출력 boolean 타입 주의사항 빈 문자열을 입력받은 경우, true 리턴 대소문자 구별하지 않음 입출력 예시 let output = isIsogram('aba'); console.log(output); // false output = isIsogram('Dermatoglyphics'); console.log(output);...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","CodingTest","Algorithm","isIsogram"],
        "url": "/codingtest/AlgorithmBasic16-Isogram/",
        "teaser": null
      },{
        "title": "컴포넌트 단위로 개발하기",
        "excerpt":"Component Driven Development(CDD) 컴포넌트 단위 개발 디자인과 개발 단계에서부터 재사용할 수 있는 UI 컴포넌트를 만들어 효율적으로 페이지를 구성하는 방법 Storybook CDD가 트렌드로 자리잡으면서 이를 지원하는 도구 중 하나인 Component Explorer(컴포넌트 탐색기) 등장. 많은 UI 개발도구 중 하나인 Storybook 특징 각각의 컴포넌트들을 따로 볼 수 있게 구성해주어 한번에 하나의 컴포넌트에서 작업...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","React","Styled-component","CSS","CDD"],
        "url": "/til/TIL-day40/",
        "teaser": null
      },{
        "title": "Redux",
        "excerpt":"Redux 자바스크립트 앱에서 예측가능한 상태관리를 해주는 Container Redux 세가지 원칙 Single source of truth: 동일한 데이터는 항상 같은 곳에서 가져온다.(Store) state is read-only: action 객체를 통해 state 변경 Change are made with pure functions: 순수 함수를 사용해서 변경 Redux 기본개념 Store 상태가 관리되는 오직 하나의 공간 Action Simple Javascript Object...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","React","Redux","store","reducer"],
        "url": "/til/TIL-Redux/",
        "teaser": null
      },{
        "title": "코드스테이츠 섹션2 회고",
        "excerpt":"섹션2 회고 어찌저찌 꾸역꾸역 HA2를 통과했다. 아직도 어떻게 통과했는지 모르겠지만… 어쨌든 섹션3로 이동 성공 배운 것 [JS/Node] 객체 지향 JavaScript, 비동기 [자료구조/알고리즘] 재귀, Stack, Queue, Graph, Tree [HTTP/네트워크] 클라이언트-서버 통신, API, CORS [React] 비동기, 컴포넌트 디자인, 상태관리 Redux [Web Server] HTTP 트랜젝션, Node.js Express 자료구조에서 상당히 애를 먹었다. 아직도 잘...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","React","Redux","store","reducer","HA","HA2","codestates"],
        "url": "/til/HA2/",
        "teaser": null
      },{
        "title": "백준 1546 자바스크립트(1차원 배열)",
        "excerpt":"1차원 배열(1546번) 입력한 숫자를 주어진 공식으로 변형하여 그 수의 평균을 구하는 문제 문제 푸는건 그렇게 어렵진 않았지만 백준에서 자꾸 틀렸다고 나와서 멘붕… 백준에서는 console.log()에 식을 쓰지 않고, 최대한 함수를 사용해야 맞다고 나오는 것 같다. for문을 사용해서 합을 구한뒤 평균을 구한 코드는 틀렸지만, 배열의 합을 구하는 함수를 사용해서 답을 구하니 바로...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 1546"],
        "url": "/codingtest/baekjoon-1546/",
        "teaser": null
      },{
        "title": "리눅스 사용권한 & 환경변수",
        "excerpt":"Linux 사용 권한 사용 권환 확인 방법(Mac OS): 터미널에서 ls -l 맨 앞에 d가 있으면 폴더, -면 파일 두번째 자리부터 세자리씩 user/group/other 의 권환 나타냄 user 파일의 소유자. 기본적으로 파일을 만든 사람 group 여러 user가 포함될 수 있다. 그룹에 속한 모든 user는 파일에 대한 동일한 group 엑세스 권한 가짐 other...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","백엔드","리눅스","리눅스 권한","리눅스 권한 확인"],
        "url": "/til/linux/",
        "teaser": null
      },{
        "title": "시간 복잡도 & Greedy Algorithm",
        "excerpt":"알고리즘 문제를 해결하는 최선의 선택 Time Complexity(시간 복잡도) 알고리즘 문제에서는 문제의 해답을 찾는 것이 중요하지만 얼마나 효율적으로 해결했는지도 중요. 알고리즘의 로직을 코드로 구현할 때, 시간 복잡도를 고려해야 함. 종류 Big-O(빅-오): 최악의 경우 Big-Ω(빅-오메가): 최선의 경우 Big-θ(빅-세타): 중간(평균)의 경우 Big-O 표기법 시간 복잡도를 표현하는 방법. 입력값의 변화에 따라 연산을 실행할 때,...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","알고리즘","Greedy Algorithm","자바스크립트","백엔드","CS","Computer Science","코딩테스트"],
        "url": "/til/greedy-algorithm/",
        "teaser": null
      },{
        "title": "알고리즘 with 수학",
        "excerpt":"중복순열 반복문 Version let result = []; let arr = [1, 2, 3] for(let i = 0; i &lt; arr.length; i++){ for(let j = 0; j &lt; arr.length; j++){ for(let k = 0; k &lt; arr.length; k++){ result.push([arr[i], arr[j], arr[k]]); } } } 재귀함수 Version let result = []; //bucket은...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","알고리즘","Greedy Algorithm","자바스크립트","백엔드","CS","Computer Science","코딩테스트","순열","중복순열","조합","멱집합","최대공약수","최소공배수"],
        "url": "/til/math-algorithm/",
        "teaser": null
      },{
        "title": "백준 8958 자바스크립트(1차원 배열)",
        "excerpt":"1차원 배열(8958) O와 X만 입력했을 때, O가 연속된 갯수만큼 보너스 점수를 받는 문제. 시간이 좀 걸렸지만 O가 연속되는 횟수를 세서 플러스 해주면 된다. const readline = require('readline'); const rl = readline.createInterface({ input: process.stdin, output: process.stdin }); let input = []; rl.on('line', function (line){ input.push(line); }).on('close',function (){ let number = Number(input[0]);...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 8958","Node.js"],
        "url": "/codingtest/baekjoon-8958/",
        "teaser": null
      },{
        "title": "백준 1065 자바스크립트(함수)",
        "excerpt":"함수(1065) 문제 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 출력 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다. 예제...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 8958","Node.js"],
        "url": "/codingtest/baekjoon-1065/",
        "teaser": null
      },{
        "title": "관계형 데이터베이스 vs 비관계형 데이터베이스",
        "excerpt":"데이터베이스 필요성 In-Memory JavaScript에서 변수를 만들어 저장한 경우, 프로그램이 종료될 때 해당 프로그램이 사용하던 데이터도 사라진다. 이 말은 변수 등에 저장한 데이터가 프로그램의 실행에 의존한다는 것이다. 예기치 못한 상황으로부터 데이터를 보호할 수 없고, 프로그램이 종료된 상태라면 데이터를 원하는 시간에 받아올 수 없으며, 데이터의 수명이 프로그램의 수명에 의존하게 된다. File I/O...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","Database","schema","relation","relation database","SQL","NoSQL"],
        "url": "/til/database1/",
        "teaser": null
      },{
        "title": "데이터베이스 설계",
        "excerpt":"데이터베이스 설계 관계형 데이터베이스 용어 데이터: 각 항목에 저장되는 값 테이블(table, relation): 사전에 정의된 열의 데이터 타입대로 작성된 데이터가 행으로 축적 칼럼(column, field): 테이블의 한 열 레코드(record, tuple): 테이블의 한 행에 저장된 데이터 키: 테이블의 각 레코드를 구분할 수 있는 값(기본키, 외래키 등) 관계의 종류 1:1 관계 하나의 레코드가 다른...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","Database","schema","relation","relation database","SQL","NoSQL"],
        "url": "/til/database2/",
        "teaser": null
      },{
        "title": "데이터베이스 MVC & ORM",
        "excerpt":"데이터베이스 MVC &amp; ORM MVC(Model-View-Controller) 사용자 인터페이스, 데이터 및 논리 제어를 구현하는데 사용되는 소프트웨어 디자인 패턴. 소프트웨어의 비지니스 로직과 화면을 구분하는데 중점을 둔다. 이러한 관심사 분리를 통해 효율적으로 코드를 관리 할 수 있다. Model: 데이터의 정보를 갖고 있다. 자신이 데이터를 갖고 있거나 데이터베이스와 연결되어 데이터를 가져올 수 있다. 이 데이터로...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","Database","schema","relation","relation database","SQL","NoSQL","MVC","ORM"],
        "url": "/til/databaseMVC/",
        "teaser": null
      },{
        "title": "MongoDB",
        "excerpt":"MongoDB 연산자 비교 연산자 $eq : EQual to (=) $ne : Not Equal to (!=) $gt : Greater Than (&gt;) $lt : Les Than (&lt;) $gte : Greater Than or Equal to (&gt;=) $lte : Less Than or Equal to (&lt;=) **{field:{operator:value}}** $eq는 연산자가 지정되어 있지 않은 경우 기본 연산자로...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","백엔드","데이터베이스","몽고디비","MongoDB","database","몽고DB 연산자","몽고디비 사용"],
        "url": "/til/MongoDB/",
        "teaser": null
      },{
        "title": "NoSQL",
        "excerpt":"NoSQL 관계형 테이블의 레거시한 방법을 사용하지 않는 데이터 저장소. NoSQL 데이터베이스를 사용하는 경우 1. 비구조적인 대용량의 데이터를 저장 자유로운 형태의 데이터 저장이 가능. 정형화되지 않은 대용량 데이터가 필요한 경우 NoSQL이 효과적 2. 클라우드 컴퓨팅 및 저장 공간을 최대한 활용 저장 공간 효율적으로 사용. 수평적 확장으로 증설해서 이론상 무한대로 서버를 분산시켜...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","Database","MongoDB","NoSQL","backend","CRUD","MongoDB CRUD","JSON","BSON","MongoDB importing","MongoDB exporting"],
        "url": "/til/NoSQL/",
        "teaser": null
      },{
        "title": "백준 11654 자바스크립트(문자열)",
        "excerpt":"문제 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오. 입력 알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다. 출력 입력으로 주어진 글자의 아스키 코드 값을 출력한다. 예시 입력 - 출력 A - 65 C - 67 0 - 48 9 -...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 11654","Node.js"],
        "url": "/codingtest/baekjoon-11654/",
        "teaser": null
      },{
        "title": "백준 11720 자바스크립트(문자열)",
        "excerpt":"문제 N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다. 예제 입력 입력한 숫자를 하나씩 잘라서 배열로 만든 뒤, 각 숫자의 합을 구했다. 배열의 합을 구하는 코드가 있었는데 까먹…...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 11720","Node.js"],
        "url": "/codingtest/baekjoon-11720/",
        "teaser": null
      },{
        "title": "Authentication - Cookie, Session",
        "excerpt":"HTTPS http 요청을 SSL 또는 TLS 알고리즘을 이용해 HTTP 통신을 하는 과정에서 내용을 암호화하여 데이터를 전송하는 방법 HTTPS 장점 데이터 제공자의 신원 보장 암호화된 데이터를 주고받음 브라우저가 응답과 함께 전달된 인증서 정보 확인 인증서의 도메인과 데이터 전송한 도메인을 비교 HTTPS 특징 기밀성: 메세지가 암호화되어 가로챌 수 없고, 읽을 수 없다....","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","authentication","cookie","session","Node.js","인증서","보안","쿠키","세션"],
        "url": "/til/authentication/",
        "teaser": null
      },{
        "title": "Authentication - Token",
        "excerpt":"Token 기반 인증 매 요청시 데이터베이스를 확인하는 세션 기반 인증의 불편함을 해결하기 위해 토큰 기반 인증 사용. 토큰은 유저 정보를 암호화한 상태로 담을 수 있고, 암호화했기 때문에 클라이언트에 담을 수 있다. JWT(JSON Wdb Token) Access Token : 보호된 정보들에 접근할 수 있는 권한부여에 사용. Refresh Token : 새로운 Access Token을...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","authentication","cookie","session","Node.js","인증서","보안","쿠키","세션","token","토큰"],
        "url": "/til/authentication2/",
        "teaser": null
      },{
        "title": "Authentication - oauth",
        "excerpt":"OAuth OAuth2.0은 인증을 위한 표준 프로토콜의 한 종류. 보안 리소스에 엑세스하기 위해 클라이언트에게 권한을 제공하는 프로세스를 단순화하는 프로토콜 중 한 방법이다. 언제, 왜 쓸까? 서비스별로 회원가입을 하나하나 하는 것이 매우 귀찮아서 자주 사용하는 서비스의 ID 와 Password만 기억해 놓고 해당 서비스를 통해 서셜 로그인을 할 수 있다. OAuth는 보안상의 이점도...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","authentication","cookie","session","Node.js","인증서","보안","쿠키","세션","token","토큰","oauth"],
        "url": "/til/authentication3/",
        "teaser": null
      },{
        "title": "컴퓨터 공학 기초",
        "excerpt":"컴퓨터 공학 컴퓨터 공학 기초 문자열 유니코드 유니코드 협회가 제정하는 전 세계의 모든 문자를 컴퓨터에서 일관되게 표현하고 다룰 수 있도록 설계된 산업 표준. ISO 10646 문자 집합, 문자 인코딩, 문자 정보 데이터베이스, 문자를 다루기 위한 알고리즘 등을 포함. 기본적으로 유니코드의 목적은 현존하는 문자 인코딩 방법을 모두 유니코드로 교체하는 것. 인코딩(부호화)...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","백엔드","컴퓨터 공학 기초","운영체제","가비지 컬렉션","캐시","스레드","문자열","그래픽","멀티 스레드"],
        "url": "/til/cs/",
        "teaser": null
      },{
        "title": "백준 1157 자바스크립트(문자열)",
        "excerpt":"문제 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다. 입력 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다. 출력 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 1157","Node.js","백준","노드","코딩테스트","백준 1157 자바스크립트","백준 1157 javascript"],
        "url": "/codingtest/baekjoon-1157/",
        "teaser": null
      },{
        "title": "CDN",
        "excerpt":"CDN 콘텐츠를 좀더 빠르고 효율적으로 제공하기 위해 등장한 서비스 특징 원본을 복사하여 저장할 여러개의 캐시 서버로 구성(전 세계 데이터 센터에 콘텐츠 저장) 콘텐츠를 요청받은 경우 데이터를 전달하기 가장 유리한 캐시 서버에서 관련 콘텐츠 제공 제공할 콘텐츠를 가지고 있는 가장 가까운 캐시 서버가 우선순위 정적 콘텐츠(내용이 거의 변하지 않는 콘텐츠) CDN의...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","백엔드","네트워크 심화","CDN"],
        "url": "/til/cdn/",
        "teaser": null
      },{
        "title": "네트워크 심화",
        "excerpt":"네트워크 심화 인터넷 프로토콜 IP 와 IP Packet 복잡한 인터넷 망 속에서 통신할 수 있도록 하는 규칙. IP 주소를 컴퓨터에 부여하고 지정한 주소에 패킷이라는 통신 단위로 데이터 전달. IP 프로토콜의 한계 비연결성 : 패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷 전송 비신뢰성 : 중간에 패킷이 사라질 수 있음. 패킷의...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","백엔드","네트워크 심화","인터넷 프로토콜","HTTP 헤더","웹 캐시","IP","TCP","UDP","HTTP"],
        "url": "/til/network/",
        "teaser": null
      },{
        "title": "Git 사용법",
        "excerpt":"Git 브랜치 독립적으로 어떤 작업을 진행하기 위한 개념. 브랜치를 통해 코드를 통째로 복사한 후 원래 코드가 변형될 우려 없이 독립적으로 개발할 수 있다. 따라서 여러 작업을 동시에 진행할 수 있다. 장점 한 소스코드에서 동시에 다양한 작업을 할 수 있게 해준다. 소스코드의 한 시점과 동일한 상태를 만들고, 브랜치를 넘나들며 작업을 수행할...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","백엔드","Git","Git 사용법","Git 명령어"],
        "url": "/til/git/",
        "teaser": null
      },{
        "title": "AWS",
        "excerpt":"Amazon Web Service Cloud Computing 장점 필요할 때마다 컴퓨팅 능력을 유연하게 조절할 수 있다. 사용한 만큼의 요금만 지불 컴퓨터의 스냅샷을 이용해 다른 컴퓨터로 즉시 이주(migration) 가능 단점 클라우드 서비스에 종속 서비스에 영향을 미침 클라우드 서비스 형태 배포 개발한 서비스를 사용자가 이용 가능하게 하는 과정 Development local 환경에서 개발 및 테스트...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","백엔드","프론트엔드","배포","AWS","EC2","S3","RDS"],
        "url": "/til/AWS/",
        "teaser": null
      },{
        "title": "AWS Ubuntu git 클론 오류",
        "excerpt":"AWS Ubuntu git 클론 중 오류 발생 remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead. 평소 잘 되던 git clone이 AWS Ubuntu 환경에서 위의 에러가 뜨면서 계속 실패. 검색해보면 Origin을 삭제하고 다시 설정하는 방법이 많이 나오는데 왠지 이 문제는 아닌...","categories": ["Error Handling"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","git","git error","git ssh","git login","git push","git clone"],
        "url": "/error%20handling/aws-error1/",
        "teaser": null
      },{
        "title": "AWS 데이터베이스 연결 오류",
        "excerpt":"오류 내용     RDS 생성하고 mysql 연결 시 위와 같은 오류 발생   해결방법  인바운드 규칙을 편집해주면 된다.   ec2 default 보안그룹에서 소스를 위치 무관을 선택 위치 무관이 없다면 규칙 추가로 모든 트래픽을 선택하고, 소스를 사용하는 걸로 선택하면 된다. IPv4 DNS를 사용했기에 anywhere-IPv4를 선택하고 저장   이후 성공적으로 데이터베이스에 연결됐다.  ","categories": ["Error Handling"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","aws","database","ec2","s3","rds"],
        "url": "/error%20handling/aws-error/",
        "teaser": null
      },{
        "title": "Docker",
        "excerpt":"Docker 리눅스 컨테이너에서 애플리케이션을 쉽게 포장하고, 컨테이너 방식으로 실행할 수 있게 하는 것. 실행 환경에 구애받지 않고 애플리케이션을 실행할 수 있다. 컨테이너 방식의 장점 의존성 충돌 문제를 해결해준다. 프로세스, 네트워크, 파일 시스템을 격리하고, 독립적으로 소유 개발과 배포 환경을 일치시킨다. 수평 확장을 쉽게 해준다. 각 서버에 새로운 내용을 배포하기 쉽게 만들어준다....","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","node.js","노드js","자바스크립트","docker","vm","docker 명령어","docker 사용법"],
        "url": "/til/docker/",
        "teaser": null
      },{
        "title": "백준 1152 자바스크립트(문자열) 단어의 개수",
        "excerpt":"문제 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다. 입력 첫 줄에 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열의 길이는 1,000,000을 넘지 않는다. 단어는 공백 한 개로 구분되며, 공백이 연속해서...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 1152","Node.js","백준","노드","코딩테스트","백준 1152 자바스크립트","백준 1152 javascript"],
        "url": "/codingtest/baekjoon1152/",
        "teaser": null
      },{
        "title": "백준 2908 자바스크립트(문자열) 상수",
        "excerpt":"문제 상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다. 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다. 상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 2908","Node.js","백준","노드","코딩테스트","백준 2908 자바스크립트","백준 2908 javascript"],
        "url": "/codingtest/baekjoon2908/",
        "teaser": null
      },{
        "title": "백준 2908 자바스크립트(문자열) 상수",
        "excerpt":"문제 입력 첫째 줄에 알파벳 대문자로 이루어진 단어가 주어진다. 단어의 길이는 2보다 크거나 같고, 15보다 작거나 같다. 출력 첫째 줄에 다이얼을 걸기 위해서 필요한 최소 시간을 출력한다. 해결과정 아무리 생각해도 규칙을 찾을수가 없었다…. 문자를 숫자로 바꿔서 비교하려고 했지만 구지? 라는 생각 3, 4개씩 있는 문자별로 카운트 숫자를 부여해 나온 갯수만큼...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 2908","Node.js","백준","노드","코딩테스트","백준 2908 자바스크립트","백준 2908 javascript"],
        "url": "/codingtest/baekjoon5622/",
        "teaser": null
      },{
        "title": "Auto Deploy",
        "excerpt":"배포 자동화 한 번의 클릭 혹은 명령어 입력으로 전체 배포 과정을 자동으로 진행하는 것. 수동적이고 반복적인 배포 과정을 자동화함으로써 시간 절약 휴먼 에러 방지 배포 자동화 파이프라인 AWS 개발자 도구 AWS에서 제공하는 개발자 도구 섹션에서 제공하는 서비스를 활용하여 배포 자동화 파이프라인을 구축할 수 있다. Code Commit Source 단계를 구성할 때...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","node.js","노드js","자바스크립트","aws","배포 자동화","auto deploy","배포"],
        "url": "/til/auto-deploy/",
        "teaser": null
      },{
        "title": "백준 1712 자바스크립트(기본 수학1) 손익분기점",
        "excerpt":"문제 월드전자는 노트북을 제조하고 판매하는 회사이다. 노트북 판매 대수에 상관없이 매년 임대료, 재산세, 보험료, 급여 등 A만원의 고정 비용이 들며, 한 대의 노트북을 생산하는 데에는 재료비와 인건비 등 총 B만원의 가변 비용이 든다고 한다. 예를 들어 A=1,000, B=70이라고 하자. 이 경우 노트북을 한 대 생산하는 데는 총 1,070만원이 들며, 열...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 1712","Node.js","백준","노드","코딩테스트","백준 1712 자바스크립트","백준 1712 javascript"],
        "url": "/codingtest/baekjoon1712/",
        "teaser": null
      },{
        "title": "백준 2869 자바스크립트(기본 수학1) 달팽이는 올라가고 싶다",
        "excerpt":"문제 땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다. 달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에 올라간 후에는 미끄러지지 않는다. 달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오. 입력 첫째 줄에 세 정수 A, B, V가...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 2869","Node.js","백준","노드","코딩테스트","백준 2869 자바스크립트","백준 2869 javascript"],
        "url": "/codingtest/baekjoon2869/",
        "teaser": null
      },{
        "title": "백준 1427 자바스크립트(정렬) 소트인사이드",
        "excerpt":"문제 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자. 입력 첫째 줄에 정렬하려고 하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다. 출력 첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다. 해결과정 입력받은 N을 한자리씩 나눠서 배열로 만든다 배열의 숫자를 내림차순으로 정렬(sort 함수 사용) join을 이용하여 배열의...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 1427","Node.js","백준","노드","코딩테스트","백준 1427 자바스크립트","백준 1427 javascript"],
        "url": "/codingtest/baekjoon2869/",
        "teaser": null
      },{
        "title": "백준 2750 자바스크립트(정렬) 수 정렬하기",
        "excerpt":"문제 N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오. 입력 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다. 출력 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다. 해결과정...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 2750","Node.js","백준","노드","코딩테스트","백준 2750 자바스크립트","백준 2750 javascript"],
        "url": "/codingtest/baekjoon2750/",
        "teaser": null
      },{
        "title": "정규표현식",
        "excerpt":"정규표현식 문자열에서 특정한 문자를 찾아내는 도구. 이메일 유효성 검사 let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 핸드폰 번호 유효성 검사 let regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/; 문자열의 길이가 5 또는 7이면서 숫자로만 구성되어 있는지 검사 function solution(str) { return /^\\d{5}$|^\\d{7}$/.test(str); } 정규표현식 사용방법 리터럴 패턴 정규표현식 규칙을 /로 감싸 사용한다. //안에 들어온 문자열이 찾고자 하는...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","node.js","노드js","자바스크립트","정규표현식"],
        "url": "/til/reg/",
        "teaser": null
      },{
        "title": "데이터베이스 기본 명령어, 쿼리문",
        "excerpt":"SQL Basic 데이터베이스 관련 명령어 데이터베이스 생성 : CREATE DATABASE 데이터베이스_이름 데이터베이스 사용 : USE 데이터베이스_이름 테이블 생성 CREATE TABLE user ( id int PRIMARY KEY AUTO_INCREMENT, name varchar(255), email varchar(255) ); 테이블 정보 확인(user 테이블) : DESCRIBE user; SQL 명령어 SELECT SELECT \"HELLO WORLD\" -- 일반 문자열 SELECT 2...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","node.js","노드js","자바스크립트","데이터베이스","쿼리문","기본 쿼리문","데이터베이스 명령어","쿼리문 사용방법"],
        "url": "/til/DBquery/",
        "teaser": null
      },{
        "title": "Algorithm LSCS",
        "excerpt":"문제 정수를 요소로 갖는 배열을 입력받아 다음의 조건을 만족하는 LSCS를 리턴. LSCS : 주어진 배열의 연속된 부분 배열*의 합을 구한다고 할 때, 이 중 가장 큰 값(Largest Sum of Contiguous Subarray) 연속된 부분 배열 : 배열 [1, 2, 3]의 연속된 배열은 [1], [1, 2], [1, 2, 3], [2], [2, 3],...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","Codingtest","Algorithm","largestProductOfThree"],
        "url": "/codingtest/LSCS/",
        "teaser": null
      },{
        "title": "SQL 내장함수",
        "excerpt":"SQL 내장함수 GROUP BY 데이터를 조회할 때 그룹으로 묶어서 조회한다. -- customers의 모든 레코드르 State에 따라 그룹화 SELECT * FROM customers GROUP BY State HAVING GROUP BY로 조회된 결과에 조건을 설정 할 떄 사용한다. -- invoices 테이블을 CustomerId로 그룹화하고 그 평균이 6을 초과한 결과를 조회 SELECT CustomerId, AVG(Total) FROM invoices...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","node.js","노드js","자바스크립트","데이터베이스","쿼리문","기본 쿼리문","데이터베이스 명령어","쿼리문 사용방법","sql 내장함수"],
        "url": "/til/SQLfn/",
        "teaser": null
      },{
        "title": "백준 10872 자바스크립트(재귀) 팩토리얼",
        "excerpt":"문제 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다. 출력 첫째 줄에 N!을 출력한다. 해결과정 입력받는 숫자 N 선언 답이 나올 변수 answer를 1로 선언 =&gt; 첫번째 팩토리얼은 1이기 때문 let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\\n'); let N =...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 2750","Node.js","백준","노드","코딩테스트","백준 10872 자바스크립트","백준 10872 javascript"],
        "url": "/codingtest/baekjoon10872/",
        "teaser": null
      },{
        "title": "백준 2751 자바스크립트(정렬) 수 정렬하기2",
        "excerpt":"문제 N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오. 입력 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다. 출력 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다. 해결과정...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 2750","Node.js","백준","노드","코딩테스트","백준 2751 자바스크립트","백준 2751 javascript"],
        "url": "/codingtest/baekjoon2751/",
        "teaser": null
      },{
        "title": "백준 4153 자바스크립트(기본수학2) 직각삼각형",
        "excerpt":"문제 과거 이집트인들은 각 변들의 길이가 3, 4, 5인 삼각형이 직각 삼각형인것을 알아냈다. 주어진 세변의 길이로 삼각형이 직각인지 아닌지 구분하시오. 입력 입력은 여러개의 테스트케이스로 주어지며 마지막줄에는 0 0 0이 입력된다. 각 테스트케이스는 모두 30,000보다 작은 양의 정수로 주어지며, 각 입력은 변의 길이를 의미한다. 출력 각 입력에 대해 직각 삼각형이 맞다면...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","codingtest","baekjoon","baekjoon 2750","Node.js","백준","노드","코딩테스트","백준 4153 자바스크립트","백준 4153 javascript"],
        "url": "/codingtest/baekjoon4153/",
        "teaser": null
      },{
        "title": "데이터베이스 정규화",
        "excerpt":"데이터베이스 정규화 데이터베이스의 논리적 설계 단계에서 중복을 최소화하게 데이터를 구조화하는 프로세스. Database Rdeundancy(데이터 중복) 일관된 자료 처리 어려움 저장 공간 낭비 데이터 효율성 감소 Data Integrity(데이터 무결성) 입력된 데이터가 오염되지 않고, 입력된 그대로 데이터를 사용할 수 있다. Anomaly(이상현상) 갱신 이상(update anomaly) 여러 행에 걸쳐 동일한 데이터가 있을 때, 어떤 행을...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","node.js","노드js","자바스크립트","데이터베이스","정규화","데이터베이스 정규화","sql 종류","데이터베이스 설계"],
        "url": "/til/DB-normalization/",
        "teaser": null
      },{
        "title": "AWS Ubuntu 오류. Error: Missing required argument #1",
        "excerpt":"AWS Ubuntu npm install 중 에러 발생  Error: Missing required argument #1   npm 버전이 낮아서 생기는 오류이다.   # npm cache clean --force # npm install -g n # n stable   npm을 최신 버전으로 설치하면 해결된다. 최신 버전 설치 후에도 안된다면 서버를 껐다 다시 켜보자.  ","categories": ["Error Handling"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","linux","chmod","permission","node.js","노드js","자바스크립트","node","npm","npm version"],
        "url": "/error%20handling/aws-error-2/",
        "teaser": null
      },{
        "title": "[Greedy] 짐 나르기",
        "excerpt":"문제 김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다. 박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다. 예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 2번째...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","알고리즘","Greedy Algorithm","자바스크립트","백엔드","CS","Computer Science","코딩테스트","greedy 알고리즘","그리디 알고리즘","짐 나르기"],
        "url": "/til/algorithm-greedy/",
        "teaser": null
      },{
        "title": "코드스테이츠 섹션3 회고",
        "excerpt":"섹션3 회고 배운 것 Linux 자료구조 / 알고리즘 데이터베이스 컴퓨터 공학 네트워크 보안 / 인증 Git 배포 with AWS &amp; 자동화 Docker 백엔드와 코딩테스트에 필요한 부분 공부. 역시나 전체적으로 수준이 높다. 한번 본 내용이지만 다시 보니 새로워 보이는 부분도 있고, 전체적으로 더 공부를 해야겠다는 생각이 든다. HA3 35기에서 36기로 내려와서...","categories": ["TIL"],
        "tags": ["Blog","jekyll","Github","Git","TIL","Javascript","React","Redux","store","reducer","HA","HA3","codestates"],
        "url": "/til/ha3/",
        "teaser": null
      },{
        "title": "Algorithm LIS",
        "excerpt":"문제 정수를 요소로 갖는 문자열을 입력받아 다음의 조건을 만족하는 LIS의 길이를 리턴 LIS : 배열의 연속되지 않는 부분 배열 중 모든 요소가 엄격하게 오름차순으로 정렬된 가장 긴 부분 배열 배열 [1, 2, 3]의 subseqeunce는 [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] 엄격한 오름차순 : 배열이...","categories": ["CodingTest"],
        "tags": ["Blog","jekyll","Github","Git","Codingtest","Algorithm","LIS","Longest Increasing Subsequence"],
        "url": "/codingtest/LIS/",
        "teaser": null
      },{
        "title": null,
        "excerpt":"문제 N * N의 크기를 가진 보드판 위에서 게임을 하려고 합니다. 게임의 룰은 다음과 같습니다. 좌표 왼쪽 상단(0, 0)에 말을 놓는다. 말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다. 조작의 기회는 딱 한 번 주어진다. 조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를...","categories": [],
        "tags": null,
        "url": "/2022-02-20-algorithm-boardgame/",
        "teaser": null
      }]
