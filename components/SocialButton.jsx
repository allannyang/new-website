import { useRouter } from 'next/router';
import styles from '../styles/button.module.css';

const SocialButton = ({children, path}) => {
    const router = useRouter();

    return (
        <button className={styles.socialButton} onClick={() => router.push(path)}>
            {children}
        </button>
    );
};

export default SocialButton; 