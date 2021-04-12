import { Box } from 'reflexbox';
import styles from '../../styles/input.module.scss';

export default function Input({ placeholder, value, onChange, readOnly }) {
  return (
    <Box>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly
      />
    </Box>
  );
}
