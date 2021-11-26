임재혁 201740228
===============
## [11월 24일]
### react공부법

- react는 처음부터 점진적으로 적용할 수 있도록 설계 되었으며 <br>
  필요한 만큼 react를 사용할 수 있습니다.
- 온라인 코드 편집기를 사용하여 간편하게 리액트를 경험할 수 있습니다.
- codesandbox는 create-react-app로 생성된 프로젝트와 동일한 환경에서 테스트가 가능하다.
- cdn방식으로 간편하게 테스트를 할 수 있도록 html코드를 제공하고 있다.
- react문서가 어렵게 느껴진다면, tania rascia가 쓴 react 개요를 먼저 학습하자.
- 개발을 통해 react를 학습하고 싶다면 자습서를 추천.
- 자습서에는 react를 통해 틱택톡 게임을 만드는게 들어가 있습니다.
- react는 javascript를 어느정도 알고 있는 상태에서 공부 해야합니다.

<hr>

### JSX 소개
```JS
const element = <h1>Hello, world!</h1>;
```
  위에 문장을 JSX라 하며 JavaScript를 확장한 문법입니다.

- react는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신,<br>
  둘 다 포함하는 컴포넌트로 관심사를 분리합니다.
- react는 JSX 사용이 필수는 아니지만, javascript 코드 안에서 ui 관련 작업을 할 때 <br>
 시작적으로 더 도움이 됩니다.

### JSX 특징

- JSX도 표현식 입니다.
- JSX는 HTML보다는 JavaScript에 가깝기 때문에,<br>
 class는 classname , tabindex는 tabindex가 됩니다
- JSX는 자식을 포함할 수 있습니다.
- JSX는 주입공격을 방지합니다.
- JSX는 객체를 표현합니다.
- 위 특징들의 대한 간단한 코드들은 https://ko.reactjs.org/docs/introducing-jsx.html 참고.

<hr>

### 엘리먼트 렌더링
엘리먼트는 react 앱의 가장 작은 단위입니다.

>주의점<br>
컴포넌트와 엘리먼트를 혼동할 수 있는데 <br>
엘리먼트는 컴포넌트의 구성요소 입니다.

```js
<div id="root"></div>
```
이 안에 들어가는 모든 엘리먼트를 react DOM에서 관리하기 때문에<br>
이것을 rootDOM노드라고 부릅니다
<br>
react로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있지만<br>
react를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 노드가 있을 수 있다.<br>
react 엘리먼트를 루트 노드에 렌더링하려면 둘 다 ReactDom.reader()로 전달하면 됩니다.

<hr>

### Components와 Props
- 컴포넌트를 정의하는 가장 간단한 방법 javascript 함수를 작성하는 것.
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
이 함수는 데이터를 가진 하나의 props 객체 인자를 받은 후<br>
react 엘리먼트를 반환하므로 유효한 react 컴포넌트입니다.<br>
이러한 컴포넌트는 javascript 함수이기 때문에 말 그대로 함수 컴포넌트라고 합니다.
> 주의점 <br>
컴포넌트의 이름은 항상 대문자로 시작해야합니다.

### 컴포넌트 특징

- 컴포넌트 합성
> 컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있습니다.

- 컴포넌트 추출
> 컴포넌트를 여러 개의 작은 컴포넌트로 나눌수 있습니다.

### props
- 함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정해서는 안된다.
- 모든 react 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동장해야 한다.


<hr>
<hr>

## [11월 17일]
### timer.html

- this.state = { seconds: 0 }; <br> state를 0으로 설정
- seconds: state.seconds + 1 <br>
state에 1 더해준다.
- this.tick(), 1000); <br>
1초 (1000) 마다 한번씩 tick함수 실행

### review
  상태를 가지는 컴포넌트
  >컴포넌트는 this.props를 이용해 입력 데이터를 다루는 것 외에도 <br>
  내부적인 상태 데이터를 가질 수 있습니다. <br>
  이는 this.state로 접근할 수 있습니다.<br>
  컴포넌트의 상태 데이터가 바뀌면 render() 가 호출 되어 마크업이 갱신됩니다.

<hr>

### TodoApp.html
```js
handleChange(e) {
    this.setState({ text: e.target.value });
  }
```

- handlechange는 모든 키보드 변경 마다 react의 state를 갱신해서 보여준다.
- 유저가 강제로 대문자로 변경할 때도 사용.

```js
<input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />

if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text, //전달
      id: Date.now() 
    };
    this.setState(state => ({ 
      items: state.items.concat(newItem),
      text: '' //velue 초기화
    }));
```

- 유저가 입력 => handlechange => react의 state를 갱신 => form element가 react state를 참조
- input area에 이벤트가 발생하면 hendlechange가 동작하여 state의 text값을 변경.

```js
<button>
            Add #{this.state.items.length + 1}
          </button>

e.preventDefault();
```
- add 버튼을 클릭하여 리스트의 length에 1을 더해서 버튼에 출력
- 양식을 제출할때는 브라우저 새로고침이 발생한다. <br>
  리액트는 비동기식이기 때문에 새로고침을 할 필요가 없습니다. <br>그걸 안하게 만들어주는 문장.

### review
애플리케이션
> props와 state를 사용해서 간단한 todo 애플리케이션을 만들 수 있음. <br>
state를 사용해 사용자가 입력한 텍스트와 파일 목록을 관리합니다.<br>
이벤트 핸들러들이 인라인으로 각각 존재하는 것처럼 보이지만, <br>
실제로는 이벤트 위임을 통해 하나로 구현됩니다.


<hr>

### key props
> key는 props가 안정적으로 사용할 수 있도록 고유성을 부여하는 것 <br>
react가 어떤 props를 변경, 추가할지 식별을 도와줌. <br>
반드시 date를 사용하지 않아도 index값도 가능,<br>
 유일한 값이라면 어느 값이든 가능합니다.

<hr>

### javascript
> java는 배열속성을 정해주지만, <br>
javascript는 속성을 지정해주지 않기 때문에 <br>
배열 안에 아무거나 넣어도 된다.

<hr>

### markdown-editor
외부 플러그인은 remarkable을 사용함으로 cdn으로 링크를 추가한다. <br>
- 참조 url : https://github.com/jonschlinkert/remarkable

html 파일로는 도저히 안돼서 새로운 파일을 만들어서 해보기 <br>
1. 새로운 react 만들기 <br>
npx create-react-app markdown-editor

2. remarkable 설치<br>
npm install remarkable

3. 코드 복붙!

4. remarkable import 해주기.<br> 
import { Remarkable } from 'remarkable';

### review
외부 플러그인을 사용하는 컴포넌트
> react는 유연하며 다른 라이브러리나 프레임워크를 함께 활용할 수 있습니다. <br>
이 예제에서는 외부 마크다운 라이브러리인 remarkable을 사용해 <br>
textarea의 값을 실시간으로 변환합니다.

<hr>
<hr>

## [11월 10일]
### git hub 페이지

```javascript
 "homepage": "https://limjeahyuk.github.io/movie_app_2021"
```
  git hub에서 지원하는 페이지로 올려주기 위해서 <br>
  package.json에다가 homepage 주소를 적어줍니다.

```javascript
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```
  package.json에 script 부분에 적어줍니다.
  <br>  <br>
> npm install gh-pages

github 페이지를 만들기 위해서 터미널에 적어줍니다.
<br><br>
> npm run deploy

변경 사항을 다 변경해준다음 커밋까지 다 해준 다음 <br>
터미널에 적어줍니다. 홈페이지에 배포가 시작됩니다.<br>
그리고 그 링크로 들어가게 되면 movie_app이 나오게 됩니다.

### min 파일
    서버로 페이지를 올릴 때 min 파일을 사용합니다.
    줄바꿈을 다 없애버리고 한줄로 사용합니다.
    이렇게 사용하는 이유는 줄바꿈도 1byte 이기 때문에
    최대한 용량을 줄이기 위함 입니다.
    예를 들어 500줄 짜리 코드를 한줄로 바꾸면 500byte가 줄어드는 것 이기 때문에 배포할때는 min 파일로 하는게 효율적입니다.

<hr>

### CDN
```javascript
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script crossorigin src="..."></script>
```
  CDN script 3개를 기본 html에 넣어줍니다.

```javascript
 <script type="text/babel">
```
  script에 text/babel 넣어주는 거 필수.

```javascript
document.getElementById('hello-example')
<div id="hello-example"></div>
```
ID값을 body에 넣어줍니다.

<hr>

### 리액트 장점
- 내가 고치고 싶은 부분만 고칠 수가 있습니다.
- 리액트는 프론트지만 배워두면 리액트 네이티브로 백으로도 전향 가능하다.

 >  고치고 싶은 부분만 고치는게 정말 중요한 이유는<br>
    요즘 유튜브, 페이스북 같은 거대한 사이트를 전체적으로 고치려면
    다운로드만 한세월 걸린다.<br>
    하지만 리액트는 고치고 싶은 부분만 고칠 수 있어서 쉽게 바꿀수가 있다.


<hr>
<hr>

## [11월 03일]
### Navigation

```javascript
function Navigation() {
    return(
        <div className="nav">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </div>
    )
}
```
- 글을 클릭했을 때 해당 주소로 가서 화면을 보이게 한다.
- a 태그는 페이지 전체를 다시 그리는 성질을 가지고 있다. <br>
  Link를 사용하면 필요한 부분만 그려준다.
- Link 컴포넌트는 href 대신 to 사용.

```javascript
function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path = '/' exact={true} component={Home} />
      <Route path = '/about' component={About} />
      <Route path = '/movie-detail' component={Detail} />
    </HashRouter>
  )
}
```
> Navigation 태그는 반드시 HashRouter 태그 안에 포함.
<hr>

### Detail
```javascript
<Link to={{ pathname: 'movie-detail',
           state: { year, title, 
           summary, poster, genres }
            }}>
```
- 클릭했을 때 url이 movie-detail로 이동.
- state 에 주어진 값들을 받아온다.
- BUT> url에 그냥 movie-detail을 적으면 주어진 값들을 <br>
받아올수가 없음.
- state에 아무 값을 받아오지 않았을 경우 다시 back 시켜줘야함.

<hr>

### 리다이렉트 기능
```javascript
componentDidMount(){
        const { location, history} = this.props
        if(location.state === undefined){
            history.push("/")
        }
    }
```
> 만약 state 값이 underfined라면 /으로 이동 시켜주세요.
<br> componentDidMount()는 render함수가 실행되고 나서 실행
<br> 그렇기 때문에 state에 underfined 값이 들어 있다면
<br> render함수가 실행 되지 않는다.


```javascript
render(){
        if(location.state){
            return(<span>{location.state.title}</span> )
        } else{return null}
      }
```
> 이런 식으로 render에서 일어나는 오류까지 잡아주면 된다.


<hr>
<hr>

## [10월 27일]
### key props 추가

```javascript
<ul className='movie-genres'>
                {genres.map((genre, index) => {
                    return <li key={index} className='movie-genre'>{genre}</li>  
                })}
            </ul>
  ```
- genres에 key값으로 사용할 id값이 필요합니다.
- map()함수를 사용하여 배열의 index값을 사용하면<p> 매우 간편하게 사용 가능 합니다.
- 만약 map함수도 사용 안하고 딱히 key 값으로 사용 할 것이 없다면 <p> for문을 돌려서 만들어 주기로 합시다.

<hr>

### slice 함수

```javascript
<p className='movie-summary'>
{summary.slice(0, 180)}...
</p>
```
- slice(0,n) > 글자 수를 n 만큼 제한합니다.
- 글자가 그냥 끊기면 너무 어색하기 때문에 <p>
...을 사용해서 부드럽게 만들어 줍니다.

<hr>

### Router 
Router 설치방법
```javascript
npm install react-router-dom
```
- 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러준다.
- 새로운 페이지를 로드하지 않고 <p>
하나의 페이지 안에서 필요한 데이터만 가져오는 형태

Router import 방법
```javascript
import {HashRouter, Route} from 'react-router-dom'
import About from './routes/About'
import Home from "./routes/Home"
```

HashRouter & Router 관계
```javascript
<HashRouter>
      <Route path = '/' exact={true} component={Home} />
      <Route path = '/about' component={About} />
    </HashRouter>
```
- Router를 HashRouter로 감싸준다.
- HashRouter는 정적인 페이지에 적합하다.

path - component
> 어떤 URL에 어떤 컴포넌트를 불러올지 결정한다. <p>
'/'는 root 값으로 기본 url을 뜻합니다.

exact
> exact가 없으면 URL에 '/about'를 붙히더라도 기본 컴포넌트도 함께 불러온다<P>
exact={true} 를 이용해 원하는 URL에 원하는 컴포넌트를 불러옵시다.


<hr>
<hr>

## [10월 13일]
### loding...

```javascript
this.setState({movies, isLoading: false})
```
- movies를 실행한다.
- isLoading을 false로 변경한다.

### rating

```javascript
await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
```

- ?sort_by=rating을 사용하면
- rating이 큰 수 부터 작은 수까지 나열해준다.

<hr/>

### Movie.js

```javascript
function Movie({title, year, summary, poster, genres}) {
    return(
    <div className='movie'>
        <img src={poster} alt={title} title ={title} />
        <div className='movie-data'>
            <h3 className='movie-title'>{title}</h3>
            <h5 className='movie-year'>{year}</h5>
            <p className='movie-summary'>{summary}</p>
        </div> 
    </div>
    )
}
```
- return하는 값은 한 덩어리여야 한다.
- 각각 title, year, summary, ... 등등 값을 받아온다
- css를 위해서 className을 달아준다.


### isRequired

```javascript
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
```
- year에 number타입이 필요하다
- title에 string타입이 필요하다
- ...


<hr/>

### App.js

```javascript
movies.map((movie) => {
  console.log(movie);
      return <Movie 
      key = {movie.id}
      id = {movie.id}
      year = {movie.year}
      title = {movie.title}
      summary = {movie.summary}
      poster = {movie.medium_cover_image}
      genres = {movie.genres}
        />
      })}
```
- key 값은 무조건 필수 <br>
  마침 id값이 다 다르기 때문에 key 값으로 적합
- poster 값은 이미지를 받아야하기 때문에 <br>
  movie.medium_cover_image를 받았습니다.


<hr/>
<hr/>

## [10월 6일]
### axios
데이터 로딩을 할때 axios 를 사용한다. <br>
터미널에 
> npm istall axios<br>

설치한다

<hr/>

### loding...

```javascript
class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
```

```javascript
getMovies = async() => {
    const{
      data: {
        data : {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
   // const movies 
    console.log(movies);
  }
```

- status : 응답상태 메세지
- data : 영화 데이터
- movie_count : API가 보내준 영화 데이터의 개수
- limit : 보내준 데이터의 개수
- movies 키의 서브키로 id, url, lmdb_code, title 등을 제공한다.

<hr/>
 > API를 사용하려면 axlos 를 import한 다음, <br>
  componentDidMount()함수에서 axlos로 API를 호출 하면 된다.


  ```javascript
 componentDidMount(){
   this.getMovies()
  }
  render() {
    const {isLoading} = this.state
    return(
      <div>
        { isLoading ? 'Loading....' : '영화 데이터 출력' }
        </div>
    )
  }
  ```

  > componentDidMount()함수가 실행 되면 <br>
  this.getMovie()가 실행된다.<br>
  이때 자바스크립트에게 getMovies() 함수는 <br>
  시간이 필요하다는 것을 알려야 하는데 <br>
  이때 사용 하는 것이 async, awalt이다.
<hr/>
<hr/>

## [ 09월 29일]
### 이미지 삽입

```javascript
<img src="image/[이름]">
```
이런 형태로 태그 작성

### prop-types
prop-types는 컴포넌트가 전달받은 props가 원하는 값인지 확인해 주는 역할을 한다.

<hr/>

### State

```javascript
class Apps extends Component {
  constructor(props) {
    super(props)
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  state = {
    count: 0
  }

  add = () => {
    this.setState({count : this.state.count + 1})
  }

  minus = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    console.log("render")
    return(
      <div>
        <h1>Rhe number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
```
>- class 안에 state = {}라고 작성하여 정의
>- return 함수로 count 값을 반환 한다.

### state 설명
props는 정적인 데이터만 다루지만<br>
state는 동적인 데이터를 다룰 때 사용합니다.<br>
state는 class형 컴포넌트에서 사용됩니다.

<hr/>

### constructor() 
>- Component를 생성할 때 state 값을 초기화하거나<br>
메서드를 바인딩 할때 사용.

### render()
>- constructor() 다음 호출

### componentDitMount()
>- render() 함수 실행 직후에 실행

### componentDidUpdate()
>- render()함수로 화면이 업데이트 된 직후에 실행 된다.

<hr/>
<hr/>

## [ 09월 15일]
### Potato()

```javascript
function Potato(bar) {
    return<h1>
        I don't like {bar.foo}
    </h1>
}

export default Potato;
```
Export 구문을 사용하면 다른 파일에서 해당 컨포넌트를 사용 가능합니다.

<hr/>

### props

>- 컨포넌트에서 컨포넌트로 전달하는 데이터를 말한다.
>- props의 이름을 지정해주고 값을 넣어서 다른 컴포넌트에 전달한다.
>- 문자열을 제외한 모든 값들은 중괄호 {}로 묶는다.

<hr/>

### map()

```javascript
function App() {
  return (
    <div >
      {
        FoodLike.map(dish => (<Food key= {dish.id} name = {dish.name} picture={dish.image} />))
      }
    </div>
  );
}
```
>- map()함수는 배열의 모든 원소 마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환해 준다.
>- foodILike.map()의 형태로 지정하고,<br> 인자는 dish=><Food.../>와 같이 컴포넌트를 반환하는 함수를 전달.

<hr/>

### image

```javascript
const FoodLike = [
  {
    id : 1,
    name : "gobchang",
    image: "http://th2.tmon.kr/thumbs/image/46b/303/d46/fe4e3add6_700x700_95_FIT.jpg"
  },
  {
    id : 2,
    name : "pineapplePizza",
    image : "https://i.ytimg.com/vi/1cEJ0okt1A8/maxresdefault.jpg"
  }
]
```

>- picture props에는 dish.image가 추가
>- img tag 추가
<hr/>

### key props

>- 리스트의 각 원소는 유일한 "key" prop을 가져야 함.
>- id를 추가하는 이유는 리액트에 Food 컴포넌트가 서로 다르다는 것을 알려주기 위해서
>- key props 값으로 {dish.id}를 전달한다.

<hr/>

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