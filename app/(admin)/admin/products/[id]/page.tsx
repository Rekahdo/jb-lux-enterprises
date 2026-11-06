export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <p>Admin Product Page</p>
    </>
  );
}
