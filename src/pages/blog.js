import BlogAside from '../components/BlogAside';
import BlogCategories from '../components/BlogCategories';
import BlogSearch from '../components/BlogSearch';
import BlogTemplate from '../components/BlogTemplate';
import BlogWrapper from '../components/BlogWrapper';

const blog = () => {
  return (
    <BlogTemplate>
      <BlogAside>
        <BlogSearch />
        <BlogCategories />
      </BlogAside>
      <BlogWrapper />
    </BlogTemplate>
  );
};

export default blog;
