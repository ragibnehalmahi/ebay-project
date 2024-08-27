import React, { useState } from 'react';

const Blogs = () => {
  // Define categories including an "All" option
  const category = [
    {
      id: 0,
      title: 'All',
      link: '#',
    },
    {
      id: 1,
      title: 'business',
      link: '#',
    },
    {
      id: 2,
      title: 'sports',
      link: '#',
    },
    {
      id: 3,
      title: 'technology',
      link: '#',
    },
    {
      id: 4,
      title: 'medicine',
      link: '#',
    },
    {
      id: 5,
      title: 'marketing',
      link: '#',
    },
  ];

  // Define blog posts
  const blogsPost = [
    {
      id: 1,
      description:
        "it is a description of blog no post 1. The Internal Revenue Service (IRS) announced today that interest rates will remain unchanged for the fourth quarter of 2024, continuing the rates that have been in place. These rates apply to overpayments and underpayments for the calendar quarter beginning October 1, 2024. For individual taxpayers, the interest rate for both overpayments and underpayments will be set at 8% per year, compounded daily. Corporations will see a slight variation in the rates applicable to them.",
      image:
        'https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2024/08/QnXewzYX-irs-debby-relief-1-850x478.png',
      category: 'sports',
    },
    {
      id: 2,
      description:
        "it is a description of blog no post 2. Embrace Being 'The Only' in the Room — 3 Strategies Successful Founders Use to Grow Their Companies I helped many founders grow and scale their companies, and I've noticed that top business leaders often make a few key decisions early on",
      image:
        'https://assets.entrepreneur.com/content/3x2/2000/1723649757-embrace-being-the-only-0824-g2158855981.jpg?format=pjeg&auto=webp&crop=4:3&width=380&height=285',
      category: 'business',
    },
    {
      id: 3,
      description:
        'it is a description of blog no post 3. The Tata Group is a group of companies headquartered in Mumbai, India. Established in 1868, it is India\'s largest conglomerate, with products and services in over 150 countries, and operations in 100 countries. Wikipedia',
      image:
        'https://sp.yimg.com/ib/th?id=OIP.x4VOmXKct1UqfuP7OnQUOwHaHc&pid=Api&w=148&h=148&c=7&dpr=2&rs=1',
      category: 'technology',
    },
    {
      id: 4,
      description:
        "it is a description of blog no post 4. Adani Group is an Indian multinational conglomerate, headquartered in Ahmedabad. Founded by Gautam Adani in 1988 as a commodity trading business, the Group's businesses include sea and airport management, electricity generation and transmission, mining, natural gas, food, weapons, and infrastructure. Wikipedia",
      image:
        'https://up.yimg.com/ib/th?id=OVFT.tErrRG1FvCindZEv_naRIC&pid=News&w=400&h=228&c=14&qlt=90&dpr=2&rs=1',
      category: 'business',
    },
    {
      id: 5,
      description:
        'it is a description of blog no post 5. JioCinema is an Indian subscription-based video-on-demand and over-the-top media streaming service owned by Digital18, a subsidiary of Viacom18, a joint venture of Reliance Industries and Paramount Global. Wikipedia',
      image:
        'https://tse2.mm.bing.net/th?id=OIP.BhJnx1A4-V97FmwMy9FGHgHaJ4&pid=Api&P=0&h=220',
      category: 'technology',
    },
  ];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // State to track expanded blog posts for "Read More" functionality
  const [expandedPosts, setExpandedPosts] = useState({});

  // Filter blogs based on the selected category
  const filteredBlogs =
    selectedCategory === 'All'
      ? blogsPost
      : blogsPost.filter((post) => post.category === selectedCategory);

  // Utility function to limit description to 10 words
  const getShortDescription = (description) =>
    description.split(' ').slice(0, 10).join(' ') + '...';

  // Handle "Read More" toggle
  const handleReadMoreToggle = (id) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div className='container flex'>
        {/* Category Section */}
        <div className='w-1/3 p-4'>
          <h1 className='font-bold text-xl mb-4'>Category</h1>
          <ul className='flex flex-col gap-2 text-gray-600'>
            {category.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className='hover:text-blue-500 cursor-pointer'
                  onClick={() => setSelectedCategory(item.title)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Blogs Section */}
        <div className='w-2/3 p-4'>
          <h1 className='text-2xl font-bold mb-6'>Blogs List</h1>
          <div className='grid grid-cols-1 gap-6'>
            {filteredBlogs.map((item) => (
              <div
                key={item.id}
                className='flex bg-white rounded-lg shadow-lg overflow-hidden'
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-1/3 h-auto object-cover'
                />
                <div className='w-2/3 p-4'>
                  <p className='text-gray-800 mb-2'>
                    {/* Show short description or full description based on state */}
                    {expandedPosts[item.id]
                      ? item.description
                      : getShortDescription(item.description)}
                  </p>
                  <button
                    className='text-blue-500 hover:underline'
                    onClick={() => handleReadMoreToggle(item.id)}
                  >
                    {expandedPosts[item.id] ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

