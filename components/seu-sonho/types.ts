export type SeuSonhoPageInfo = {
	desktop_cover_image_url: string;
	mobile_cover_image_url: string;
	instructional_videos: VideoTopic[];
};

export type VideoTopic = {
	title: string;
	cover_image_url: string;
	video_url: string;
};