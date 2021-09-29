import PropTypes from 'prop-types'
import React, {Component} from 'react'

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

const FoodLike = [
  {
    id : 1,
    name : "gobchang",
    image: "http://th2.tmon.kr/thumbs/image/46b/303/d46/fe4e3add6_700x700_95_FIT.jpg",
    alt: "곱창",
    rating:5.0
  },
  {
    id : 2,
    name : "pineapplePizza",
    image : "https://i.ytimg.com/vi/1cEJ0okt1A8/maxresdefault.jpg",
    alt: "파인애플피자",
    rating:4.9
  },
  {
    id : 3,
    name : "한뚝배기 하실래예",
    image : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgVEhUYGBgaHBIaEhIYEhgYEhgcGBgZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGDQhGCExMTQ0NDE0NDQxMTE0NDQ0MTQ0NDE0Pz8/NDQ0PzQ/Pz80MTQxMTQxMTE0MTExNDExMf/AABEIAMgA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBAUBBwj/xABLEAACAQICBQgGBgcFBwUAAAABAgADEQQhBQYSMUETMlFSYXGSsQcicoGRshQjM0LB0hYkNFNic6GCk9HT4RdDY3Sis/AVNYPC8f/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAHxEBAQACAgMBAQEAAAAAAAAAAAECEQMhEjFRE0Ei/9oADAMBAAIRAxEAPwD16lSUqt1G4cB0R/Ir1V8Iioc1e4eUxNO6ZfDuEQKQVDesCTcsw4EdEA2+RXqr4RFyK9VfCIJHWmt1afwb80aNa63Vp+F/zRbAv5FeqvhEXIr1V8ImNoPTD12YOFFhcbII49pM29qMG8ivVXwiLkV6q+ER21B7C6cqPWFMqmztFbgHasL/AMXZFsN/kV6q+ERcivVXwiO2otqMG8ivVXwiLkV6q+ETzvXH0g1MJXNLDii4VQWLBmNzvF1cAWygv/tfxh3U8Nlv9Srb47cW4entnIr1V8Ii5FeqvhE8apelrFsL8nhrcTsVPPlMpN/tWxaOeVw9F6fA01cVB3guQf6Q3Bp6/wAivVXwiLkV6q+EQI0dru2IQPSCEHeCjhgegjayln9Ka/Up+F/zQ2Qu5FeqvhEXIr1V8Igh+ldfqU/C/wCabOgNKviNvbCjZ2bbII3333JhsNbkV6q+ERcivVXwiO2oyrUIUkcAT8BHsO8ivVXwiLkV6q+EQc0Np+rWqhHVACGzVWByF+LGEu1FsG8ivVXwiLkV6q+ER21BXS+slWjVZEVCFNgWVr7geDCGwKORXqr4RFyK9VfCIDjXLEX5lLwt+eO/TGv1Kfhf88NwDbkV6q+ERcivVXwiD2rmnqmJqMjqgAUsCoYG4ZRxY5esYTRhhRRRQDYoc1e4eUEdcD9cvsL87wuoc1e4eU8/9IJb6Qljb6pfnqRUKJaKnvmOt+ky/o8G5vAC7VPnv7P4wqgrqofXb2fxhVAVwQN0f+1D228zDMQKwB/WV9s+Ziog1gJ6UNN1MNRVKZKh9oO451svVB4b+EO55B6WsaGrBCfVRRl2kXN+3dC3o8Z284euWbbAvvBFt4O+0r1cKLlkYju3wz1f0OrIHcb93dCKjoGjbNBMvPTace3k3I1UYZXuOcF334N0iWqdJzTZXQ7Nxsncw7Beeu4fRFJdyjsuIsdolGHNHwhcznE8x0PjKuFYDlCA1wyNmpGQUjtBMKkxeKJFwNk2uR0SHT2jVphHC2AOy47G4/8AnTLer42aCpe+wWA7ibiOXaMsfFs0jffCvU8ZVP7H4wTw53wu1Q3P/Y/GaRlRJI8TzH9lvIySQ4s2Rz/C3kYUoDNV/wBpXuf5YcwG1X/aF7n8ocwh1y8881i/aKntfgJ6JPOdYDfEVPaMKIyBvMdeUKr+uRIahPAmIDjUc/rD/wAtvmSHk819HLE4h/5T/Ok9KlT0GFFFFGGxQ5q9w8oBa/kfSE/lp89SHtDmr3DygF6QF/WEP/DQf9dSKgMBwJoYCoDuErUaJc8JawdMgnKLRCrVXnt7J8xCqCuqvPb2T5iFUYrggZg/2pfbPmYZiBmE/al9s+ZipwaTxj0m4MjEOW4kEHsZR/gZ7PPOfSro+6JUX71lYdGxmCPj/SLL0rH2ytFJekgXqr5TXpq3QR7pk0sE4ooiMVBIu+5tns/rKq4inTcBGe43sXuD7r3t7pz2durGiVL9sixmJSnYVHzPNUXZvgI7BYoVEJBvYb5hY/HurbSKBmAXPOz6OgRRdqTSLJiKVRUDAqLlWUqw6DboymJqc7Gk4a91cix4QrwLl7motmsV2usGtxmPgMHyfLEDZO2BfpsM/fNcGHI08Pu3Qu1RHqv3r+MEcKDbMww1R5tTvXyM2c4gIkOL5j+y/kZMZBjOY/sv5QpA/VUfrA9l/KGxgXqr9uPZfyhoYoddnm+nf2ip7bT0ieb6bP19T22hkIG6w2XLGRtXUjeJbphdt9vdla+6Q10p7aHLI+6Zy7VZoSejdwcQ9v3T/Ok9Knn+o2z9JbZtfkn3e2k9Amk9FWHFFFKJsUOavcPKef8ApBJ+kJ/LT53noFDmr3DygF6QD+sILf7tc/7T5QDFoBNrebW4TTppSCA02u98xeZ+jcTyZzS+UkwlJgSxW1yTHvohPqv9ofZPmIVQT1YP1p9lvwhXeSKQMC8If1pfbPmZu0cU/KuW3AEKnAWO+D2jnviUPS/mTJlMczE1q0cuIw7BhcqCynjlv/pNkyphaxfaDgWz+G60dEuqBag2qFM8CCD7svdKC6ORSGCtexAFwFsd9+mbePw3JM6MLKM6fRb7tpnYnFhEuMzwHbwnPl1XZhqx3R4CEqBw4SXYBb1W2W6Mj/QzKw2Mem2SbWWbXzJ45dEsVA1S5bI70KixU9N+PdIadNaohAuT75V0yqh2O4MwNh0lRcythMc7qVfnKbHo7CIzSOJ2nB/hTLttYzTD2x5eofhgtvVhfqkfUfvXyMEMNUuDlaF+qXNf2l8p0OVuCp6xWMx5+rf2H8pj4jHVRiNlbbIIULbIg2zJ6Zr6R+yf2H8pM3/SCeqw+vHsv5QyZwLXO/Id8DtVftx7L/hN3TrMAhTeGvftEP4bXnm2mftqntt5z0PC1C6KxFiQCRAHSq/Wv7b+cKceba1456e0FO9hB6vja1MAttWIupOU2ddBYsf4hMTSWmDiEVWW2yMiOJhjjDto/wDQjj2qY6orHIYeod//ABaI/Ge6z5/9A3/uFX/lqv8A3qE+gJaWFFFFANihzV7h5QD1+S+IT+WnzvDyhzV7h5QA1/YjEpb90nzvFQwEJBveXsBULXu1+yZm1nLWHqhD6q5mBNzB400W2l358JoLrO4OaqR0WI/rBl8ceKyu2kT1YqYjbTr7TNYetfLvlLD4rYdXG8EN2TKXSN+ElGL7IjFp1rPCmPEZBh9ZWUm6Ajo3f1g39J7BOjFnogGlpnGmvtNa27IcAJiChtLv3Z57pLhtNIa9OgbbVRtkAZ2FjmejdacoVQGtwuw+Btb43mfJP66OLcnbP0Xjr7a1yUdGZWUUy4tf1WHSCLZyfG4nlEWlSV9t8jWf1FRRznVBx6O+T1ro+0oF917Z26O0SfD7bttMPjM9ttO06Qpqw45C53ntJlbEp62fEAjulnSFQLmxyAu3ulfWHELhsPSeop2i2yQN427tn3fjNOObY8k8pqJsFuM1tF6ZbDhgqhg1iQb7xBfBaWRhemb3zt97ozHCWRpC/CaOe42exAdPManKbIvcG1sspcxWs7OjIEA2gRe5NrwQbSNuE4ukSfuxBu6M0gaDhgL5EWO4gzTxWsZqAAIB7yYJpjj1ZKNI/wAMALaOsxVQuwCQLA3Ig/jMUWYkC5uSffKbaR/hlXEaURcj6rH+szy2c0wdLckzlqqXAYZdHRA/WLCpTqDk8gwuV4CautWKYki9ybbNt8Fq1RnN2JJ3Z75fHjfexa9I9BA/X6v/AC1T/u0J7/PBfQWV+nOFBDfRqu0eB+uoT3qapYUUUUA2KHNXuHlATX17YhB000+epDuhzV7h5QK1vAbFoCL/AFKn/rqQAQFSxzk1Ou3CR11ubGV6CHateTeqGqazMfXF7DKV6zDolivT2EDXvfeLbpRdyYwaqE8JIiteUsZpJaS33t1b7u+DeO0zVqE+tsjqrkP9YtNsOHLLsWYvSNOiPrGAPV3t8BMHSOsxI2aQsDe7ZbX+kHmUtmY3Yzzj8XTjw4xc0LjQmKo1WOQqKSexj/rD3WVPoz8rb6qoRtOB9nUOVz/C1t/SO2eXOtrjoOX4T0PD6TbF0KDsxamCaOLo/dJYeq5HwIPC8MsdzQyx+NHDaTQgbW/g28S3/wCpC1lBPbaw+JmDidX2o3am7FL5bw4vuvwPfNHD6vuy3rs7KM+T2rA9jH8BMPzu0rOi6X0lzVbOlTN9r7ruu4L0qp3nicoOekPHl6iU75KC7d7ZD+gMI6WlGo0avK2FOns7CgAFcjZBbttYds81xeLevUerU5zG56AOCjsAnTjjMcTwx3dqqVSr3ViGGVwbWmzhtP1EyYBx2ix+ImJg02ix7ZZZQMoa218JlO4Il02lQWa6HtzX4iXKFyLg3HWBuPjBC0nw2JambqSOzh8JNxY5cE/gxRjJ0bOcr4R6aU3cjaqLdlH3TkbfAj+saG4SbNOTKaulp2BGUxNN4cMFztnNdEMpYnCioczuIykkEtIUVNekjNYX50zdJaML4hqdD1ybHK2XTnLWuC7NQDojdT8eKVU33sAAZfqbh4zd0PfQ1oOrhsbUeoAL4d1sDc3NSkfwntc849HlUviHY/u3Fv7aT0eLDK5TdGc8bphxRRS0tihzV7h5TzrXzGCjjUc3+wQW/wDkqT0WhzV7h5QM11wxespCgnYUC4/ieKnHneL0jtHcRIKeO2Te5hemEWw2kW/HKdOEp9RfhIsp7nwOVdMqVC3a44yGljUZlXabMqLAZ5kDKFH0Sn1F+EsaLwVMPt7C+rmpsN/COY3Zyz4FtfNHFNl0Wyj1HAG63MJ7wbe6BaG5sd/DtE9sxmFWqrJUG0rAhh0j/wA4zyXTmh3wdbYa5XfTe3OQ5fEcZtcXZw59aUlEeUBEdsWjTB0KjD1iDuIX452m9qbi1o19h/s6oCOp3Bvut2cRftmJiRnfsB+Bj36RxiRcdx7C1Ij6tmyJSx42DAjyl7FV7K1t9jbvOQtB7VjTIxlNA5+sp5VOk2XJx2HzEsa06TGEolhbbJAp9rWyPu3y5rTmsu9ArXDGi4w1M3WmSap67nfc8becHtmym/ROi7G5Nybkk7yTG18xYcSB/jJdWM1NO4SnZR25xy5kx/YIweqO+CnKjWz7rDthPqTq8cQ/L1R9Wp9QH77j/wCo49O6Z2r2hTjK4TMIgD1n6Adyj+I28563QpLTUJTUKigBVAsABul44sOXPXUZunsDytE7POp+utt5AHrAe7ygbSxCH789IGUwn0bSVmGwu88JlzY97jjtn9DwrX3PIkqEEkG8J2wNO3MEX0JOoPhMNUt4/HnuldE8u5c5ygureyQwNrbs56h9Dp9QfCMfApbJBK1RvFD6LVIxLgm/1L/PTnqsBdR8NsV3OyB6jC49tIdSsZqJyu6w4oopRNihzV7h5QZ1o+1T2B8zQmoc1e4eUGtaPtU9gfM0AwnGchYSd98gaKg2XcAvqHLe3kJRl7ApdMyd7WztHj7Vj7XFTtI6M8xMzWbRK4qiUbni5p1OKtbyO4iaiZRz2tn8Ju1l1XirAjJhY7mHEEZERhOU2tcMLyeJe3NbZdfeLEX7CP6zAaZu7C7mzWW6j3idw+ai/DKSJzYyjkSOnMQUs6Kx74aqtSnvGTLwZTvUyxrFpp8Y4dhsouVOne9hxJPEmUHyjCOME3Gb2eg9WcQXN+jzi3LH0xZYKNbfIqr+uFk7bxK+B9fEKOBdFz3WLARbTldPVdTcEKWHUkWNQ8o5tmb80dwFoSA5SlhN3dLYE1xcWV3XHIlGufWPu8pcLSnXADd9jM+T0yyMaKcYxGYpdjBHRR7Jsaq/bN7DfMkLYJaq/bN7DfMkLY4GFFFFGGxQ5q9w8oNa0fap7A+ZoS0OavcPKDetA+sX2V+ZoQMGpvkDSepvkDRUGkzSwjHYF+3ZHSOmZfZ3TZp2GQztkTwy4SsIvFKixrtwnKtbYUscrSkxzuM7wz5fHprMQXr+frKQ47NT4bQ4wRYz0fW3RbYmmuzz6e0ygjnAjNb9PGeb1FtDHKZduriv+dJKJnag49EjpCWNjpj21MbdInNlMlYcJG65WjDrcBJL5SItlOs0C25UewJ7DG6qOv0mmam7avbpYA7I+NpBjHspjtWdEvi6oVW2Qtmepa5UAjcOJvIt7Y8mX+tPasG+VwT3GXg8z6KbAA//AGW0E2xrmqUi8qYtfWB6R5S6gkGNT1b9B84s50jJSaciczk50Ozt42KBNnVX7ZvYb5khdBHVT7ZvYb5khdKnoMOKKKMNihzV7h5Qd1mH1i+yvzNCKhzV7h5Qc1ma1RfZX5mgGDVGcrPLNU53lV2hQlwVLaNzuH9TNRJUwRATfmMyO+KviCgFh7XYJUvjNrxiDTNcbJHAA915haL0/wAkjXsx9ZU4kA7wBNnSNLbpsF32NoA4RlaiF9Zayu61L7jY5WPdOTLLyu3Tj1BEdY8/WHuvnBzSCU6lRnF1DG+yAMid+cYMK+Z2SRxIFxEoO4D3SZlZ6Hl8Oo4SkN5f4COqYenwZ/CJ285fO0r9Mh5ZfUDYVN+2w70/wMa2CB3VF94ImmujnYAgd/Z2zuP0PUpItQ2KNuZTe3f0RzlyL9b9YtXR7jdst7LAyrVplecCO8S1WcSD6Sw3MfMSpy1pOWs3GgkBVzJNgAMz2T0PUXV+phUZ6wAapsEJ95QL5N257pgaCxVJKqvUQBluUYLlftH4z0DC6VSomVieBvu6RDLP4i/6u2ghF8+O6WAtpirjAxsM7b/dNwuGAZTcHMGb8OW/bPLHR6zmJb1DGq8VWoNk3NsjN8/TOsomdvIDUjtuciE14ryHai24Bvap/bP7DfMkL4Ganteu/sN8yQzlT0TDiiijDYoc1e4eUENcSeWX2F+d4X0OavcPKBuuh+vX+WvzvFQwHqN0yEu0TtIy0m0L2GJLLbfbP3S5iKgCHtsD2TNw1fZNxv3CWtsOpUi1/wCh4GG+tN8arNiDTyJymJrNhUQrUSwLZMBxy3zbrUTUUqecL36PdAnH7YcpUJOySU6LGc16bT0no4l05rEeUkL7d9pQb7+F/hM9XkyVIpUXFcQUlFhTF+BNzI0qqt7BQT97Z3d0jZ8pDt3haI2cDpPkzYttL0Wzv03momm6ZUqcwfuHm37oJ3jkk6TcZbtfxFPDvfaRezZNrTIfRtO+TNbgOPxlqRu9t8rapidTo00Hqpc9ZjLejnIdthCTlkAd8IcDo2gqKz2ZiATn0zQo4lEFqagDsEpUlhmjsOQpJWxlDVrTG1iK+GY5qS9K/Qbba/HP3y4+PPugdSWo+kxWoL6qFOVa9lsRZhfptwmnFl/osvT0wNbfM/H18r/ASKriwSTcnoHASpiK20Z05Z7jC3RjVWjeXacJjCZkhJy7TnLtIyYrwIT6jOTiHv8Au2+ZIeQB1DP6w/8ALf56cPpU9BhxRRRhsUOavcPKAOv9/pCfyl+epD6hzV7h5QZ1n1dq4qqroyABFUhmYG4Lngpy9YRX0HnzX6ZExPSYWnUfEdel43/JGHUTEdel4n/JI8arYVQnpMspVZdzGEI1ExA+/S8b/kjv0GxHXpeJ/wAkXjRKxqGKN89/CQaT0cmJzBs43f4HshD+hGIG56V+HrPa/D7kZhdTcaLGo9DaHFajm/xQScsL/G2HJNdvMdIUmovsPk3EfiJCleeh6w+jTE4pldatFWG8lnz+CTOX0U40f7zDf3lT/LkXjqv0x+hA14lrCGJ9FWM/e4f+8qf5cafRVjv3uG8dT/Li/PL4PPH6FVrCPWqIUD0VY797hv7yp/lx6+i7G8amH/vKn5Ifnl8Lzx+hNqwkbuCLQx/2XY395h+36yp+Sa+H9GjADbdWPGzMB8sPzvw/PH682OOrKNikWYnJVGdu89EJ9BaHqBdqvVZyQLruUd0N8JqUaXMFP4tf5Y7EasYkiyNSHe7/AJJfjda0PPH6FsXTRQRcgWNzxExdF6RR2elRXYpoAVH33JObsekzaxno+0nUck1sME6gqVb27fq5zRXozxtGrttUw+yQwIFSpfPdvTul44agyzxuPvtWLHpnCT0wn/QjEdel43/JF+hGI69Lxv8Aklarn2FiT0xpJhX+hGJ69Hxv+WcOpGJ69Hxv+SGqQSba6Y0M3Ewu/QfE9ej43/JGtqLiT9+j43/JDVGy9HpP0h7m/wBU3z056NBHVTVuthKrPUZCpRlAQsTcsh4qMvVMLpU9Ew4ooow1aVVQq3YbhxHRH8svWXxCdigHOWXrL4hFyy9ZfEJ2KAc5ZesviEXLL1l8QnYoBzll6y+IRcsvWXxCdigHOWXrL4hFyy9ZfEJ2KAc5ZesviEXLL1l8QnYoBzll6y+IRcsvWXxCdigHOWXrL4hFyy9ZfEJ2KAc5ZesviEXLL1l8QnYoBzll6y+IRcsvWXxCdigHOWXrL4hFyy9ZfEJ2KAc5ZesviEXLL1l8QnYoBzll6y+IRcsvWXxCdigHOWXrL4hFyy9ZfEJ2KAY0UUUA/9k=",
    alt: "뚝배기",
    rating:4.8
  }
]


function App() {
  return (
    <div >
      {
        FoodLike.map(dish => (<Food key= {dish.id} name = {dish.name} 
          picture={dish.image} alt={dish.alt} rating={dish.rating}  />))
      }

    </div>

  );
}



function Food({name, picture, alt, rating}){
  
  return (
  <div>
    <h1>I like {name} </h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={alt} />

  </div>
  )

  
}
export default Apps;

