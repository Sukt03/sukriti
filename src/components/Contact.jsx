import { contact, sectionMeta, socialLinks } from '../data/content'
import SectionHeading from './SectionHeading'
import SocialIcon from './SocialIcon'

export default function Contact() {
  return <section id="contact" className="section-shell scroll-mt-28 py-10 sm:py-12"><SectionHeading {...sectionMeta.contact}/><p className="mb-5 break-words">{contact.details}</p><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener'} className="flex items-center gap-3 rounded-xl border border-hairline bg-card/50 p-4 text-sm text-purpleDeep transition-colors duration-200 hover:border-purple hover:bg-card"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-paper text-pinkDeep"><SocialIcon name={link.icon} className="h-5 w-5"/></span>{link.label}</a>)}</div></section>
}
