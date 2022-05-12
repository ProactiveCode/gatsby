import * as React from 'react'
import * as Styles from './column.module.scss'
import c from 'classnames'
import Flipdown from '../../components/flipdownImage/flipdownImage'

const Layout = ({ val }) => {
	const LoadSection = ({ colBlock }) => {
		switch (colBlock.block) {
			case "FlipDown" :
				return <Flipdown section={colBlock} />;
		  default:
			return "foo";
		}
	};

	return (
		<div className={c(Styles.column, Styles[val.class])}>
			{
				(val.content) ?  <div dangerouslySetInnerHTML={{__html: val.content}}></div> : ((val.block) ?  <LoadSection colBlock={val} /> : '')
			}
		</div>
	)
}
export default Layout