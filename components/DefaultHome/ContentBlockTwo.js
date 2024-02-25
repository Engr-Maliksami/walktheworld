import StepAccordion from "../Accordion/StepAccordion";

const data = [
	{
		id: 1,
		title: "Think About Planet Earth",
		body: "Walk the World' invites you to think beyond borders, exploring the rich cultural tapestry and untold stories",
	},
	{
		id: 2,
		title: "Search From Here",
		body: " Our intuitive interface puts the world at your fingertips, ensuring a seamless and enjoyable exploration experience",
	},
	{
		id: 3,
		title: "Contribute to a Greener Tomorrow",
		body: "Join the journey towards sustainability. 'Walk the World' empowers you to contribute to a greener tomorrow",
	},
];
export default function ContentBlockTwo() {
	return (
		<section className="content-block fix faq-wrapper section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-xl-5 mt-5 mt-lg-0 order-2 order-lg-1">
						<div className="block-contents">
							<div className="section-title wow fadeInUp" data-wow-duration="1s">
								<h2>Dive deep into the heart of our planet  with a newfound understanding</h2>
							</div>
						</div>
						<div className="step-accordion">
							<StepAccordion content={data} />
						</div>
					</div>
					<div className="col-lg-6 col-xl-6 offset-xl-1 pe-xl-3 col-12 order-1 order-lg-2">
						<div
							className="block-img ms-xl-5 wow fadeInRight"
							data-wow-duration="1.2s"
							data-wow-delay=".3s"
						>
							<img src="img/home1/faq-img.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
