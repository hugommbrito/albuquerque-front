import { BlogArticleInfo } from "../blog/types"
import { VentureCategoryInfo } from "../nossas-obras/types"

export type HomePageInfo = {
  home_page_ventures: VentureCategoryInfo['ventures'],
  home_page_articles: BlogArticleInfo['suggested_articles'],
  desktop_cover_image_url: string,
  mobile_cover_image_url: string
}