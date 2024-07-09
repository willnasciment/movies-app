import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"
import styles from "./Search.module.css"
import videos from "../../json/videos.json"
import SearchVideoList from "../../components/SearchVideoList"
import ScrollTopButton from "../../components/ScrollToTopButton"

function Search() {
  return (
    <>
      <ScrollTopButton />
      <Header />
      <Container>
        <section className={styles.search}>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  )
}

export default Search
          