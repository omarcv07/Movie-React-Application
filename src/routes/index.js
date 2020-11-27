import React from 'react';

// Movies for adults 
import adultAge from '../container/pages/adultAge'

// Premieres
import Premieres from '../container/pages/premieres'

// Categories
import ActionCategory from '../container/pages/categories/action/index';
import FantasyCategory from '../container/pages/categories/fantasy/index';
import TerrorCategory from '../container/pages/categories/terror/index';

export const routes = [
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
        name: "Action",
        path: "/search/category/action",
        component: ActionCategory
    },
    {
        name: "Fantasy",
        path: "/search/category/fantasy",
        component: FantasyCategory
    },
    {
        name: "Terror",
        path: "/search/category/terror",
        component: TerrorCategory
    },
]
