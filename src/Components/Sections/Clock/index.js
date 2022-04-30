import { useState, useEffect } from 'react';
import styles from './Clock.module.scss';
import Section from '#Molecules/Section';


function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) % 30);
  const months = Math.floor(total/(1000*60*60*24*30) % 12);
  const years = Math.floor(total/(1000*60*60*24*30*12));

  return {
    total,
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}

export default function Clock(){
	const deathline = '2028-04-27';
	const [remaining, setRemaining] = useState(getTimeRemaining(deathline))
	
	useEffect(() => {
		const id = setInterval(() => {
			setRemaining(getTimeRemaining(deathline))		
		}, 1000)

		return () => clearInterval(id)
	})
	return(
		<Section className={styles.container}>
        	<div className={styles.clock}>
        		<span className={styles.years}>{remaining.years}Y</span>
        		<span className={styles.months}>{remaining.months}M</span>
        		<span className={styles.days}>{remaining.days}D</span>
        		<span className={styles.hours}>{remaining.hours}H</span>
        		<span className={styles.minutes}>{remaining.minutes}M</span>
        		<span className={styles.seconds}>{remaining.seconds}S</span>
    		</div>
       	</Section>
	)
}