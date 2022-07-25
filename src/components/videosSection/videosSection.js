import * as React from 'react'
import VideosDesktop from '../../components/videosDesktop/videosDesktop'
import VideosMobile from '../../components/videosMobile/videosMobile'


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