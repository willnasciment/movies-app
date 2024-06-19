import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import iconFavorite from "./favorite.png" /* Branco*/
import iconUnFavorite from "./unfavorite.png" /* Vermelho */
import { useFavoriteContext } from "../../contexts/Favorites"

function Card( {id} ) {
  
  const { favorite, addFavorite } = useFavoriteContext()
  const isFavorite = favorite.some((fav) => fav.id === id)
  // Se ele consta na lista dos favoritos mostro o icone vermelho() senão mostra o branco
  const icone = isFavorite ? iconUnFavorite : iconFavorite
  
  return (
		<section className={styles.card}>
			<Link to={`/watch/${id}`} >
				<img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
        alt="Capa" className={styles.capa} />
			</Link>
      <figure className={styles.icon}>
        <img 
          src={icone} 
          alt="Ícone" 
          onClick={() => addFavorite({id})}
        />
      </figure>
		</section>
  )
}

export default Card
					