import React from "react";

import styles from '../../styles/Home.module.scss'

interface InputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const ConvertInput = ({ onChange }: InputProps): JSX.Element => {
    return (
        <input
            className={styles.container__input}
            onChange={onChange}
            maxLength={4}
        />
    );
}
  
export default ConvertInput;