export interface RecipeCrd {
  id: number,
  title: string,
  image: string,
  summary: string,
}

export interface RecipeCrdProv {
  uri: string,
  label: string,
  image: string,
  mealType: []
}

export interface RecipeRes {
  recipe: RecipeCrdProv
}

export interface RecipePages {
  hits: RecipeRes[],
  _links: {
    next: {
      href: string
    },
    self: {
      href: string
    }
  }
}
