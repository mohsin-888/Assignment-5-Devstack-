const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">


        <div className="grid gap-8 md:grid-cols-4">

          <div>
          <h2 className="text-2xl font-bold">
              Dev <span className="text-pink-500">Stack</span>
            </h2>

            <p className="mt-3 text-sm text-gray-400">
                     Build your ideal development stack with modern technologies.
             </p>
           <p>
             <b>Github</b>
                </p>
             <p><b>Twitter</b></p>
                 <p><b>LinkedIn</b></p>
         </div>
     

       
          <div>
               <h3 className="font-bold">Products</h3>

            <div className="mt-3 space-y-2 text-sm text-gray-400">
                  <p>Home</p>
              <p>Products</p>
              <p>Company</p>
                 <p>Legal</p>
              </div>
             </div>

          <div>
            <h3 className="font-bold">Company</h3>

             <div className="mt-3 space-y-2 text-sm text-gray-400">
               <p>Email: @devstack.com</p>
              <p>Programme. Learn. Experience.</p>
              </div>
          </div>
 <div>
            <h3 className="font-bold">Legal</h3>

            <div className="mt-3 space-y-2 text-sm text-gray-400">
              <p>Home</p>
              <p>Products</p>
              <p>Company</p>
              <p>Legal</p>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-5 text-center text-sm text-gray-500">
          ©2026 Dev Stack. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;