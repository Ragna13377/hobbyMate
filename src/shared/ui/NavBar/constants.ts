import dynamic from 'next/dynamic';

export const svgs = {
	linkHover1: dynamic(() => import('./assets/images/linkHover_1.svg'), { ssr: false }),
	linkHover2: dynamic(() => import('./assets/images/linkHover_2.svg'), { ssr: false }),
	linkHover3: dynamic(() => import('./assets/images/linkHover_3.svg'), { ssr: false }),
	linkHover4: dynamic(() => import('./assets/images/linkHover_4.svg'), { ssr: false }),
	linkHover5: dynamic(() => import('./assets/images/linkHover_5.svg'), { ssr: false }),
};
export const svgArray = Object.values(svgs);
export const svgViewBox = '0 0 164 104';
