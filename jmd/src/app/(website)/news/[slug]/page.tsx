interface NewsProps {
  params: { slug: string };
}

export default function Page({ params }: NewsProps) {
  return <div>{params.slug}</div>;
}
