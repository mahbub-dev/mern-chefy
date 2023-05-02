import logo from '../assets/attachment_65367806-removebg-preview.png'
import { Link } from 'react-router-dom'
import barIcon from '../assets/burger-checklist-list-menu-navigation-svgrepo-com.png'
import crossIcon from '..//assets/cross-svgrepo-com (1).png'
import { useContext, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-[--bg-color]">
            <div className="container max-w-[1240px] m-auto  flex justify-between items-center py-[.5rem]">
                <div className="logo"><img src={logo} alt="logo" /></div>
                {
                    user &&
                    <div className="user">
                        <img width={'40px'} height={'40px'} className='rounded-full' src={user?.photo_url} alt="user" />
                    </div>
                }
                <div className='md:hidden'>
                    {toggle ?
                        <button onClick={() => setToggle(!toggle)}><img width={'40px'} height={'40px'} src={crossIcon} alt="toggleClose" /></button>
                        :
                        <button onClick={() => setToggle(!toggle)} ><img src={barIcon} width={'40px'} height={'40px'} alt="toggleOpen" /></button>
                    }
                </div>

                <div className={`links md:flex ${toggle ? 'flex' : 'hidden'} top-14 right-0 bg-[--bg-color] px-[1rem] text-right absolute md:static  flex-col md:flex-row gap-[.5rem] font-[500] text-[--text-color]`} >
                    <Link className=''>Home</Link>
                    {
                        user ?
                            <button className=''>Logout</button>
                            : <><Link className=''>Login</Link>
                                <Link className=''>Resiter</Link></>
                    }

                    <Link className=''>About</Link>
                    <Link className=''>Contact Us</Link>
                </div>


            </div>
        </div>
    )
}

export default Navbar