import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiBinance, SiChainlink, SiDogecoin, SiLitecoin } from "react-icons/si";
export default function PopularCryptoCurrencies() {
	return (
		<section className="crypto-currencies-wrapper fix section-black section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents text-white">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2> Latest Advancements & Discoveries</h2>
						</div>
					</div>
				</div>
				<div className="nice-arrow-icon d-none d-lg-block wow fadeInDown" data-wow-duration="1.2s">
					<img src="img/icons/nice-arrow-down.svg" alt="" />
				</div>

				<div className="row">
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".2s"
						>
							<div className="currency-header">
								<div className="icon icon1">
									<FaBitcoin className="icon-bitcoin" />
								</div>
								<div className="currency-name">
									<h6>Global Conversations Begin</h6>
									<span>Technology Advancement</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Walk the World' Launches Challenges Hub, Sparking Collaborative Exploration and Insights
								</p>
							</div>
						
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".4s"
						>
							<div className="currency-header">
								<div className="icon icon2">
									<FaEthereum className="icon-eth" />
								</div>
								<div className="currency-name">
									<h6>Breaking Grounds</h6>
									<span>Programming Launguage</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Walk the World' Integrates Next-Gen JavaScript for Unparalleled User Experiences	.
								</p>
							</div>
							
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".6s"
						>
							<div className="currency-header">
								<div className="icon icon3">
									<SiChainlink className="" />
								</div>
								<div className="currency-name">
									<h6>Revolutionizing Learning</h6>
									<span>Educational Advancement</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								'Walk the World' Unveils Interactive Educational Journeys, Transforming Exploration into a Scholarly Adventure
								</p>
							</div>
							
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".1s"
						>
							<div className="currency-header">
								<div className="icon icon4">
									<SiLitecoin />
								</div>
								<div className="currency-name">
									<h6>Beyond Borders</h6>
									<span>WorldWide</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
								Walk the World' Launches Multilingual Interface, Breaking Language Barriers and Uniting Explorers Globally
								</p>
							</div>
						
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".3s"
						>
							<div className="currency-header">
								<div className="icon icon5">
									<SiBinance />
								</div>
								<div className="currency-name">
									<h6>Binance Coin (BNB)</h6>
									<span>Cryptocurrency</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
									As per our short-term BNB price prediction, the Binance coin can reach $1000 by the
									end of the next year.
								</p>
							</div>
							
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".6s"
						>
							<div className="currency-header">
								<div className="icon icon6">
									<SiDogecoin />
								</div>
								<div className="currency-name">
									<h6>Tether (USDT)</h6>
									<span>Cryptocurrency</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
									Create an account on the exchange, buy the Tether (USDT) crypto asset, and transfer
									it to your crypto wallet.
								</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
