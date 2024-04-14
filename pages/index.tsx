import { type GetServerSideProps } from "next";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const isTwitter = ctx.req.headers["user-agent"]?.includes("Twitterbot");

  return {
    redirect: {
      permanent: true,
      destination: isTwitter
        ? "https://www.mcdonalds.com.br/pedidos"
        : "https://www.burgerking.com.br/cardapio",
    },
  };
};
