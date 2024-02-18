# *NEXTJS 란?*

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