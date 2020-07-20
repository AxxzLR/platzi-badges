import React from 'react'
import NavBar from './NavBar'

//#region Una forma de acceder a los children
// function Layout(props) {
//     const _children = props.children
//     return (
//         _children
//     )
// }
//#endregion

function Layout({ children }) {
    return (
        <React.Fragment>
            <NavBar />
            {children}
        </React.Fragment>
    )
}


export default Layout