"use client";

import { useState } from "react";
import ButtonLinkAbq from "../zGeneral/buttonLinkAbq";
import { VideoTopic } from "./types";


function getYoutubeEmbedUrl(url: string): string {
	const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/);
	const videoId = match?.[1];
	return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
}

export default function SeuSonhoVideoTopics({videoTopics, ebookUrl}: {videoTopics: VideoTopic[], ebookUrl: string}) {
	const [activeUrl, setActiveUrl] = useState<string | null>(null);

	return (
		<section className="py-20 px-4 md:px-15">
			<div className="space-y-3 md:w-1/2 mb-16">
				<h2 className="text-32 md:text-48 leading-10">
					Sua virada se chave acaba de começar
				</h2>
				<p className="text-20 md:text-16 ">
					Escolha o tema, dê o play e tire todas as suas dúvidas.
				</p>
			</div>
			<div className="overflow-x-auto [scrollbar-color: bg-primary]" >
				<div className="flex gap-6 min-w-full">
					{videoTopics.map((topic) => (
						<div
							key={topic.title}
							className="w-[160px] md:w-[290px] h-[290px] md:h-[520px] flex-shrink-0 space-y-3"
						>
							<div className="relative h-4/5 overflow-hidden rounded-3xl">
								<img
									src={topic.cover_image_url}
									alt={topic.title}
									className="h-full w-full object-cover"
								/>
								<button
									type="button"
									onClick={() => setActiveUrl(topic.video_url)}
									className="absolute inset-0 m-auto h-12 w-12 rounded-full text-white/50 hover:text-white/90 hover:scale-125 text-48 flex items-center justify-center shadow"
								>
									▶
								</button>
							</div>
							<p className="text-14 text-primary text-center">{topic.title}</p>
						</div>
					))}
				</div>
			</div>
			<div className="rounded-2xl bg-primary px-6 py-4 mt-2 md:flex items-center justify-between space-y-20">
        <p className="text-white font-500 md:my-auto">
				Prefere ler? Baixe nosso ebook "Como financiar meu sonho" grátis.
        </p>
				<ButtonLinkAbq
          href={ebookUrl}
					target="_blank"
          text="Baixar"
          backgroundColor="bg-primary-invert"
          icon={<img src='/icons/downloadIcon.svg' alt="Ícone de download" />}
        />
			</div>

			{activeUrl && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
					onClick={() => setActiveUrl(null)}
				>
					<div
						className="relative w-full max-w-3xl mx-4 aspect-video"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setActiveUrl(null)}
							className="absolute -top-8 right-0 text-white text-2xl leading-none"
						>
							✕
						</button>
						<iframe
							src={getYoutubeEmbedUrl(activeUrl)}
							className="w-full h-full rounded-2xl"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
			)}
		</section>
	);
}
