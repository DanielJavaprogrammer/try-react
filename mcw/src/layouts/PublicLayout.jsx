import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx'; 
import FooterContact from '../../components/FooterContact/FooterContact.jsx'; 

export default function PublicLayout() {
  return (
    <>
      <Header />
      
      <main> 
        <Outlet />
      </main>
      
      <FooterContact />
    </>
  );
}