'use client';

import { Button, Typography, Image } from 'antd';
import styles from './HeroSection.module.scss';

function HeroSection() {
	const message = () => {
		alert('This feature is not available yet!');
	};
	return (
		<section className={styles.hero}>
			<div className={styles.header}>
				<Typography.Title className={styles.title}>
					WeWork + Salesforce
				</Typography.Title>
				<Button className={styles.btn} size='large' onClick={message}>
					Publish/Share
				</Button>
			</div>
			<div className={styles.background}>
				<Image
					src='/background.png'
					alt='Background'
					preview={false}
					className={styles.image}
				/>
				<div className={styles.wrapper}>
					<Typography.Title className={styles.proposal}>
						Workspace <br />
						Proposal
					</Typography.Title>
				</div>
				<div className={styles.weSales}>
					<Image
						src='./we-work.png'
						alt='WeWork'
						className={styles.image}
						preview={false}
					/>
					<span>+</span>
					<Image
						src='./salesforce.png'
						alt='Salesforce'
						className={styles.image}
						preview={false}
					/>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
