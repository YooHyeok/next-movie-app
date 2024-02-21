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