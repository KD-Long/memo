// TLDR
// CSS drop down selector with radio buttons
// --> onClick parses them name
// --> onclick handler sets current state to new them name (updating local storage --> persistance)
// --> deafult light on mount


import { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
    const [currentTheme, setCurrentTheme] = useState('dark')

    useEffect(() => {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'dark'
        setCurrentTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    const handleThemeChange = (theme) => {
        setCurrentTheme(theme)
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }

    return (
        <div title="Change Theme" className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-1.5 px-1.5">
                <div className="bg-base-100 group-hover:border-base-content/20 border-base-content/10 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1 transition-colors">
                    <div className="bg-base-content size-1 rounded-full"></div>
                    <div className="bg-primary size-1 rounded-full"></div>
                    <div className="bg-secondary size-1 rounded-full"></div>
                    <div className="bg-accent size-1 rounded-full"></div>
                </div>
                <svg width="12px" height="12px" className="mt-px hidden size-2 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <div tabIndex={0} className="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto border border-white/5 shadow-2xl outline-1 outline-black/5 mt-16">
                <ul className="menu w-56">
                    <li className="menu-title text-xs">Theme</li>

                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('light')}
                    >
                        <div data-theme="light" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">light</div>
                        {currentTheme === 'light' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>

                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('dark')}
                    >
                        <div data-theme="dark" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">dark</div>
                        {currentTheme === 'dark' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('cupcake')}
                    >
                        <div data-theme="cupcake" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">cupcake</div>
                        {currentTheme === 'cupcake' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('bumblebee')}
                    >
                        <div data-theme="bumblebee" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">bumblebee</div>
                        {currentTheme === 'bumblebee' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('emerald')}
                    >
                        <div data-theme="emerald" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">emerald</div>
                        {currentTheme === 'emerald' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('corporate')}
                    >
                        <div data-theme="corporate" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">corporate</div>
                        {currentTheme === 'corporate' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('synthwave')}
                    >
                        <div data-theme="synthwave" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">synthwave</div>
                        {currentTheme === 'synthwave' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('retro')}
                    >
                        <div data-theme="retro" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">retro</div>
                        {currentTheme === 'retro' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('cyberpunk')}
                    >
                        <div data-theme="cyberpunk" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">cyberpunk</div>
                        {currentTheme === 'cyberpunk' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('valentine')}
                    >
                        <div data-theme="valentine" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">valentine</div>
                        {currentTheme === 'valentine' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('halloween')}
                    >
                        <div data-theme="halloween" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">halloween</div>
                        {currentTheme === 'halloween' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('garden')}
                    >
                        <div data-theme="garden" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">garden</div>
                        {currentTheme === 'garden' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('forest')}
                    >
                        <div data-theme="forest" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">forest</div>
                        {currentTheme === 'forest' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('aqua')}
                    >
                        <div data-theme="aqua" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">aqua</div>
                        {currentTheme === 'aqua' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('lofi')}
                    >
                        <div data-theme="lofi" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">lofi</div>
                        {currentTheme === 'lofi' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('pastel')}
                    >
                        <div data-theme="pastel" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">pastel</div>
                        {currentTheme === 'pastel' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('fantasy')}
                    >
                        <div data-theme="fantasy" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">fantasy</div>
                        {currentTheme === 'fantasy' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('wireframe')}
                    >
                        <div data-theme="wireframe" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">wireframe</div>
                        {currentTheme === 'wireframe' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('black')}
                    >
                        <div data-theme="black" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">black</div>
                        {currentTheme === 'black' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('luxury')}
                    >
                        <div data-theme="luxury" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">luxury</div>
                        {currentTheme === 'luxury' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('dracula')}
                    >
                        <div data-theme="dracula" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">dracula</div>
                        {currentTheme === 'dracula' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('cmyk')}
                    >
                        <div data-theme="cmyk" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">cmyk</div>
                        {currentTheme === 'cmyk' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('autumn')}
                    >
                        <div data-theme="autumn" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">autumn</div>
                        {currentTheme === 'autumn' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('business')}
                    >
                        <div data-theme="business" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">business</div>
                        {currentTheme === 'business' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('acid')}
                    >
                        <div data-theme="acid" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">acid</div>
                        {currentTheme === 'acid' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('lemonade')}
                    >
                        <div data-theme="lemonade" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">lemonade</div>
                        {currentTheme === 'lemonade' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('night')}
                    >
                        <div data-theme="night" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">night</div>
                        {currentTheme === 'night' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('coffee')}
                    >
                        <div data-theme="coffee" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">coffee</div>
                        {currentTheme === 'coffee' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('winter')}
                    >
                        <div data-theme="winter" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">winter</div>
                        {currentTheme === 'winter' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('dim')}
                    >
                        <div data-theme="dim" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">dim</div>
                        {currentTheme === 'dim' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('nord')}
                    >
                        <div data-theme="nord" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">nord</div>
                        {currentTheme === 'nord' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                    <li><button
                        className="gap-3 px-2"
                        onClick={() => handleThemeChange('sunset')}
                    >
                        <div data-theme="sunset" className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                            <div className="bg-base-content size-1 rounded-full"></div>
                            <div className="bg-primary size-1 rounded-full"></div>
                            <div className="bg-secondary size-1 rounded-full"></div>
                            <div className="bg-accent size-1 rounded-full"></div>
                        </div>
                        <div className="w-32 truncate">sunset</div>
                        {currentTheme === 'sunset' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                            </svg>
                        )}
                    </button></li>
                </ul>
            </div>
        </div>
    )
}