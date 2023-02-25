import styles from './styles.module.scss';

interface ConfettiImageProps {
  show: boolean;
}

function ConfettiImage({ show }: ConfettiImageProps) {
  return show ? <div className={styles.confetti} /> : null;
}

export { ConfettiImage };
