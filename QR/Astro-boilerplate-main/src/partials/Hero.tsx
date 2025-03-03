import {
  GradientText,
  HeroAvatar,
  
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi,这里是<GradientText>鸿德易物栈</GradientText> 👋
        </>
      }
      description={
        <>
          一个校园二手好物的
          {' '}
          <a className="text-cyan-400 hover:underline" href="/">
          便捷中转站
          </a>{' '}
          
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/two.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          
        </>
      }
    />
  </Section>
);

export { Hero };
