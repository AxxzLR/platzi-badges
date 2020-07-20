import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

// import BadgesNew from './pages/BadgeNew'
// import Badges from './pages/Badges'
import App from './components/App'


//#region JSX vs React.CreateElement
// const nombre = 'Karen'
// const sum = () => 3 + 3

// const elementJSX = <h1>Hello, Platzi Badges from React!</h1>
// const element = React.createElement('h1', {}, 'Hola soy los children')
// const link = React.createElement('a', { href: 'http://fb.com', target: '_blank' }, 'ir a facebook')
// const linkJSX = <a href='https://platzi.com'>ir a platzi</a>
// const wParametro = React.createElement('h1', {}, `Hola soy ${nombre}`)
// const wParametroJSX = <h1>Hola soy {sum()}</h1>


// const jsx = (
//     <div>
//         <h1>Hola soy Axel</h1>
//         <p>y soy desarrollador</p>
//     </div>
// )

// const element = React.createElement('div', {},
// React.createElement('h1', {}, 'Hola soy Axel'),
// React.createElement('p', {}, 'Soy desarrollador web'))
//#endregion

const container = document.getElementById('app')

// ReactDOM.render(
//     <Badges
//         firstName='Elver'
//         lastName='Galarga'
//         jobTitle='Marter Cheif KickAss Developer'
//         twitter='Lameconchas69'
//         avatar='https://www.gravatar.com/avatar?d=identicon' />,
//     container) //<Badges /> es un elemento

// const props = {
//     firstName: 'Axel Alexis',
//     lastName: 'López',
//     jobTitle: 'Fronend & Backend Developer',
//     twitter: 'AxxzLR',
//     avatar: 'https://www.gravatar.com/avatar?d=identicon',
// }
ReactDOM.render(<App />, container) // es un elemento