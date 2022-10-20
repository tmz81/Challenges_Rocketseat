import { Content, Banner, CircleBlurTop, CircleBlurBottom } from "./style";

export function MainContent() {
  return (
    <Content>
      <div>
        <h1>Great Coffee</h1>
        <h2>{"<Great Code/>"}</h2>
      </div>
      <Banner />
      <CircleBlurTop />
      <CircleBlurBottom />
    </Content>
  );
}
