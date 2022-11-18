import { useState } from "react";
import ConvertInput from './convertInput/ConvertInput';
import ConvertOutput from "./convertOutput/ConvertOutput";

import convertToRoman from '../helpers/convertToRoman';

import styles from '../styles/Home.module.scss'

export default function Home() {
  const [output, setOutput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setOutput(convertToRoman(e.target.value));

  return (
    <div className={styles.container}>
      <h1 className={styles.container__label}>Roman Numeral Converter</h1>
      <ConvertInput onChange={handleChange} />
      <ConvertOutput value={output} />
    </div>
  );
}
