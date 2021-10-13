임재혁 201740228
===============

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