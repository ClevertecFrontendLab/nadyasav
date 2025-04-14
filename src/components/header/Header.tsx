import { Avatar, ChakraProps, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';

import avatar from '~/assets/avatar.jpg';
import logo from '~/assets/logo.svg';
import { ROUTES_BEADCRUMBS } from '~/constants';
import { categories } from '~/data/categories';
import { theme } from '~/theme';

import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs';

const headerStyles: ChakraProps = {
    minHeight: '80px',
    position: 'sticky',
    alignItems: 'center',
    top: 0,
    bg: 'lime.50',
    padding: theme.space[4],
    zIndex: 100,
    gap: 6,
};

const logoBoxStyles: ChakraProps = {
    minWidth: { md: `calc(256px - ${theme.space[4]})` },
    alignItems: 'center',
};

const contentBoxStyles: ChakraProps = {
    gap: '53px',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
};

const userInfoStyles: ChakraProps = {
    gap: 3,
    alignItems: 'center',
    mr: 10,
};

const Header = () => {
    const routes = [...categories, ...ROUTES_BEADCRUMBS];

    return (
        <Flex as='header' {...headerStyles}>
            <Flex {...logoBoxStyles}>
                <Image src={logo} alt='logo'></Image>
            </Flex>
            <Flex {...contentBoxStyles}>
                <Breadcrumbs routes={routes} />
                <Flex {...userInfoStyles}>
                    <Avatar name='Екатерина Константинопольская' src={avatar} />
                    <Container pr={6}>
                        <Heading as='h3' size='md'>
                            Екатерина Константинопольская
                        </Heading>
                        <Text size='sm' color='black/64%'>
                            @bake_and_pie
                        </Text>
                    </Container>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Header;
