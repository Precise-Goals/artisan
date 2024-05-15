// Meta.tsx
import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Meta: React.FC<MetaProps> = ({ title, description, imageUrl }) => {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com" />
      <link rel="icon" href="/favicon.ico" />
      {/* Metadata for Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Theme color and application window color */}
      <meta name="theme-color" content="#eaea07" />
      <meta name="msapplication-TileColor" content="#eaea07" />
    </Head>
  );
};

export default Meta;
