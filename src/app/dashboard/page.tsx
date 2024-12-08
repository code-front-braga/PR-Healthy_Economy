export default function Home() {
	return (
		<div className="flex flex-col items-center gap-6 text-snow">
			<div className="flex flex-col gap-4">
				<p className="text-justify text-[1.8rem]">
					Olá, Leo! Que bom ter você aqui! Este app é seu aliado para fazer
					compras mais conscientes, economizar tempo e dinheiro no supermercado.
					Vamos começar a economizar juntos?
				</p>
				<div className="flex flex-col gap-2">
					<h3 className="text-[1.6rem]">Olha só as nossas funcionalidades:</h3>

					<ol className="flex list-outside list-image-[url(/check.svg)] flex-col gap-2 pl-[1.6rem] text-[1.4rem]">
						<li>
							Crie listas de compras personalizadas para cada ida ao
							supermercado.
						</li>
						<li>Acesse facilmente o histórico de todas as suas compras.</li>
						<li>
							Compare os valores das compras atuais com as anteriores para
							monitorar preços e economizar.
						</li>
						<li>
							Visualize o valor total de cada ida ao supermercado e o acumulado
							de todas as suas compras.
						</li>
						<li>
							Desfrute de um design intuitivo e amigável, pensado para tornar
							sua experiência simples e eficiente.
						</li>
					</ol>
				</div>
			</div>

			<div className="text-center">
				<span className="text-[1.8rem] text-greenSpring">Boas Compras!</span>
				<p className="text-[1.6rem]">
					Clique no ícone do carrinho para criar sua primeira lista!
				</p>
			</div>
		</div>
	);
}
