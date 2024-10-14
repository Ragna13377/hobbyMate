import React from 'react';

const Loader = () => (
	<div className='relative w-min text-center text-4xl before:inline-block before:content-["Loading"] before:animate-loader-floating after-content-[""] after:absolute after:w-full after:h-2.5 after:left-0 after:top-full after:rounded-full after:bg-black after:bg-opacity-15 after:blur-sm after:animate-loader-shadow' />
);

export default Loader;
