
import { Navigate, useLoaderData } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import LoadingSpinner from '../components/LoadingSpinner'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const Chef = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const { chef, recipe } = useLoaderData()
  if (!isLoggedIn) {
    return <Navigate to={'/login'} />
  }
  return (
    <div className='container'>
      {/* banner section  */}
      {
        Object.keys(chef).length ?
          <section className="  bg-[--bg-color] py-12 text-[--text-color]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full" src={chef?.picture} alt="Chef" />
                    <div className="ml-3">
                      <h2 className="text-2xl font-bold ">{chef?.name}</h2>
                      <p className="text-base font-medium ">Chef</p>
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <p className="text-lg">{chef?.bio}</p>
                  </div>
                  <div className="mt-3 flex items-center">

                    <p>Likes: {chef?.likes}</p>
                    <span className="mx-2 text-black-300">|</span>

                    <p>Recipes: {chef.num_of_recipes}</p>
                    <span className="mx-2 text-black-300">|</span>

                    <p>Years of Experience: {chef?.years_of_experience}</p>
                  </div>
                </div>
              </div>
            </div>
          </section> : <LoadingSpinner />
      }


      {/* recipe section  */}
      <section className="bg-[--bg-color] py-12 mt-20 rounded mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[--text-color]">Recipe</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {
              recipe.length ? recipe.map(i => <RecipeCard key={i.id} item={i} />) : <LoadingSpinner />
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Chef