import styles from "./VideoList.module.css"
import videos from "../../json/videos.json"
import Card from "../Card"

function VideoList({ videos, emptyHeading }) {
  //Definição so título <h2>
  const count = videos.length
  let heading = emptyHeading
  if(count > 0) {
    // Se o count for maior que 1 escrevo 'vídeos' :senão escrevo 'vídeo'
    const noun = count > 1 ? 'vídeos' :'vídeo'
    heading = `${count} ${noun}`
  }
  
  
  return (
    <>
      <h2>{heading}</h2>
      <section className={styles.videos}>
        { videos.map((video) => <Card id={video.id} key={video.id} /> )}
      </section>
    </>
  )
}

export default VideoList