import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        我们的<GradientText>功能</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="轻松开启，专属校园交易之旅"
        description="初次接触平台，同学们只需简单的登录、注册流程，关键一步在于学生认证，
        精准关联所属大学信息。这不仅保障了交易环境的纯粹性，仅限校内师生参与，更能让大家放心交易
        ，如同身处一个熟悉又可靠的校园集市。
        完成认证后，个人专属的校园交易空间就此开启，无论是“寻宝”还是“出货”，都将畅通无阻。"
        link="/"
        img={{
          src: '/assets/images/旅游1.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>登录注册</Tags>
            <Tags color={ColorTags.LIME}>学生认证</Tags>
            <Tags color={ColorTags.SKY}>放心交易</Tags>
            <Tags color={ColorTags.ROSE}>校园集市</Tags>
          </>
        }
      />
      <Project
        name="随心“逛”“搜”，好物尽在指尖"
        description="平台界面简洁直观，浏览功能如同漫步于商业街一般，各类商品琳琅满目。
        从学习必备的专业书籍、笔记资料，到宿舍生活的日用百货、电子设备，再到运动时需要的器材设备，
        应有尽有。若你心中已有目标，搜索栏便是精准导航，输入关键词，便可瞬间锁定心仪好物，
        节省时间，高效筛选，让每一次查找都直击所需。"
        link="/"
        img={{ src: '/assets/images/手机1.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>简洁直观</Tags>
            <Tags color={ColorTags.EMERALD}>浏览商品</Tags>
            <Tags color={ColorTags.YELLOW}>节省时间</Tags>
          </>
        }
      />
      <Project
        name="买卖自主，信息透明掌控"
        description="想出售闲置物品的同学，
        只需详细填写信息，物品成色如何、当初买入价格多少、期望的售出价格，一目了然。附上物品的真实照片，划痕、磨损等细节都坦诚相告，让买家心里有底。而买家在“我要买”板块，同样清晰描述求购信息与期望价格，
        双方基于充分的信息交互，公平议价，便可顺利达成双赢交易。"
        link="/"
        img={{ src: '/assets/images/礼物.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.SKY}>物品成色</Tags>
            <Tags color={ColorTags.INDIGO}>真实照片</Tags>
            <Tags color={ColorTags.ROSE}>信息交互</Tags>
          </>
        }
      />

<Project
        name="实时畅聊，沟通零距离"
        description="看中一件好物，或是对卖家的报价、物品细节存有疑问？别担心，
        实时聊天沟通功能随时待命。买卖双方就像面对面交流，即时询问、快速解答，从物品功能到使用感受，从交易时间到交付方式，
        任何问题都能在一来一往的对话中消除不确定性，为成功交易筑牢信任的基石。"
        link="/"
        img={{
          src: '/assets/images/气泡.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>即时询问</Tags>
            <Tags color={ColorTags.ROSE}>物品细节</Tags>
            <Tags color={ColorTags.SKY}>买卖双方</Tags>
            
          </>
        }
      />
      <Project
      name="多元交易，便捷各取所需"
      description="交易达成后，邮寄与线下交易两种方式供君选择。
      双方距离十分遥远时选择邮寄，足不出户即可坐等收货；若双方距离相近，线下交易更为直接，当面验货、一手交钱一手交货，还能顺便结识同好校友。
      这种灵活的交易模式，贴合校园的生活节奏，也满足了不同场景的需求。"
      link="/"
      img={{
        src: '/assets/images/购物车.png',
        alt: 'Project Web Design',
      }}
      category={
        <>
          <Tags color={ColorTags.SKY}>交易模式</Tags>
          <Tags color={ColorTags.LIME}>交易达成</Tags>
          <Tags color={ColorTags.FUCHSIA}>商品验货</Tags>
          <Tags color={ColorTags.ROSE}>不同需求</Tags>
        </>
      }
    />
    <Project
      name="个人中心，专属交易管家"
      description="在个人中心，“我的沟通”记录着每一次交易洽谈的足迹，随时回溯，
      不错过重要信息；“我的二手”展示着自己正在出售的宝贝动态，是否有人咨询、何时售出，尽在掌握；“我的求购”则显示着那些心心念念尚未觅得的好物进展；“我的订单”清晰呈现出购买历史，方便售后查询；“我的收藏”更是装满了你的心动备选，
      待有空余资金或者刚需时刻，便可一键下单。"
      link="/"
      img={{
        src: '/assets/images/个人中心.png',
        alt: 'Project Web Design',
      }}
      category={
        <>
          <Tags color={ColorTags.LIME}>个人中心</Tags>
          <Tags color={ColorTags.FUCHSIA}>好物进展</Tags>
          {/* <Tags color={ColorTags.ROSE}>购买历史</Tags> */}
          <Tags color={ColorTags.SKY}>心动备选</Tags>
        </>
      }
    />
    鸿德易物栈，不仅仅是一个线上交易场所，更是校园生活的温暖纽带，它串起了闲置资源，连通了你我的需求，
    让校园生活因共享、互助而更加精彩，快来开启你的校园二手交易新体验吧！
    </div>
  </Section>
);

export { ProjectList };
