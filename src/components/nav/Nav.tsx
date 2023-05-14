'use client';

import { Avatar, Typography, Image } from 'antd';
import { BsQuestionCircle, BsSearch } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';

import styles from './Nav.module.scss';
import { useCallback, useState } from 'react';

const Nav: React.FC = () => {
	const [showDrawer, setShowDrawer] = useState(false);

	const { Text } = Typography;

	const openDrawer = useCallback(() => {
		setShowDrawer(true);
	}, []);

	const closeDrawer = useCallback(() => {
		setShowDrawer(false);
	}, []);

	const welcomeMessage = () => {
		alert('Hii, no functionality on icons');
	};
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				{/* <div className={styles.flex}> */}
				<Image
					src='/logo.svg'
					alt='Dealintent Logo'
					width={38}
					height={38}
					preview={false}
					onClick={welcomeMessage}
				/>
				{/* <Image
						src='icons/arrow.svg'
						alt='arrow'
						width={15}
						height={15}
						preview={false}
						onClick={openDrawer}
					/> */}
				{/* </div> */}
			</div>
			<div className={styles.options} onClick={welcomeMessage}>
				<BsSearch size={24} />
				<Image
					src='/mail.png'
					alt='Mail Inbox'
					width={24}
					height={24}
					preview={false}
				/>
				<IoNotificationsOutline size={24} />
				<BsQuestionCircle size={24} />
				<Avatar src='/avatar.png' alt='User Profile Picture' size={45} />
			</div>
			<div className={styles.menu}>
				<AiOutlineMenu size={24} onClick={openDrawer} />
				{showDrawer ? (
					<div className={styles.drawer}>
						<AiOutlineClose
							size={20}
							className={styles.close}
							onClick={closeDrawer}
						/>
						<div className={styles.user}>
							<Avatar src='/avatar.png' alt='User Profile Picture' size={45} />
							<div className={styles.userinfo}>
								<Text className={styles.name}>Jane Smith</Text>
								<Text className={styles.profession}>Sales Executive</Text>
							</div>
						</div>
						<div className={styles.option}>
							<BsSearch size={24} />
							<Text>Search</Text>
						</div>
						<div className={styles.option}>
							<Image src='/mail.png' alt='Mail Inbox' width={24} height={24} />
							<Text>Inbox</Text>
						</div>
						<div className={styles.option}>
							<IoNotificationsOutline size={24} />
							<Text>Notifications</Text>
						</div>
						<div className={styles.option}>
							<BsQuestionCircle size={24} />
							<Text>Help</Text>
						</div>
					</div>
				) : null}
			</div>
		</nav>
	);
};

export default Nav;
