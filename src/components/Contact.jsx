import { contact, sectionMeta, socialLinks } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return <section id="contact" className="scroll-mt-28 px-5 py-10 sm:px-10 sm:py-12"><SectionHeading {...sectionMeta.contact}/><p className="mb-5 break-words">{contact.details}</p><div className="flex flex-wrap gap-3">{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener'} className="rounded-md border border-hairline px-4 py-2 text-sm text-purpleDeep transition-colors duration-200 hover:border-purple hover:bg-card">{link.label}</a>)}</div></section>
}
