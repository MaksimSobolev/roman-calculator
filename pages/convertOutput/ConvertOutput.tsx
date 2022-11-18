import React from "react";

import styles from '../../styles/Home.module.scss'

interface OutputProps {
  value: string;
}

const ConvertOutput = ({ value }: OutputProps): JSX.Element => {
    return (
      <div className={styles.container__output}>
        <h2>{value}</h2>
      </div>
    );
  }
  
  export default ConvertOutput;