import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

// const Main = () => <h1 className={styles.main}>Hi JSX！</h1>;
const SayHello = (props) => {
    const {name} = props.name;
    return (
        <div 
            className={`${styles.mainBackground} ${styles.main}`}
            style={{
                'font-size':28,
                'background-color':'orange',
            }}
        >
            Hello {props.name}!
        </div>
    );
};

const SayHellos1 = (props) => {
    const {names} = props;
    return names.map(name=>(
        <div 
            key={name}
            className={`${styles.mainBackground} ${styles.main}`}
            style={{
                'font-size':28,
                'background-color':'orange',
            }}
        >
            Hello {name}!
        </div>
    ));
};

const SayHellos1If = (props) => {
    const {names} = props;
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
            Hello {name===''?'World':name}!
        </div>
    ));
};

const SayHellos2 = (props) => {
    const {names} = props;
    return (
        <div 
            key={name}
            className={`${styles.mainBackground} ${styles.main}`}
            style={{
                'font-size':28,
                'background-color':'orange',
            }}
        >
            {names.map(name=>(
            <div>Hello {name}!</div>
            ))}
        </div>
    );
};

ReactDom.render(
    <div>
        <SayHello name="World"/>
        <SayHello name="Air"/>
        <SayHello name="Sun"/>
        <SayHello name="Water"/>
        <SayHellos1If names={['A','B','C','']}/>
    </div>,
    document.getElementById('root')
);
