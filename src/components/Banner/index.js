import styles from "./Banner.module.css"

function Banner({ image }) { /* image = props */
	return (
		<div 
			className={styles.banner}
			style={{backgroundImage: `url('/images/banner-${image}.png')`}} /* props passada para fazer a alteração de imagens no arquivo App.js */
			>
		</div>
			
	)
}

export default Banner