import { Link, useLocation } from 'react-router-dom'
import barIcon from '../assets/burger-checklist-list-menu-navigation-svgrepo-com.png'
import crossIcon from '..//assets/cross-svgrepo-com (1).png'
import { useContext,  useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import LoadingSpinner from './LoadingSpinner'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { user, isLoggedIn } = useContext(AuthContext)
    const location = useLocation().pathname.split('/')[1]

    return (
        <div className="bg-[--bg-color]">
            <div className="container flex justify-between items-center p-[.5rem]">
                <div className="text-[20px] font-[800]">Chefy</div>
                {/* conditional rendering.login or user profile picture  */}
                {
                    isLoggedIn ?
                        <div className="user" title={user?.displayName}>
                            {user ? <img width={'40px'} height={'40px'} className='rounded-full' src={user?.photoURL} alt="user" /> : <LoadingSpinner />}
                        </div> : <Link className={`font-[500] text-[--text-color] ${location === 'login' && 'text-blue-500'}`} to={'/login'}>Login</Link>
                }
                {/* nav icon toggling  */}
                <div className='md:hidden'>
                    {toggle ?
                        <button onClick={() => setToggle(!toggle)}><img width={'40px'} height={'40px'} src={crossIcon} alt="toggleClose" /></button>
                        :
                        <button onClick={() => setToggle(!toggle)} ><img src={barIcon} width={'40px'} height={'40px'} alt="toggleOpen" /></button>
                    }
                </div>

                {/* links  */}
                <div className={`links md:flex ${toggle ? 'flex' : 'hidden'} top-14 right-0 bg-[--bg-color] px-[1rem] text-right absolute md:static  flex-col md:flex-row gap-[.5rem] font-[500] text-[--text-color]`} >
                    <Link to={'/'} className={`${location == '' && 'text-blue-500'}`}>Home</Link>
                    <Link to={'/blogs'} className={`${location == 'blogs' && 'text-blue-500'}`}>Blog</Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar