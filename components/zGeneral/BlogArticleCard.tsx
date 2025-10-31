import ButtonLinkAbq from "./buttonLinkAbq";

interface BlogArticleCardProps {
  title: string;
  subtitle?: string;
  image: string;
  href: string;
}

export default function BlogArticleCard({ title, image, subtitle, href }: BlogArticleCardProps) {
  return (
    <div>
      <div className="h-70 rounded-2xl overflow-hidden">
        <div className="h-full">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="py-4 px-6 space-y-2">
        <h4 className="text-20 font-500 text-primary">{title}</h4>
        <p className="text-16 text-primary-2 font-400">{subtitle}</p>
        <a
          href={href}
          className="mt-2 text-16 font-500 text-primary underline underline-offset-4 transition hover:text-primary-4"
        >Ler artigo</a>
      </div>
    </div>
  );
}