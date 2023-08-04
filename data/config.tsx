import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter,  } from 'react-icons/fa'

import { FiCheck } from 'react-icons/fi'
import logoSyka from '../public/static/images/logo512.png'

const siteConfig = {
  logo: logoSyka.src,
  seo: {
    title: 'Saas UI',
    description: 'Votre assistant personnel tout le temps et n\'importe ou',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Fonctionnalites',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'whatsapp',
        href: 'https://wa.me/212627459408',
        variant: 'primary'
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © Syka 2023 Tous droits reserves
      </>
    ),
    links: [
      {
        href: 'mailto:contact@syka.tech',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/saas_js',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/saas-js/saas-ui',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
