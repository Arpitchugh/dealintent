'use client';

import { Tabs, TabsProps, Typography } from 'antd';
import styles from './Info.module.scss';

const topMenu = [
	{
		key: '1',
		label: `Basic Info`,
	},
	{
		key: '2',
		label: `Files`,
	},
	{
		key: '3',
		label: `Mutual Action Plan`,
	},
	{
		key: '4',
		label: `Contact`,
	},
	{
		key: '5',
		label: `Internal Actions`,
	},
];




const SideBar_items = [
	{
		key: '1',
		label: `Overview`,
	},
	{
		key: '2',
		label: `Welcome`,
	},
	{
		key: '3',
		label: `Product Capabilities`,
	},
	{
		key: '4',
		label: `Customer Success Stories`,
	},
	{
		key: '5',
		label: `File Sharing`,
	},
	{
		key: '6',
		label: `Our Deck`,
	},
];

const Info: React.FC = () => {
	return (
		<section className={styles['project-scope-recap']}>
			<div className={styles.header}>
				<Typography.Title className={styles.title}>
					Project Scope Recap
				</Typography.Title>
				<div className={styles['mutual-action-plan']}>
					<div className={styles.info}>
						<Typography.Text className={styles.heading}>
							Mutual Action Plan
						</Typography.Text>
						<Typography.Text className={styles.percent}>3%</Typography.Text>
					</div>
					<div className={styles.progress}>
						{Array.from({ length: 17 }).map((_, i) => (
							<div key={i} className={styles.item} />
						))}
					</div>
				</div>
			</div>
            {/*  topMenu */}
			<div className={styles.topMenu}>
				{topMenu.map(item => (
					<div key={item.key} className={styles.menuItem}>
						{item.label}
					</div>
				))}
			</div>
			{/* SideBar */}
			<div className={styles.content}>
				<div className={styles.sidebarMenu}>
					{SideBar_items.map(item => (
						<div key={item.key} className={styles.menuItem}>
							{item.label}
						</div>
					))}
				</div>
				{/* <CompanyProfile /> */}
			</div>
		</section>
	);
};

export default Info;
