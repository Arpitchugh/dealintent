'use client';

import styles from './Info.module.scss';
import { Typography, Image as Img, Tabs } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';

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
	const [activeTopMenuItem, setActiveTopMenuItem] = useState('1');
	const handleTopMenuClick = (key: string): any => {
		setActiveTopMenuItem(key);
	};
	const [activeSideMenuItem, setActiveSideMenuItem] = useState('1');
	const handleSideMenuClick = (key: string): any => {
		setActiveSideMenuItem(key);
	};
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
					<div
						key={item.key}
						className={styles.menuItem}
						onClick={() => {
							handleTopMenuClick(item.key);
						}}
					>
						<div
							className={`${
								activeTopMenuItem === item.key ? styles.selectedTopMenuItem : ''
							}`}
						>
							{item.label}
						</div>
					</div>
				))}
			</div>

			{/* SideBar */}
			<div className={styles.content}>
				<div className={styles.sidebarMenu}>
					{SideBar_items.map(item => (
						<div
							key={item.key}
							className={styles.menuItem}
							onClick={() => {
								handleSideMenuClick(item.key);
							}}
						>
							<div
								className={`${
									activeSideMenuItem === item.key
										? styles.selectedSideMenuItem
										: ''
								}`}
							>
								{item.label}
							</div>
						</div>
					))}
				</div>
				{/* <CompanyProfile /> */}
				<div className={styles['company-profile']}>
					<div className={styles.header}>
						<Typography.Title className={styles.title}>
							Company Profile
						</Typography.Title>
						<HiDotsVertical size={20} className={styles['three-dots']} />
						<div className={styles.options}>
							<Image
								src='/icons/download.png'
								alt='Download'
								width={16}
								height={20}
							/>
							|
							<Image src='/icons/hide.png' alt='Hide' width={20} height={20} />|
							<Image
								src='/icons/delete.png'
								alt='Delete'
								width={20}
								height={20}
							/>
						</div>
					</div>
					<div className={styles.background}>
						<Img
							src='/images/company-profile.png'
							alt='Company Profile'
							preview={false}
							className={styles.image}
						/>
						<div className={styles.wework}>
							<Img preview={false} src='/images/wework.png' alt='Wework' />
							<Typography.Text className={styles.subtitle}>
								For all the ways you work, we are here
							</Typography.Text>
						</div>
						<div className={styles.options}>
							<Img
								src='/images/other-options.png'
								alt='Other Options'
								preview={false}
							/>
						</div>
					</div>
					<div className={styles.footer}>
						<Img
							src='/images/comment-share.png'
							alt='Comment Share'
							preview={false}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Info;
