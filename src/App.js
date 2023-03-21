import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './Routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {PublicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
