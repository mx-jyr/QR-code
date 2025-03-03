import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  
  Section,
} from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    // title={
    //   <div className="flex items-baseline justify-between">
    //     <div>
    //       最近<GradientText>发文</GradientText>
    //     </div>

    //     <div className="text-sm">
    //       <a href="/posts/">查看更多 →</a>
    //     </div>
    //   </div>
    // }
  >
    {/* <BlogGallery postList={props.postList} /> */}
  </Section>
);

export { RecentPosts };
