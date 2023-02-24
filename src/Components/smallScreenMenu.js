
import { NavLink } from "react-router-dom";

const Smallmenu = ({showMenu, active}) => {

  const currentPage = "py-6 px-5 bg-white/10 flex gap-4 items-center";
  const otherPage = "py-6 px-5 flex gap-2 items-center";

  return ( 
    <div>
    <ul className={active? 'grid text-sm text-white bg-purple border-purple px-4 md:px-16' : 'hidden'}>
       {/* <li onClick={showMenu}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)"/></svg>
       </li> */}
       <li>
         <NavLink
           to={"/"}
           className={({ isActive }) => (isActive ? currentPage : otherPage)}
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             width="16"
           height="16"
           >
             <path fill="none" d="M0 0h24v24H0z" />
             <path
               d="M19 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H0l10.327-9.388a1 1 0 0 1 1.346 0L22 11h-3v9zm-8-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
               fill="rgba(255,255,255,1)"
             />
           </svg>
           Home
         </NavLink>
       </li>
       <li>
         <NavLink
           to={"/about"}
           className={({ isActive }) => (isActive ? currentPage : otherPage)}
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             width="16"
             height="16"
          >
             <path fill="none" d="M0 0h24v24H0z" />
             <path
               d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"
               fill="rgba(255,255,255,1)"
             />
           </svg>
           About us
         </NavLink>
       </li>
      <li>
         <NavLink
          to={"/products"}
           className={({ isActive }) => (isActive ? currentPage : otherPage)}
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             width="16"
            height="16"
           >
             <path fill="none" d="M0 0h24v24H0z" />
             <path
               d="M20 13v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16zM14.5 2a3.5 3.5 0 0 1 3.163 5.001L21 7a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1l3.337.001a3.5 3.5 0 0 1 5.664-3.95A3.48 3.48 0 0 1 14.5 2zm-5 2a1.5 1.5 0 0 0-.144 2.993L9.5 7H11V5.5a1.5 1.5 0 0 0-1.356-1.493L9.5 4zm5 0l-.144.007a1.5 1.5 0 0 0-1.35 1.349L13 5.5V7h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986L14.5 4z"
               fill="rgba(255,255,255,1)"
             />
           </svg>
          Products
         </NavLink>
       </li>
       <li>
         <NavLink
           to={"/connect"}
           className={({ isActive }) => (isActive ? currentPage : otherPage)}
         >
           <svg
            xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
           width="16"
             height="16"
           >
             <path fill="none" d="M0 0h24v24H0z" />
             <path
               d="M21 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0H21zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z"
               fill="rgba(255,255,255,1)"
             />
           </svg>
           Connect with us
         </NavLink>
       </li>
     </ul>
  </div>
   );
}
 
export default Smallmenu;