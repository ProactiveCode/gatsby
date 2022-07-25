import * as React from 'react'

import loadable from '@loadable/component'

const VideosDesktop = loadable(() => import('../../components/videosDesktop/videosDesktop'));
const VideosMobile = loadable(() => import('../../components/videosMobile/videosMobile'));


const Layout = () => {

	return (
		<>
			{ typeof window !== 'undefined' 
				? window.innerWidth <= 768 ? <VideosMobile /> : <VideosDesktop/> 
				: null
			}
		</>
	)
}

export default Layout