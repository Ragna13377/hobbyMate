import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import { LinkOutlined } from '@shared/ui/LinkOutlined';

const Header = () => {
	const links = ['About', 'News', 'Sign in'];
	return (
		<header className={style.header}>
			<div className={style.container}>
				<Link href='/' className={style.logo}>Hobby <span>Mate</span></Link>
				<nav>
					<ul className={style.linkList}>
						{links.map((l) => (
							<li key={l}>
								<LinkOutlined href={l}/>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

