import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

interface Route {
    name: string;
    key: string;
    subcategories?: Array<{ name: string; key: string }>;
}

const getRouteName = (key: string, routes: Array<Route>): string | null => {
    for (const route of routes) {
        if (route.key === key) {
            return route.name;
        }

        if (route.subcategories) {
            const subcategory = route.subcategories.find((subcategory) => subcategory.key === key);
            if (subcategory) {
                return subcategory.name;
            }
        }
    }
    return null;
};

const getBreadcrumbs = (pathKeys: Array<string>, routes: Array<Route>) => {
    let url = '';
    const breadcrumbs = [];

    for (const pathKey of pathKeys) {
        url += `/${pathKey}`;
        const name = getRouteName(pathKey, routes);

        if (name) {
            breadcrumbs.push({ name, pathKey, url });
        }
    }

    return breadcrumbs;
};

const Breadcrumbs = (props: { routes: Array<Route> }) => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((slug) => !!slug);
    const isMainPage = !pathNames.length;
    const breadcrumbs = !isMainPage ? getBreadcrumbs(pathNames, props.routes) : [];

    return (
        <Breadcrumb separator={<ChevronRightIcon color='gray.800' />} spacing={2}>
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to='/'
                    isCurrentPage={isMainPage}
                    _hover={{ textDecoration: 'none' }}
                >
                    <Text fontSize='md' color={isMainPage ? 'black' : 'blackAlpha.700'}>
                        Главная
                    </Text>
                </BreadcrumbLink>
            </BreadcrumbItem>

            {breadcrumbs.map(({ name, pathKey, url }, index) => {
                const isLastRoute = index === breadcrumbs.length - 1;
                return (
                    <BreadcrumbItem key={pathKey} isCurrentPage={isLastRoute}>
                        <BreadcrumbLink as={Link} to={url} _hover={{ textDecoration: 'none' }}>
                            <Text fontSize='md' color={isLastRoute ? 'black' : 'blackAlpha.700'}>
                                {name}
                            </Text>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
