import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Todo from "./components/Todo/Todo.tsx"
import UserPage from "./pages/UserPage.tsx";

function App() {

  return (
    <>
        {/*<Layout>*/}

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
        {/*    <FunctionalComponentWithState/>*/}
        {/*    <Counter/>*/}
        {/*    <CounterWithMoreStates/>*/}
        {/*    <CounterAdvanced/>*/}
        {/*    <CounterWithCustomHook/>*/}
        {/*    <CounterAdvancedWithCustomHook/>*/}
        {/*    <CounterWithReducer/>*/}
        {/*    <Todo/>*/}
        {/*    <OnlineStatus />*/}
        {/*        <NameChanger/>*/}
        {/*</Layout>*/}


        <BrowserRouter>
            <Layout>
                <Routes>
                    {/*<Route path="/" element={<HomePage />} />*/}
                    <Route index element={<HomePage />} />

                    <Route path="examples">
                        <Route path="name-changer" element={<NameChangerPage />}/>
                        <Route path="online-status" element={<OnlineStatusPage />}/>
                    </Route>
                    <Route path="users/:userId" element={<UserPage />}/>

                </Routes>
            </Layout>
        </BrowserRouter>

    </>
  )
}

export default App
