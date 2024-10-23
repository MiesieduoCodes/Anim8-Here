import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
    {
      name: "Hey Ani",
      submenu: true,
      sublinks: [
        {
          Head: "Hey Ani",
          sublink: [
            { name: "About", link: "/about" },
            { name: "FAQs", link: "/faqs" },
          ],
        },
      ],
    },
    {
      name: "Toonz Hub",
      submenu: true,
      sublinks: [
        {
          Head: "Toonz Hub",
          sublink: [
            { name: "Pixar", link: "/pixar" },
            { name: "DreamWorks", link: "/dreamworks" },
            { name: "Disney", link: "/disney" },
            { name: "Netflix", link: "/netflix" },
            {
              name: "Marvel & DC",
              sublink: [
                { name: "Marvel", link: "/marvel" },
                { name: "DC", link: "/dc"},
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Anim8 Buddy",
      submenu: true,
      sublinks: [
        {
          Head: "Anim8 Buddy",
          sublink: [
            { name: "Trailers", link: "/trailers" },
            { name: "Trivias", link: "/login" },
            { name: "Tooned In", link: "/toonedin" },
            { name: "Whatsup?", link: "/whatsgood" },
          ],
        },
      ],
    },
    {
      name: "Anime Freak",
      submenu: true,
      sublinks: [
        {
          Head: "Anime Freak",
          sublink: [
            { name: "Anime Films", link: "/anime-films" },
            { name: "Anime Series", link: "/anime-series" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-7">{link.name}</h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div className="w-4 h-4  left-3 absolute mt-1 bg-blue-400 z-[-50] rotate-45"></div>
                  </div>
                  <div className="bg-white p-5">
                    {link.sublinks.map((mysublinks, subIndex) => (
                      <div key={subIndex}>
                        <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
                        {mysublinks.sublink.map((slink, slinkIndex) => (
                          <li key={slinkIndex} className="text-sm text-gray-600 my-2.5">
                            {slink.sublink ? ( // Check if there are sublinks
                              <div>
                                <Link to={slink.link} className="hover:text-blue-600">
                                  {slink.name}
                                </Link>
                                <ul className="ml-4">
                                  {slink.sublink.map((subItem, subItemIndex) => (
                                    <li key={subItemIndex} className="text-sm text-gray-600 my-2.5">
                                      <Link to={subItem.link} className="hover:text-blue-600">
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <Link to={slink.link} className="hover:text-blue-600">
                                {slink.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;