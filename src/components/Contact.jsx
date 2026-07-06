import { contact, sectionMeta } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return <section id="contact" className="scroll-mt-28 px-5 py-10 sm:px-10 sm:py-12"><SectionHeading {...sectionMeta.contact}/><p className="mb-2 break-words">{contact.details}</p><p><a className="text-purpleDeep hover:underline" href={contact.githubUrl} target="_blank" rel="noopener">{contact.github}</a></p></section>
}
