import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';
import Counter from './components/Counter.jsx';
import PropTypes from 'prop-types';

// ---------------------------------------------------------------------
const SayHellos1If2 = (props) => {
    const {names} = props;
    const isEmpty = (value) => {return value === '';}
    
    return names.map(name=>(
        <div 
        key={name}
        className={`
        ${styles.mainBackground} 
        ${styles.main}
        `}
        style={{
            'font-size':28,
                'background-color':'orange',
            }}
        >
            Hello {isEmpty(name)?'World':name}!
        </div>
    ));
};

SayHellos1If2.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string),
}
SayHellos1If2.defaultProps = {
    names: ['Default Props'],
}

ReactDom.render(
    <div>
        <SayHellos1If2 names={['A','B','','C']}/>
        <SayHellos1If2/>
    </div>,
    document.getElementById('root')
);

// ---------------------------------------------------------------------
// const Main = () => {
//     const [hidden, setHidden] = useState(false);
//     return (
//         <>
//             <button type="button" 
//                 onClick={()=>{setHidden(!hidden);}}>
//                 Toggle hidden
//             </button>
//             {
//                 hidden?null:<Counter />
//             }
//         </>
//     );
// };

// ReactDom.render(
//     <Main />,
//     document.getElementById('root')
// );

// ---------------------------------------------------------------------
// const SayHello = (props) => {
//     const {name} = props.name;
//     return (
//         <div 
//             className={`${styles.mainBackground} ${styles.main}`}
//             style={{
//                 'font-size':28,
//                 'background-color':'orange',
//             }}
//         >
//             Hello {props.name}!
//         </div>
//     );
// };

// const SayHellos1 = (props) => {
//     const {names} = props;
//     return names.map(name=>(
//         <div 
//             key={name}
//             className={`${styles.mainBackground} ${styles.main}`}
//             style={{
//                 'font-size':28,
//                 'background-color':'orange',
//             }}
//         >
//             Hello {name}!
//         </div>
//     ));
// };

// const SayHellos1If = (props) => {
//     const {names} = props;
//     return names.map(name=>(
//         <div 
//             key={name}
//             className={`
//                 ${styles.mainBackground} 
//                 ${styles.main}
//             `}
//             style={{
//                 'font-size':28,
//                 'background-color':'orange',
//             }}
//         >
//             Hello {name===''?'World':name}!
//         </div>
//     ));
// };

// const SayHellos2 = (props) => {
//     const {names} = props;
//     return (
//         <div 
//             key={name}
//             className={`${styles.mainBackground} ${styles.main}`}
//             style={{
//                 'font-size':28,
//                 'background-color':'orange',
//             }}
//         >
//             {names.map(name=>(
//             <div>Hello {name}!</div>
//             ))}
//         </div>
//     );
// };

// ReactDom.render(
//     <div>
//         <SayHello name="World"/>
//         <SayHello name="Air"/>
//         <SayHello name="Sun"/>
//         <SayHello name="Water"/>
//         <SayHellos1If names={['A','B','C','']}/>
//     </div>,
//     document.getElementById('root')
// );