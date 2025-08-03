//
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {

  return (
    <>
        <Layout>

        {/*<ClassComponent />*/}
        {/*<ViteIntro />*/}
        {/*<FunctionalComponent />*/}
        {/*<ArrowFunctionalComponent />*/}
        {/*<ArrowFunctionalComponentWithProps title="Is an ArrowFunctionalComponentWithProps"/>*/}
        {/*<ArrowFunctionalComponentWithPropsType title="Is an ArrowFunctionalComponentWithPropsType"*/}
        {/*                                       description="This is the description" />*/}

        {/*<h1 className="text-center text-2xl font-bold">This is a heading1 title</h1>*/}
        {/*<FunctionalComponent/>*/}
        {/*    <ClassComponentWithState/>*/}
            <FunctionalComponentWithState/>
      </Layout>



    </>
  )
}

export default App
