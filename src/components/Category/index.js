import videos from "../../json/videos.json"
import styles from "./Category.module.css"

export const categories = [
	"Geografia", /*0*/
	"Como fazer e usar", /*1*/
	"Astronomia e Geografia", /*2*/
	"Climatologia, Meteorologia, Vegetação", /*3*/
	"Geologia e Hidrografia" /*4*/
  ]
  
  export function filterCategory(id) {
	return videos.filter( video => video.category === categories[id])
}

function Category( {category, children} ) {
	return (
		<section className={styles.category}>
			<h2>{category}</h2>
      <div>
        {children}
      </div>
		</section>
	)
}

export default Category