import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

const Main = () => <h1 className={styles.main}>Hi JSX！</h1>;
// const Main = () => <div className={`${styles.main} ${styles.other_class}`}/>;

ReactDom.render(<Main />, document.getElementById('root'));