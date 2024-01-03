<div className="flex flex-row w-screen min-h-screen">
  <div
    className="fixed top-0 left-0 flex flex-col h-screen"
    style={{
      background: "#121212",
      width: 350,
      borderRight: "solid 3px #222222",
    }}
  >
    <div className="flex flex-col">
      <div
        className="flex flex-row items-center justify-start w-full px-8 py-8 bg-black"
        style={{ borderBottom: "solid 1px #222222" }}
      >
        <div style={{ width: 170 }}>
          <LogoLong />
        </div>
        <div className="ml-4 text-sm text-white opacity-60">v4.1.0</div>
      </div>
      <ul className="p-8 m-0 space-y-2">
        <Link href="/dashboard/">
          <div className="flex flex-row items-center justify-start p-4 rounded-lg cursor-pointer hover:ring-4 hover:ring-opacity-50 hover:ring-indigo-600 hover:bg-indigo-600">
            <svg
              className="w-6 h-6"
              fill="rgba(255,255,255,.65)"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-4 text-lg text-white">Links</span>
          </div>
        </Link>
        <Link href="/dashboard/analytics">
          <div className="flex flex-row items-center justify-start p-4 rounded-lg cursor-pointer hover:ring-4 hover:ring-opacity-50 hover:ring-indigo-600 hover:bg-indigo-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="rgba(255,255,255,.65)"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="ml-4 text-lg text-white">Analytics</span>
          </div>
        </Link>
        {/*
            <Link href='/dashboard/settings'>
                <div className='flex flex-row items-center justify-start p-4 rounded-lg cursor-pointer hover:ring-4 hover:ring-opacity-50 hover:ring-indigo-600 hover:bg-indigo-600'>
                <svg className="w-6 h-6" fill="none" stroke="rgba(255,255,255,.65)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>                            <span className='ml-4 text-lg text-white'>Settings</span>
                </div>
            </Link>
            */}
        <Link href="/logout">
          <div className="flex flex-row items-center justify-start p-4 rounded-lg cursor-pointer hover:ring-4 hover:ring-opacity-50 hover:ring-indigo-600 hover:bg-indigo-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="rgba(255,255,255,.65)"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>{" "}
            <span className="ml-4 text-lg text-white">Logout</span>
          </div>
        </Link>
      </ul>
    </div>
    {/* TODO: Update link with Discount, and check if BRANDING is true before displaying */}
    {/*
        <Link href="https://singlelink.co" passHref>
            <a target="_blank" rel="noopener noreferrer" className='flex flex-col items-center justify-start w-full p-4 mt-auto text-sm text-white cursor-pointer hover:underline' style={{borderTop: 'solid 1px rgba(255,255,255,.1)', backgroundColor: 'rgba(255,255,255,.05)'}}>
                Sign up for Singlelink Cloud for only $5/mo!
            </a>
        </Link>
    */}
  </div>
  <div
    className="flex flex-col min-h-screen px-12 py-16"
    style={{ width: "calc(100% - 800px)", marginLeft: 350 }}
  >
    {children}
  </div>
</div>;
