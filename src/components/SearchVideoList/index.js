import style from "./SearchVideoList.module.css"
import VideoList from "../../components/VideoList"
import Loader from "../Loader"
import { useEffect, useState } from "react"

// filtrando videos por categoria ou título
function filterVideos(videos, searchText) {
	return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

	const [ searchText, setSearchText ] = useState('Geografia')
	const foundVideos = filterVideos(videos, searchText)

	// State de Loader
	const [ loading, setLoading ] = useState(true)
	useEffect(() => {
		setTimeout(() => setLoading(false), 500)
	}, [])

	return (
		<section className={style.container}>
			<input 
				type="search"
				placeholder="Pesquisar..."
				value={searchText}
				onChange={event => setSearchText(event.target.value)}
			/>
			{ 
				loading ? <Loader /> : // Renderização condicional do Loader
				<VideoList 
					videos={foundVideos}
					emptyHeading={`Sem vídeos sobre ${searchText}`}
				/>
			}
		</section>
	)
}

export default SearchVideoList