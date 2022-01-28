import { Login } from '../../components';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';

type FirebaseConfigType = {
    FIREBASE_API_KEY: String | any,
    FIREBASE_AUTH_DOMAIN: String | any,
    PROJECT_ID: String | any,
    STORAGE_BUCKET: String | any,
    MESSAGING_SENDER_ID: String | any,
    APP_ID: String | any,
}
const LoginPage = (props: { firebaseConfig: FirebaseConfigType }) => {
    const router = useRouter();

    const loginCallBack = () => {
        router.push('/home');
    }
    return (
        <div className="bg-black h-screen w-screen">
            <Login callBackAfterLogin={loginCallBack} {...props} />
            {/* <footer className={styles.footer}>
                <span>Expenser</span>
            </footer> */}
        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            firebaseConfig: {
                FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
                FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
                PROJECT_ID: process.env.PROJECT_ID,
                STORAGE_BUCKET: process.env.STORAGE_BUCKET,
                MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
                APP_ID: process.env.APP_ID,
            }
        }, // will be passed to the page component as props
    }
}

export default LoginPage