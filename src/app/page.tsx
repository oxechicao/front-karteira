import { A, H1 } from "@/components/ui";

export default function Home() {
  return (
    <>
      <header className="p-5">
        <H1>Projeto Jangada</H1>
      </header>
      <main className="bg-zinc-950 p-16 flex min-h-screen  align-middle justify-center">
        <div>
          <p>
            Projeto Jangada consiste em uma aplição para gerencia de despesas e
            planejamentos futuros
          </p>
          <p>
            É um projeto de código aberto feito com objetivos de estudos e
            prática.
          </p>
          <A href="https://github.com/oxechicao/front-jangada">
            Projeto no Github
          </A>
        </div>
      </main>
    </>
  );
}
