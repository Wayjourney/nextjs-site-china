export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div className='card py-20 text-black text-2xl text-center'>{id}</div>;
}
