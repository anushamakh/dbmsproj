import React from "react";
function Navbar() {
    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-4 md:px-auto">
            <div className="md:h-16 h-20 mx-auto container flex items-center justify-between flex-wrap md:flex-nowrap">
                
                <div className="text-indigo-500 md:order-1">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                </div>
                <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between space-x-4 list-none">
                        
                        <li className="md:py-2"><a href="/branches" className="text-indigo-500 hover:text-indigo-700" style={{textDecoration: 'none'}}>Branches</a></li>
                        <li className="md:py-2"><a href="/transactions" className="text-indigo-500 hover:text-indigo-700" style={{textDecoration: 'none'}}>Transactions</a></li>
                        <li className="md:py-2"><a href="/customers" className="text-indigo-500 hover:text-indigo-700" style={{textDecoration: 'none'}}>Customers</a></li>
                        <li className="md:py-2"><a href="/accounts" className="text-indigo-500 hover:text-indigo-700" style={{textDecoration: 'none'}}>Accounts</a></li>
                        
                    </ul>
                </div>
                <div className="order-2 md:order-3">
                   
                </div>
            </div>
        </nav>
    );
}





  
export default Navbar;

