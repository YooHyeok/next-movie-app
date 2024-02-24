# *NEXTJS 란?*

React와의 차이는 React는 라이브러리, NextJS는 프레임워크이다.

## 라이브러리
라이브러리를 사용하여 개발할때는 원하는 아키텍처를 사용하여 원하는 방식으로 코드를 작성할 수 있다.    
객체 지향 혹은 함수 지향 등 원하는 언어로 작성이 가능하다.     
라이브러리는 코드 내에서 사용하기 위해 설치하는 것이지만 사용 주체는 개발자이다.    
구조에 관한 모든 결정이 라이브러리를 사용하는 개발자가 결정을 내리는것이다.      
파일을 어디에 저장할 지, 폴더의 이름은 무엇이 될 지 등 모든 결정은 개발자가 내린다.    
라이브러리는 개발자가 필요할 때 사용할 수 있는것이다.    

ex) 주식시장 자동 트레이딩 봇    
직접 모든 코드와 공식을 작성하고 결정해야 한다.    
작업을 하다가 통화를 변환하는 작업이 필요하다면, 온라인에서 통화 변환에 필요한 라이브러리를 찾아 설치하고 필요할 때 사용한다.    

React로 Application을 개발할 때 원하는 프로그래밍 언어를 사용해 원하는 구조를 만들고 function class등, function 형태, 파일이름, 폴더경로 원하는데로 지정해왔다.      
단, 라이브러리의 도움이 필요할 때만 가져와서 사용한다.
라이브러리는 개발자를 위해 어떠한 결정권이 없고, 오직 개발자가 라이브러리를 사용한다.

React는 UI인터페이스를 build하는데 사용하는 라이브러리이다.    
반응형 사용자 인터페이스를 구축하는데 도움이 된다.    
css에 StyledComponenet, 혹은 sass, module.css 등을 선택해 사용할 수 있고,
Routing을 위해 React router 혹은 Expo router를 사용할 수 있다.    
원하는 파일,폴더명 등 개발자는 자유를 갖는다.      
단순히 UI를 위해서 React를 사용하는것이다.      

이와같이, 라이브러리는 개발자가 주도권을 가지고 사용한다.      

어떤 폴더, 파일 구조에서 react를 사용할 결정하는 주도권은 개발자가 가지고 있다.     

## 프레임워크
프레임워크는 개발자의 코드를 사용한다.    
개발자에게 주도권이 없다.
프레임워크가 주도하고 담당한다.     
프레임워크는 개발자를 위해 많은 일들을 대신 해준다.      
폴더이름, application 시작 등 여러 결정을 개발자 대신 내려 자동화하도록 할 수 있다.    

NextJS는 Optimization, HTML Streaming, Server component, CSS Support, Data Fetching, Route Handlers, Middleware등 여러 feature를 제공해준다.    
NextJS 제작자가 위 항목에 대해 구현, 제공하므로 개발자가 해당 기능에 대해서 작업할게 없어진다.     
하지만 개발자에게 통제/결정 권한 즉, 주도권이 없다.      
NextJS가 제시하는 규칙을 따라야 한다.     

개발자가 지켜야 하는것, 이것이 바로 프레임워크이다.      
올바른 방법으로 올바른 위치에 파일을 넣는다는 전제하에 NextJS가 풀스택 웹 어플리케이션을 만들어 줄것이다.      
개발자가 NextJS를 import하고 사용한다는 개념이 아닌 NextJS의 규칙을 따라야 한다.    
NextJS 프로젝트를 실행하면 NextJS가 개발자의 코드를 호출할것이다.    

ReactJS는 개발자가 원하는 방식으로 개발했다면 NextJS는 NextJS가 제공하는 규칙을 준수하여 개발해야한다.      
(코드를 올바른 위치에 배치하고, 파일을 올바른 경로, 올바른 함수명, 올바른 모양의 export 등..)

### `ReactJS *`

rednering 이란 react 코드를 브라우저가 이해할 수 있는 html로 바꾸는것이다.     
create-react-app을 사용해 react만으로 application을 생성는 것은 client side application이다.     
React는 사용자 브라우저인 client단에서 모든 rendering 작업을 수행해야 한다.     
client가 사용자 브라우저에 UI를 구축해야 하는것이다.     
 
- 단점 1.     
   페이지 소스 보기 에서는 보이지않던 코드들이 개발자도구의 요소탭을 통해서는 보인다.     
   이는 자바스크립트에 의해 Document에 추가된것이다.     
   즉, 유저가 해당 페이지에 도착한 시점에는 빈 화면이다.     
   브라우저가 모든 Javascript파일을 다운로드하고 실행한 후에야 화면에 보여진다.     
   해당 JS파일 어딘가에 개발자가 작성한 코드가있을것이고, React.js, React-Dom 코드도 있을것이다.     
   브라우저가 해당 파일들을 모두 실행시키고 나서야 페이지에 랜더링된다.     
   새로고침을 하는 순간, 페이지에 아무것도 없는 순간에 직면하고 그 순간이 지나면 내용이 나타날것이다.     
   그 순간이라 함은 React를 실행시키고 UI를 화면에 올리기 위해 모든 Javascript파일을 다운로드하고 실행시키는 데에 걸리는 시간이다.     
   브라우저가 보여줄게 없는 순간인것이다.     
   브라우저 개발자도구에서 javascript를 비활성화 한다면 Application을 실행조자 시킬 수 없다.     

   이것이 바로 client side rendering이다.     

   예를들어 사용자가 데이터 연결 상태가 안좋은 스마트폰으로 연결한다고 가정해보면, 모든 Javascript를 다운받아야 하고     
   모든 파일이 다운로드 완료될 때까지 기다려야 한다.     
   따라서 아무 UI 없던 순간의 화면을 훨씬 더 오래 직면하게 된다.     

 - 단점 2.      
   SEO 검색 엔진 최적화     
   웹사이트가 Google에 노출되기 바란다면, 빈 페이지를 보여주지 않는것이 좋다.     
   가끔 Google이 내가 개발한 웹 페이지의 Javascript를 실행시키기도 하지만 
   그런 위험을 감수하는 것 보다는 HTML에 웹사이트의 유용한 실제 데이터가 들어있는 편이 더 나을것이다.     
   아마 다른 검색엔진들은 페이지에서 Javascript를 실행시키지 않을것이다.     
   따라서 검색엔진이 보는 나의 웹 사이트는 비어있게 된다.     

   nextJS나 Gatsby, Remix 뭐든 간 어떠한 프레임워크도 사용하지 않는고 순수한 CRA로 설치해 개발한다면 Client Side Render 방식이 된다.     
   Client Side Rendering은 모든 Rendering 즉, 모든 UI 빌드 작업이 모두 Client측에서 일어나는 것이다.     
   Client는 Javascript를 로드하고 그 후에 Javascript가 UI를 빌드한다.     

### `NextJS *`
반면 NextJS 에서 UI를 빌드하게되면 자동으로 기본값인 Server Side Rendering이 된다.     
CRA와 마찬가지로 페이지 소스 보기를 확인하면 페이지의 내용들이 모두 실제로 브라우저 코드에 있는것을 확인할 수 있다.     
이는 브라우저가 이미 화면에 표시할 HTML을 갖고 있기 때문에 Javascript가 로드될 때까지 기다릴 필요가 없다는 것을 의미한다.     
개발자도구 sources탭에서 Javascript를 비활성화 하더라도 제대로 출력이 된다.     
HTML을 보여주는데는 Javascript가 필요없기 때문이다.     

꼭 기억해야 할 것은 NextJS Application의 모든 Page 안의 모든 Component들은
NextJS가 우선 Server에서 HTML에서 Rendering한다는 것이다.     
 
백엔드서버에서 모든 컴포넌트를 render한 후 해당 HTML을 브라우저 request에 대한 response로 줄것이다.     
이는 적어도 최초 Application의 UI빌드에서는 Javascript에 의존하지 않을것이다.     

### Hydration
Hydration은 단순 HTML을 React Application으로 초기화하는 작업이다.
예를들어 sources의 Javascript를 비활성화 한 뒤 anchor태그에 감싼 텍스트를 클릭한다면,		
hard refresh 방식으로 페이지가 새로고침되어 전환된다.		
그러나, Javascript를 활성화 한다면 새로고침 없이 아주 빠르게 출력 내용이 바뀐다.		
이것을 Hydration이라고 부른다.		

React가 hydrated되면 anchors의 묶음이였다가 React Component로 변환된다.		
페이지 전체를 reload하지 않고 빠르게 navigate 할 수 있게 된다.		
Link component는 CSR Navigation을 수행하고 있다.		
이로인해 동작속도가 매우 빠르며 새로고침되지 않아 보인다.		
페이지에 도달하면 UI를 가지고 있는 dummyHtml에 NextJS 프레임워크에 의해 React가 로드되고 Components가 로드되는 등, 		
모든것이 초기화 됨으로써 Application이 Interactive한 React App이 된다.		
특정 URL로 요청이 들어오면 React Comonent가 아닌 dummy HTML로 사용자에게 출력함과 동시에, NextJS가 아주 빠른 속도로 React가 초기화되는 것이다.     

state를 사용한다고 가정했을 때, Hydration이 미처 적용되지 않았다면, state조작이 불가능해진다.     
특정 URL로 요청으로 출력된 dummy HTML 버튼을 클릭했을 때, NextJS 프레임워크에 의해 Hydration된 후에 작동하게 된다.     

### "use client"
client에서 hydrate, interactive하게 만들어질 components는 오직 use client 지시어를 맨 위에 갖고 있는 component들 뿐이다.     
use client는 프레임워크에 hydrate되어야 함을 명시하는것이다.     
use client는 client에서 랜더링 되는것이 아닌 server(backend)에서 랜더링 된 후 client(frontend)에서 hydrate됨을 의미한다.     
state 혹은 eventListner 혹은 navigation등 React의 interactive한 기능을 적용할때, use client라는 키워드를 붙힘으로써 프레임워크가 
자바스크립트를 로딩하는 순간 React component로 초기화 시켜준다.     

use client가 없다면, hydrate될 필요가 없으므로 hydrate된 React component가 아닌 Server component가 된다.     
즉, 필요한 부분만 "use client" 키워드를 선언하여 hydrate를 적용히고, client에 딱 한번만 render되고 다시는 render될 일이 없는
hydrate작업이 필요하지 않은 컴포넌트의 경우 사용자가 Javascript를 더 적게 다운받아도 되는것이다.     
이로인해 페이지 로딩속도가 빨라진다.     

# *Pareller Fetch - Promise.all()*
```ts
async function getMovie(id: string) {
   await new Promise(resolve=> setTimeout(resolve, 5000))
   const response = await fetch(`${API_URL}/${id}`)
   return response.json()
}

async function getVideos(id: string) {
   await new Promise(resolve=> setTimeout(resolve, 5000))
   const response = await fetch(`${API_URL}/${id}/videos`)
   return response.json()
}
```
5초의 대기시간을 갖는 두개의 fetch함수이다.
해당 함수를 따로 호출하게되면, getMovie에 대한 호출이 5초동안 이루어지고 작업이 종료된 후
getVideos가 호출되어 5초동안 이루어진 뒤 작업이 종료된다.

Promise.all()함수를 사용하면 이것을 병렬로 처리할 수 있다.

```js
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
```
10초가 걸리는 작업이 5초만에 처리된다.

하지만 둘중 하나라도 실패했을때 특정 성공여부를 떠나 실패를 즉시 반환한다.





# *NEXTJS 수동 설치* 
 
 - ### 디렉토리 생성 ( OS CMD)
    ```
    > mkdir 폴더명
    ```
 - ### CMD 디렉토리 생성
    ```
    > cd 폴더명
    ```
 - ### VS CODE 폴더 실행
    ```
    > code .
    ```
 
 - ### 프로젝트 초기화 (IDE 터미널)
    ```
    npm init -y
    ```
    package.json 파일이 생성된다.   

 - ### Npm 패키지모듈 install
    ```
    npm i react@latest next@latest react-dom@latest
    ```
    React, Next, React-Dom에 대한 모듈을 설치한다.

 - ### package.json 수정
    ```json
    /* 생략 */
    "scripts" : {
      "dev" : "next dev"
    },
    /* 생략 */
    "license": "MIT",
    ```

터미널에 `npm run dev`라는 명령을 입력하면 next dev명령을 실행하여 nextjs 프레임워크를 실행하고, app/page 라는 파일을 찾게될 것이다.      
따라서 명령어 실행 전 app 디렉토리를 생성하고 그 하위경로에 page.tsx 파일을 생성한다.

`npm run dev` 명령 실행시 Typescript를 자동으로 설치해준다.    
또한 동일한 경로에 root layout역할을 해주는 layout.tsx 컴포넌트 파일이 생성된다.

# NextJS 라우팅 (파일시스템 기반)
NextJS는 폴더를 사용하여 경로를 정의하는 파일시스템 기반 라우터를 사용한다.      
각 폴더는 URL 세그먼트에 매핑되는 경로 세그먼트를 나타낸다.    
중첩된 경로를 만들기 위해서는 폴더를 서로 중첩하면 된다.    
단 라우팅할 경로에는 `page.tsx`라는 출력할 내용이 선언된 컴포넌트가 존재해야한다.
만약 중첩경로에 page.tsx파일이 존재하지 않는다면, 단순히 중첩 경로로서만 인정된다.
예를들어 /about-us/company/sales 경로가 존재하고
about-us와 sales 두 디렉토리에만 page.tsx가 존재하고 company 디렉토리에는 page.tsx가 존재하지 않는다면

`/about-us` 와 `/about-us/company/sales` 두 URL은 각각의 해당 디렉토리 경로에 존재하는 `page.tsx를 출력`하고      
`/about-us/company` URL은 page.tsx파일이 없기 때문에 NextJS의 `기본 404 페이지를 출력`한다.     
즉, 위의 경우에서는 `/company는 단순히 중첩 URL 경로`로만 사용될 뿐이다.      

# 404 Not Found Routes (not-found.tsx)
찾을 수 없는 파일은 경로 세그먼트 내에서 notFound 함수가 실행될 때 UI를 렌더링 할 때 사용된다.     
즉, 해당 URL 경로에 `page.tsx`가 존재하지 않는다면 notFound함수가 실행되고 `not-found.tsx` 컴포넌트를 찾아 렌더링한다.     

# usePathname

현재 URL의 pathname을 읽을 수 있게 해주는 클라이언트 컴포넌트 훅이다.
해당 훅을 사용하는 컴포넌트의 최 상단에는 "use client" 라는 문자열을 입력해 줘야 한다.
```ts
import Navigation from "../components/navigation";

export default function Home() {
  return <div>
    <Navigation />
    <h1>Hello!</h1>
  </div>
}

```
```ts
"use client" // import문 보다도 더 즉, 최최최상단에 입력해 줘야 함...
import { usePathname } from "next/navigation";

export default function Navigation() {
   const path = usePathname();
   console.log(path)
}
```