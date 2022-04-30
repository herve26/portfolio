import { useState, useEffect } from 'react';
import Head from 'next/head';
import Main from '#Organisms/Main';
import Header from '#Organisms/Header';
import ClockSection from '#Sections/Clock';

export default function Clock(){
	
    return (
        <div className="page">
            <Head>
                <title>Herve Portfolio</title>
                <meta name="description" content="Portfolio Web Site of Nzanzu Herve" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Main>
            	<ClockSection/>
            </Main>
      </div>
    )
}