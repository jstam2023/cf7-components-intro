// import ViteIntro from "./pages/Viveintro.tsx";

import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {

  return (
    <>
        <ClassComponent />
        {/*<ViteIntro />*/}
        <FunctionalComponent />
        <ArrowFunctionalComponent />
        <ArrowFunctionalComponentWithProps title="Is an ArrowFunctionalComponentWithProps"/>
        <ArrowFunctionalComponentWithPropsType title="Is an ArrowFunctionalComponentWithPropsType"
                                               description="This is the description" />

    </>
  )
}

export default App
