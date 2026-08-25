import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import CustomCursor from '../components/CustomCursor'
import TopButton from '../components/TopButton'
import MobileBottomCTA from '../components/MobileBottomCTA'
import ScrollToTop from '../components/ScrollToTop'

function Layout() {
  return (
    <>
      <Loading />
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <TopButton />
      <MobileBottomCTA />
    </>
  )
}

export default Layout
