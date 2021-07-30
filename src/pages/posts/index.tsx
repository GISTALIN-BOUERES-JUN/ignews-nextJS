import Head from 'next/head';
import React from 'react';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>

                <title> Posts | Ignews </title>

            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>
                            12 de março de 2021
                        </time>
                        <strong> Creating a monorepo with Lerna Workspaces </strong>
                        <p> Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>

                    </a>

                    <a>
                        <time>
                            12 de março de 2021
                        </time>
                        <strong> Creating a monorepo with Lerna Workspaces </strong>
                        <p> Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>

                    </a>

                    <a>
                        <time>
                            12 de março de 2021
                        </time>
                        <strong> Creating a monorepo with Lerna Workspaces </strong>
                        <p> Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>

                    </a>


                </div>

            </main>

        </>
    );
}