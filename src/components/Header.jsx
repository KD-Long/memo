


import ThemeSwitcher from "./ThemeSwitcher"

// theme + navbar 
export default function Header(props) {

    // const [isMounted, setIsMounted] = useState(false)


    // // isMounted bool to prevent rendering of state before front end load
    // // this prevents server from updating the state as x then front end loading vals and setting as 7 (hydration warning)
    // useEffect(() => {
    //     setIsMounted(true)
    // }, [])

    return (<>


        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">

                    {/* On LARGE screen -> hidden */}
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><button onClick={() => props.setCurrentPage('memo')}>Memo</button></li>
                        <li><button onClick={() => props.setCurrentPage('dev')}>Dev</button></li>
                    </ul>
                </div>

                <button 
                    className="btn btn-ghost normal-case" 
                    onClick={() => props.setCurrentPage('memo')}
                >
                    <div className="flex flex-row items-end gap-1">
                        <span className="text-3xl font-bold">KDL</span>
                        <span className="text-sm text-primary">memo</span>
                    </div>
                </button>
            </div>

            {/* // on small screen hidden */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><button 
                        className={props.currentPage === 'memo' ? 'active' : ''}
                        onClick={() => props.setCurrentPage('memo')}
                    >Memo</button></li>
                    <li><button 
                        className={props.currentPage === 'dev' ? 'active' : ''}
                        onClick={() => props.setCurrentPage('dev')}
                    >Dev</button></li>
                </ul>
            </div>

            <div className="navbar-end space-x-6 ">
                <ThemeSwitcher />
            </div>
        </div >
    </>)

}