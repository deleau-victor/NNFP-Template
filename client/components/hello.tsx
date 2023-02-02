'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/style/page.module.scss'
import { useAppSelector } from '@/hooks/typedReduxHooks'

const inter = Inter({ subsets: ['latin'] })

const Hello = () => {
	const { message } = useAppSelector((state) => state.hello)

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p className={styles.code}>{message}</p>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>app/page.tsx</code>
				</p>
				<div>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src='https://www.deleauvictor.fr/images/icons/Database/PostgreSQL.svg'
					alt='PostgreSQL Logo'
					width={128}
					height={128}
					priority
				/>
				<Image
					className={styles.logo}
					src='https://www.deleauvictor.fr/images/icons/Frameworks%20Back/express.svg'
					alt='Express Logo'
					width={128}
					height={128}
					priority
				/>
				<Image
					className={styles.logo}
					src='https://www.deleauvictor.fr/images/icons/Frameworks%20Front/nextjs.svg'
					alt='Next.js Logo'
					width={128}
					height={128}
					priority
				/>
				<Image
					className={styles.logo}
					src='https://www.deleauvictor.fr/images/icons/Frameworks%20Back/nestjs.svg'
					alt='NestJS Logo'
					width={128}
					height={128}
					priority
				/>
			</div>

			<div className={styles.grid}>
				<a
					href='https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Docs <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Find in-depth information about Next.js features and API.
					</p>
				</a>

				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Templates <span>-&gt;</span>
					</h2>
					<p className={inter.className}>Explore the Next.js 13 playground.</p>
				</a>

				<a
					href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Deploy <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div>
		</main>
	)
}

export default Hello
