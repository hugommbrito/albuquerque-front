import { BlogArticleInfo } from "../blog/types"
import { VentureStatusInfo } from "../nossas-obras/types"
import { VideoTopic } from "../seu-sonho/types"

export type HomePageInfo = {
  home_page_ventures: VentureStatusInfo['ventures'],
  home_page_articles: BlogArticleInfo['suggested_articles'],
  desktop_cover_image_url: string,
  mobile_cover_image_url: string,
  instructional_videos: VideoTopic[],
  ebook_url: string,
}