import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const redirectTimer = setTimeout(() => router.push('/account/login'), 3000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Login Application in Next.js</title>
        <meta
          name='description'
          content='A simple login application in Next.js using next-auth, with email and password fields.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to a Login Application with{' '}
          <a href='https://nextjs.org'>Next.js!</a> Powered by{' '}
          <a href='https://next-auth.js.org/'>NextAuth.js!</a>
        </h1>

        <p className={styles.description}>
          Get started{' '}
          <Link href='/account/login'>
            <a>
              <code className={styles.code}>Login page</code>
            </a>
          </Link>
          <br />
          <br />
          Or <br /> will be redirected automatically after 3 seconds.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://www.sayyedabrarakhtar.com.np'
          target='_blank'
          rel='noopener noreferrer'
        >
          <b>Sayyed Abrar Akhtar</b>
        </a>
      </footer>
    </div>
  );
}
