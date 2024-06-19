import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import styles from "./Watch.module.css"
import { useParams } from "react-router-dom"
import videos from "../../json/videos.json"
import PageNotFound from "../PageNotFound"

function Watch() {
  const params = useParams()
  // find procura se o id do video esta na listagem para que possa carregar o video de acordo com o id
  const video = videos.find((video) => { return video.id === params.id })
  // caso não encontre um id comhecido retorne o componente PageNotFound
  if(!video) { return <PageNotFound />}
  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <iframe 
            width="854" height="500" 
            src={`https://www.youtube.com/embed/${video.id}`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </section>
      </Container>
      <Footer />
    </>
  )
}

export default Watch
            