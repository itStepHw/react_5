import {useEffect, useMemo, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from "./library/Main/Main.jsx";
import DrawBooks from "./library/Books/Books.jsx";
import ControlsBook from "./library/Books/ControlsBook.jsx";
import Modal from "./library/Modal.jsx";



function App() {



    const close_modal = () => {
        document.body.classList.remove('active')
    }

    return (
        <div className={'main_block'}>
            <Main/>
            <ControlsBook />
            <DrawBooks />

            <Modal />
        </div>
    )
}

export default App



// function App() {
//
//     const [watermelons, setWatermelons] = useState([
//         {
//             name:'арбувз 1',
//             price: 1000
//         },
//         {
//             name:'арбуз 2',
//             price: 101
//         },
//         {
//             name:'арбуз 3',
//             price: 1002
//         },
//         {
//             name:'арбуз 4',
//             price: 5
//         },
//     ])
//
//     // const [fillteredData, setFillteredData] = useState(watermelons)
//
//     const [query, setQuery] = useState('')
//
//
//     const fillteredData = useMemo(() => {
//         console.log(query)
//         return watermelons.filter(e => {
//           return e.name.toLowerCase().includes(query)
//         })
//     }, [watermelons, query])
//
//     function sortByName(){
//         setWatermelons([...watermelons].sort((a,b) => a.name > b.name ? 1 : -1))
//     }
//
//     function sortByPrice(){
//         setWatermelons([...watermelons].sort((a,b) => a.price - b.price))
//     }
//
//     const [counter, setCounter] = useState(0);
//     useEffect(() => {
//         console.log('counter changed')
//     }, [counter]);
//
//
//
//     const formInput = useRef()
//
//     function fillterHendler(){
//
//         setQuery(formInput.current.value.toLowerCase())
//
//
//         // let query = formInput.current.value.toLowerCase()
//         // const filltered = watermelons.filter(e => {
//
//         //     return e.name.toLowerCase().includes(query)
//         // })
//         // setWatermelons([...filltered])
//     }
//
//   return (
//       <>
//           <input ref={formInput} type={'text'} />
//           <button onClick={fillterHendler}>fillter</button>
//           {fillteredData.map((e, index) => (<div key={index}>{e.name} {e.price}</div>))}
//
//           <button onClick={sortByName}>Имя</button>
//           <button onClick={sortByPrice}>Цена</button>
//       </>
//   )
// }
//
// export default App


