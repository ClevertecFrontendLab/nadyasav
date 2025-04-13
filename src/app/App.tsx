import { Route, Routes } from 'react-router';

import AppLayout from '~/layouts/appLayout/AppLayout';
import MainLayout from '~/layouts/mainLayout/MainLayout';
import CollectionPage from '~/pages/collectionPage/CollectionPage';
import MainPage from '~/pages/mainPage/MainPage';
import RecipeCategoryPage from '~/pages/recipeCategoryPage/RecipeCategoryPage';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path='/:category' element={<RecipeCategoryPage />} />
                    <Route path='/:category/:subcategory/*' element={<RecipeCategoryPage />} />
                    <Route path='/collection' element={<CollectionPage />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
