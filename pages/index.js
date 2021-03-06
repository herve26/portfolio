import Head from 'next/head';
import Main from '#Organisms/Main';
import Header from '#Organisms/Header';

import Hero from '#Sections/Hero';
import About from '#Sections/About';
import Skills from '#Sections/Skills';

export default function Home(){
    return (
        <div className="page">
            <Head>
                <title>Herve Portfolio</title>
                <meta name="description" content="Portfolio Web Site of Nzanzu Herve" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Main>
                <Hero/>
                <About/>
                <Skills/>
            </Main>
      </div>
    )
}