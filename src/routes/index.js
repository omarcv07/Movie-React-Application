// Home page
import Home from '../container/pages/home/index'

// Movies for adults 
import adultAge from '../container/pages/+18/index'

// Premieres
import Premieres from '../container/pages/premieres/index'

// Movie Details 
import MovieDetails from '../components/movie-details/index'

// Movie searched
import SearchMovies from '../components/movie-search/index'

// Categories
import ActionCategory from '../container/pages/categories/action/index';
import FantasyCategory from '../container/pages/categories/fantasy/index';
import TerrorCategory from '../container/pages/categories/terror/index';
import AdventureCategory from '../container/pages/categories/adventure/index';

import AnimationCategory from '../container/pages/categories/animation/index';
import DramaCategory from '../container/pages/categories/drama/index';
import CrimeCategory from '../container/pages/categories/crime/index';
import RomanceCategory from '../container/pages/categories/romance/index';
import ThrillerCategory from '../container/pages/categories/thriller/index';
import ComedyCategory from '../container/pages/categories/comedy/index';
import ScifiCategory from '../container/pages/categories/scifi/index';
import WesternCategory from '../container/pages/categories/western/index';
import BiographyCategory from '../container/pages/categories/biography/index';
import MusicalCategory from '../container/pages/categories/musical/index';

export const routes = [
    {
        name: "Home",
        path: "/home",
        component: Home
    },
    {
        name: "Premiere",
        path: "/search/label/premieres",
        component: Premieres
    },
    {
        name: "+18",
        path: "/search/label/+18",
        component: adultAge
    },
    {
        path: "/search/label/movie/:movieId",
        component: MovieDetails
    },
    {
        path: "/search/label/movies/:movieName",
        component: SearchMovies
    },
    {
        name: "Action",
        path: "/search/label/category/action",
        component: ActionCategory
    },
    {
        name: "Fantasy",
        path: "/search/label/category/fantasy",
        component: FantasyCategory
    },
    {
        name: "Horror",
        path: "/search/label/category/horror",
        component: TerrorCategory
    },
    {
        name: "Adventure",
        path: "/search/label/category/adventure",
        component: AdventureCategory
    },
    {
        name: "Drama",
        path: "/search/label/category/drama",
        component: DramaCategory
    },
    {
        name: "Crime",
        path: "/search/label/category/crime",
        component: CrimeCategory
    },
    {
        name: "Romance",
        path: "/search/label/category/romance",
        component: RomanceCategory
    },
    {
        name: "Thriller",
        path: "/search/label/category/thriller",
        component: ThrillerCategory
    },
    {
        name: "Comedy",
        path: "/search/label/category/comedy",
        component: ComedyCategory
    },
    {
        name: "Animation",
        path: "/search/label/category/animation",
        component: AnimationCategory
    },
    {
        name: "Musical",
        path: "/search/label/category/musical",
        component: MusicalCategory
    },
    {
        name: "Sci-Fi",
        path: "/search/label/category/scifi",
        component: ScifiCategory
    },
    {
        name: "Biography",
        path: "/search/label/category/biography",
        component: BiographyCategory
    },
    {
        name: "Western",
        path: "/search/label/category/western",
        component: WesternCategory
    },
]
