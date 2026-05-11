import About from "./components/About";
import CtaStrip from "./components/CtaStrip";
import DonationPanel from "./components/DonationPanel";
import DonationUse from "./components/DonationUse";
import FeeTable from "./components/FeeTable";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Needs from "./components/Needs";
import Programs from "./components/Programs";
import QuickActions from "./components/QuickActions";
import Stats from "./components/Stats";
import WaysToGive from "./components/WaysToGive";
import { siteContent } from "./content/siteContent";

const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Programs", href: "#programs" },
	{ label: "Gallery", href: "#gallery" },
	{ label: "Sponsorship", href: "#sponsorship" },
	{ label: "Donate", href: "#donate" },
];

function App() {
	return (
		<div className='bg-white text-slate-900'>
			<Header navLinks={navLinks} orgName={siteContent.orgName} />
			<main>
				<Hero content={siteContent.hero} location={siteContent.location} />
				<Stats stats={siteContent.stats} />
				<CtaStrip
					title='Help a student stay in school'
					text='Your donation directly supports educational continuity for children in need.'
					primaryLabel='Donate Now'
					primaryHref='#donate'
					secondaryLabel='Sponsor a Child'
					secondaryHref='#sponsorship'
				/>
				<About paragraphs={siteContent.about} challenges={siteContent.challenges} />
				<Programs sponsorshipOptions={siteContent.sponsorshipOptions} />
				{/* <GallerySection driveGalleryUrl={siteContent.links.driveGallery} images={siteContent.galleryImages} /> */}
				<WaysToGive giving={siteContent.giving} />
				<DonationUse donationUse={siteContent.donationUse} />
				<CtaStrip
					title='Contribute with Sadqah or Zakat'
					text='Both are accepted and used to support students, teachers, and school needs.'
					primaryLabel='Send Donation'
					primaryHref='#donate'
					secondaryLabel='View Fee Plans'
					secondaryHref='#sponsorship'
				/>
				<DonationPanel donation={siteContent.donation} />
				<FeeTable feeTable={siteContent.feeTable} />
				<Needs supportNeeds={siteContent.supportNeeds} />
				<QuickActions
					whatsappLink={siteContent.links.whatsapp}
					phones={siteContent.donation.contacts}
					socialLinks={siteContent.donation.socialLinks}
				/>
			</main>
			<Footer orgName={siteContent.orgName} location={siteContent.location} />
		</div>
	);
}

export default App;
