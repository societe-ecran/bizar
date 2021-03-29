import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { stack as Menu } from "react-burger-menu"
import styled from "@emotion/styled";

export default function Navbar(props) {

  const [menuState, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };


  const router = useRouter()

  let stick=''
  let bgColor = '#f6f036' 
//   if(router.pathname === '/bizarrebazar'){
//     bgColor='#f6f036' 
//     stick='md:static'
//   }else{bgColor='white'
//   stick='sticky'
// }

  const style = {
    backgroundColor:bgColor,
    position:stick
  }



  const TopNav = styled.div`
  //   display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  //   overflow: hidden;
  //   position: fixed;
  //   top: 0;
  //   right: 0;
  //   left: 0;
  //   z-index: 1101;
  //   top: 0;
  //   width: 100vw;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  //   flex-wrap: nowrap;
  //   justify-content: flex-end;
  //   margin-top: 1em;
  //   a {
  //     color: #888;
  //     text-align: center;
  //     padding: 1em;
  //     text-decoration: none;
  //     font-size: 1em;
  //     &:hover {
  //       color: #333;
  //     }
  //   }
  //   @media (max-width: 721px) {
  //     display: none;
  //   }
  //
`;
const SideMenu = styled.div`
  /* Individual item */
  .bm-item {
    display: inline-block;
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }
  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 25px;
    height: 20px;
    right: 15px;
    top: 16px;
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 30px;
    width: 30px;
  }
  /* Color/shape of close button cross */
  .bm-cross {
    background: #000000;
  }
  /* General sidebar styles */
  .bm-menu {
    background: #f6f036;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 720px) {
    display: none;
  }
`;




  return (
<>
    <div className={"top-0 flex justify-between py-2  md:mx-6 md:pb-6 LibreBaskerville text-lg border-b border-black sticky z-40 textDecorationNone " + stick} style={style} >
      <Link href="https://amicale.online/">
        <a className='textDecorationNone hidden md:inline-flex ' >L'Amicale du Futur, 31 rue Sébastien Gryphe Lyon 7e</a>
      </Link>
      <Link href="https://amicale.online/">
        <a className='textDecorationNone  md:hidden ml-6 ' >L'Amicale du Futur, Lyon 7e</a>
      </Link>
      <div className="flex justify-around hidden md:inline-flex">
        <div className="mr-6">
          <a
            href="https://www.helloasso.com/associations/l-amicale-du-futur/collectes/appel-a-dons"
            target="_blank"
            className='textDecorationNone ' 
          >
            Appel à dons
          </a>
        </div>
        <div className="mr-6 arkm hidden md:inline-flex">
          <Link href="/bizarrebazar">
            <a className='textDecorationNone'  >Bizarre Bazar</a>
          </Link>
        </div>

        {/* <div className="mr-3 hidden md:inline-flex ">
          <Link href="/cantines">
            <a className='textDecorationNone '>Horaires/Contact</a>
          </Link>
        </div> */}
        
      </div>
    </div>



{/* /////////////////////////
smartphone
////////////////////////// */}

    <TopNav className="">
        <NavItems>
        </NavItems>

        <SideMenu>
          <Menu isOpen={menuState.menuOpen} className="borderSlide">
          <a href="https://amicale.online/"
          target="_blank">
        <a className='textDecorationNone' >L'Amicale</a>
      </a>
        <div className="mr-6 mt-3">
          <a
            href="https://www.helloasso.com/associations/l-amicale-du-futur/collectes/appel-a-dons"
            target="_blank"
            className='textDecorationNone' 
          >
            Appel à dons
          </a>
        </div>
        <div className="mr-6 mt-4 arkm">
          <Link href="/bizarrebazar">
            <a className='textDecorationNone'>Bizarre Bazar</a>
          </Link>
        </div>
        <div>
           <button className=" snipcart-checkout  text-xl no-underline hover:underline text-black">
                Panier
              </button>
        </div>
       

        {/* <div className="mr-3">
          <Link href="/cantines">
            <a className='textDecorationNone'>Horaires/Contact</a>
          </Link>
        </div> */}
          </Menu>
        </SideMenu>
      </TopNav>




    
  </>  );

}
