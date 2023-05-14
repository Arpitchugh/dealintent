import HeroSection from '@/components/home/HeroSection';
import Info from '@/components/info/Info';

import styles from './page.module.scss';

export default function Home() {
	return (
		<main className={styles.main}>
			<HeroSection />
			<Info/>
		</main>
	);
}
