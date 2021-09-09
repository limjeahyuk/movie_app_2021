임재혁 201740228
===============
## [ 09월 08일]
### React
>- facebook에서 제공해주는 라이브러리.
>- 애플리케이션 개발시 토대로 사용될 수 있습니다.
>- 현재도 많이 사용 되는 인기있는 라이브러리 입니다.
>- 사용자와 상호작용할 수 있는 동적인 ui를 쉽게 만들수 있습니다.

### 장점
>- 자바스크립트로 작성되어 있어서 <br> 리액트 때문에 다른 언어를 배울 필요가 없습니다.
>- 자바 스크립트 실력이 향상된다.
>- 학습을 효율적으로 가능하다.

<hr/>

### APP.JS

```javascript

function App() {
  return (
     <div >Hello React!!!!</div>
  );
}
export default App;

```
default로 선언된 모듈은 하나의 파일에서 <br> 
단 하나의 변수 또는 클래스 등등만을 export 할 수 있다.<br>
App 컨포넌트를 리턴한다.
<hr/>

### index.js
```javascript
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App/>
document.getElementById('root')
);
```
APP 컨포넌트에서 리턴 값을 호출한다.<br>
root라는 id 값을 찾아서 넣어주세요.
<HR/>

### index.html
```html
<noscript> You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
```
App.js에서 리턴 한 값을 <br>
index.js에 리턴 받은 후 id를 사용해서 <br>
index.html에 같은 id값을 찾아서 넣어준다.
## [ 09월 01일]
학습내용