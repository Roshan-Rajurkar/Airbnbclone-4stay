import { Routes, Route } from 'react-router-dom'
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route index exact path='/' element={
        <Layout children={<b>Here should be home page</b>} />
      } />
      <Route index exact path='/*' element={
        <Layout children={<p className='p-4'>404 page not found</p>} />
      } />
    </Routes>
  );
}

export default App;
