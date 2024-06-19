import { createContext, useContext, useState } from "react";

// Criando provedor do contexto favorito
// FavoritesContext é um array na linha 9, com a lista de favoritos
export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }) {
  const [ favorite, setFavorite ] = useState([])

  return (
    <FavoritesContext.Provider
      value={{ favorite, setFavorite }}
    >
      { children }
    </FavoritesContext.Provider>
  )
}

// Hook personalizado (adicionar e retirar elementos da lista de favoritos)
// funcão é chamada em components (Card)
export function useFavoriteContext() {
  const { favorite, setFavorite} = useContext(FavoritesContext)

  function addFavorite(newFavorite) {

    // Verificar se tem item favorito repetido
    const repeatFavorite = favorite.some((item) => item.id === newFavorite.id)

    // nova lista recebe lista anterior
    let newList = [...favorite]

    // verificar se não tem repetido e adicionar o item na lista de favorito
    if(!repeatFavorite) { // senão tiver item repetido
      newList.push(newFavorite) // adicione o favorito na nova lista
      return setFavorite(newList) // E retorna esta nova lista para o estado setFavorite
    }

    // Se for repetido ele vai ser tirado da lista
    newList = favorite.filter((fav) => fav.id !== newFavorite.id)
    return setFavorite(newList)
  }

  return {
    favorite,
    addFavorite
  }
}


   
      
      
    