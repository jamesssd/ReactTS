import { defaultCoreCipherList } from 'node:constants';
import React, { ReactElement, ReactNode } from 'react';
import './App.css';

//Props
function Heading({title}: { title: string;}){
  return(
    <h1>{title}</h1>
  )
}

function HeadingWithContent({ children }: { children: ReactNode }): ReactElement {
  return(
    <h1>{children}</h1>
  )
}

//default props
const deafultContainerProps = {
  heading: <strong>My Heading</strong>
}

type ContainerProps = { children: ReactNode } & typeof deafultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div><h1>{heading}</h1>{children}</div>
  );
}

Container.defaultProps = deafultContainerProps;

//Functional Props
function TextWithNumber({
  header,
  children
}: {
  header : (num : number) => ReactNode
  children : (num : number) => ReactNode
}) {
  const [state, stateSet] = React.useState<number>(1);

  return(
    <div>
      <h2>{header(state)}</h2>
      <div>{children(state)}</div>
      <div>
        <button onClick = {() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Heading title="Hello"></Heading>
      <HeadingWithContent>
        <strong>What's up!</strong>
        </HeadingWithContent>
        <Container>Nothing much</Container>
        <TextWithNumber header={(num: number) => <span>Header {num}</span>}>{(num : number) => <div>Today's number number is { num }</div>}</TextWithNumber>
    </div>
  );
}

export default App;
