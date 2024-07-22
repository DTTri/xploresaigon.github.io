import ResearchTab from './Admin/ResearchTab';
import UsersTab from './Admin/UsersTab';
import PostsTab from './Admin/PostsTab';
import TagsTab from './Admin/TagsTab';
import { useState } from 'react';
export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('research');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'research':
        return <ResearchTab />;
      case 'users':
        return <UsersTab />;
      case 'posts':
        return <PostsTab />;
      case 'tags':
        return <TagsTab />;
      default:
        return null;
    }
  };
  return (
    <div className='admin-page px-8 h-screen py-4 bg-background dark:bg-darkBackground dark:text-white flex gap-4 flex-wrap'>
      <div className='nav-bar shadow-lg rounded-xl py-4 px-2 min-w-44 flex flex-col gap-4 bg-white items-start dark:bg-secondDarkBackground'>
        <button
          onClick={() => handleTabClick('research')}
          className={`nav-bar--item ${
            activeTab === 'research' ? 'active' : ''
          }`}
        >
          Khảo sát
        </button>
        <button
          onClick={() => handleTabClick('users')}
          className={`nav-bar--item ${activeTab === 'users' ? 'active' : ''}`}
        >
          Quản lí người dùng
        </button>
        <button
          onClick={() => handleTabClick('posts')}
          className={`nav-bar--item ${activeTab === 'posts' ? 'active' : ''}`}
        >
          Quản lí bài viết
        </button>
        <button
          onClick={() => handleTabClick('tags')}
          className={`nav-bar--item ${activeTab === 'tags' ? 'active' : ''}`}
        >
          Quản lí tags
        </button>
      </div>
      <div className='basis-10/12 shadow-xl rounded-xl p-4 content bg-white dark:bg-secondDarkBackground dark:text-white'>
        {renderContent()}
      </div>
    </div>
  );
}
