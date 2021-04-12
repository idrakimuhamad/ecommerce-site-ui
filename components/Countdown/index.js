import React from 'react';
import { Flex } from 'reflexbox';
import styles from '../../styles/countdown.module.scss';

function CountdownNumber({ children }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mx={1}
      className={styles.countdown__number}>
      {children}
    </Flex>
  );
}

export default function Countdown() {
  return (
    <Flex flexDirection="row" alignItems="center">
      <CountdownNumber>12</CountdownNumber>
      <CountdownNumber>00</CountdownNumber>
      <CountdownNumber>00</CountdownNumber>
    </Flex>
  );
}
