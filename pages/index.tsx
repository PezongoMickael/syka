import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiBriefcase,
  FiFileText,
  FiGlobe,
  FiRepeat,
  FiClock,
  FiPrinter,
  FiEdit3,
  FiCamera,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Saas UI Landingspage"
        description="Free SaaS landingspage starter kit"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Chat n'importe ou,
                <Br /> Demande n'importe quoi
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Em>Syka</Em> est un assistant personnel AI conçu <Br />pour vous aider dans différentes tâches et répondre à vos questions.
                <Br/> <Em>Syka</Em> est capable de vous fournir des réponses rapides et précises, et peut également vous recommander de rechercher des informations plus récentes sur le web si nécessaire
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <Br/>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://wa.me/212627459408">
                  Whatsapp
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Nous soutenir
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
      <Features
        id="benefits"
        title={
          <Heading
            lineHeight="short"
            fontSize={["2xl", null, "4xl"]}
            textAlign="left"
            as="p"
          >Outils
          </Heading>
        }
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Simple",
            icon: FiEdit3,
            description: "Posez directement vos questions a l'intelligence artificielle.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "!Web <prompt>",
            icon: FiGlobe,
            description:
              "Ayez des informations en temps reel en utilisant la commande !web <prompt>.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "!dalle <prompt>",
            icon: FiCamera,
            description:
              "Generer des images automatiques grace en utilisant dalle open IA grace a la commande !dalle <prompt>.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "!sd <prompt>",
            icon: FiCamera,
            description:
              "Generer des images automatiques grace en utilisant Stable diffision grace a la commande !dalle <prompt>.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Pourquoi Syka ?">
        <Text color="muted" fontSize="lg">
          En utilisant Syka, vous avez la possibilite d'inter-agir directement avec l'intelligence
          artificielle sur whatsapp sans necessite un navigateur. Egalement l'application mobile de Syka
          vous permet generer des images, traiter des documents de differents formats 
        </Text>
        <br />
        <a href="/#features" style={{textDecoration:'underline'}}>En savoir plus</a>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="BATCHASSI Essossolam"
        description="Fondateur"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsTestimonialItem
        name="PEZONGO Mickael"
        description="Co-Fondateur"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsTestimonialItem
        name="BELKHADIR Oussama"
        description="Co-Fondateur"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Fournir des informations.",
          icon: FiGlobe,
          description:
            `Syka peux répondre à vos questions en vous donnant des informations sur divers sujets tels que l'histoire, la géographie, 
            la science, la culture, etc. Si vous souhaitez obtenir des informations à jour, je peux également vous aider à effectuer 
            une recherche sur le web.`,
          variant: "inline",
        },
        {
          title: "Traitement de documents.",
          icon: FiFileText,
          description:
            "Syka peut vous aider à traiter vos documents de differents formes puis repondre à vos questions portant sur le document.",
          variant: "inline",
        },
        {
          title: "Gestion des tâches.",
          icon: FiBriefcase,
          description:
          `Syka peux vous aider à gérer vos tâches quotidiennes en créant des rappels, en planifiant des événements ou en vous fournissant 
          des informations sur votre emploi du temps.`,
          variant: "inline",
        },
        {
          title: "Traduction.",
          icon: FiRepeat,
          description:
          `Syka peux vous aider à traduire des mots, des phrases ou même des documents dans différentes langues.
          `,
          variant: "inline",
        },
        {
          title: "Recherche d'images.",
          icon: FiSearch,
          description:
          `Syka peux générer des images en utilisant des modèles de dessin simples ou plus complexes. Si vous souhaitez obtenir une image, 
          utilisez les commandes "!sd <prompt>" pour des dessins simples ou "!dalle <prompt>" pour des images plus complexes`,
          variant: "inline",
        },
        {
          title: "Informations en temps réel.",
          icon: FiClock,
          description:
          `Syka peut vous fournir des informations en temps réel sur le monde et les avancés technologiques grâce à la commande !web <prompt>`,
          variant: "inline",
        },
        {
          title: "Sauvegarder vos recherches.",
          icon: FiPrinter,
          description:
          `Syka vous permet de garder une trace de vos recherches en les exportant sous format document dans plusieurs formats disponibles`,
          variant: "inline",
        },
        {
          title: "Parler a l'IA.",
          icon: FiPrinter,
          description:
          `Syka vous permet de poser directement vos questions en travers la voix. Plus besoin d'un long texte pour faire comprendre parler directement a l'IA`,
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: false,
      },
    },
  };
}
