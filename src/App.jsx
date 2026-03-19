import { useState } from "react"
// import StatesInFBC from "./AllTopics/02_States/StatesInFBC"
// import ClassBassed from "./AllTopics/01_TypeOfCompontes/ClassBassed"
// import HeaderComp from "./components/HeaderComp"
// import ThemeChange from "./AllTopics/02_States/ThemeChange"
// import Counter from "./AllTopics/02_States/Counter"
// import CounterP from "./Assimeant/Practics/CounterP"
// import ThemesP from "./Assimeant/Practics/ThemesP"
// import ShowHideText from "./Assimeant/Practics/ShowHideText"
// // import StateTask1 from "./Assimeant/StateTask1"
// import PropsParent from "./AllTopics/03_Props/PropsParent"
// import ReactCss from "./AllTopics/09_ReactCss/ReactCss"
// import Navbar from "./AllTopics/09_ReactCss/navbar"

// import TailwintsPratics1 from "./AllTopics/10_TailwinetCss/TailwintsPratice1"
// import PropP from "./AllTopics/03_Props/PropP"
// import ProDP from "./AllTopics/03_Props/ProDP"
// import UpliftingParent from "./AllTopics/04_StateUplifting/UpliftingParent"
// import DrilingParents from "./AllTopics/05_propsDriling/DrilingParents"
// import LifeCycleInCbc from "./AllTopics/11_LifeCycle/LifeCycleCbc"

// import LifeCycleInFbc from "./AllTopics/11_LifeCycle/LifeCycleInFbc"
// import ContextProvider from "./AllTopics/06_Context/ContextProvider"
// import ContextParent from "./AllTopics/06_Context/ContextParent"
 import ControllerdFrom1 from "./AllTopics/07_Froms/ControllerdFrom1"
import ControlledForms2 from "./AllTopics/07_Froms/ControllerdFrom2"
import Todos from "./AllTopics/12_Fatch/Todos"
import Products from "./AllTopics/12_Fatch/Products"
import ReducerCounter from "./AllTopics/13_Reducer/ReducerCounter"
import Users from "./AllTopics/14_CoustomHook/users"
import ReducerTodo from "./AllTopics/13_Reducer/ReducerTodo"
import UncontrolledForms from "./AllTopics/07_Froms/UnControllerdFrom"
import MemoChild from "./AllTopics/15_MemoAndCallback/MemoChild"
import MemoExample from "./AllTopics/15_MemoAndCallback/MemoExample"
import Dashbord from "./AllTopics/16_Routing/Dashbord"



const App = () => {

    const[toggle,setToggle] = useState(false)
    const handleToggle = () => setToggle((prev) =>!prev)
    return ( 
        <>

            {/* All Topic folder impot */}

                {/* <HeaderComp/>
                <ClassBassed/> */}
                {/* <StatesInFBC/> */}
                {/* <ThemeChange/>
                <Counter/> */}


            {/* 03_Props floder import */}
                {/* <PropsParent/> */}
                {/* <PropP/>
                <ProDP/> */}


            {/* 04_stateUplifting floder import     */}
                {/* <UpliftingParent/> */}

            
            {/* 05_PropsDriling floder import */}
                    {/* <DrilingParents/> */}

            
            {/* 06_Context floder import */}
                    {/* <ContextProvider>
                        <ContextParent/>
                    </ContextProvider> */}

            {/* 07_From floder import */}
                     {/* <ControllerdFrom1/>  */}
                    {/* <ControlledForms2/> */}
                    {/* <UncontrolledForms/> */}

                    
           {/* 09_ReactCss floder import */}
                     {/* <ReactCss/>
                
                     <Navbar/> */}


            {/* 
            10_Tailwinds floder import */}

                {/* <TailwintsPratics1/> */}

            {/* 11_LifeCycle floder import     */}
                 {/* <button onClick={handleToggle}>toggle me</button>
                  {toggle && <LifeCycleInCbc />} */}

                {/* <LifeCycleInFbc/>  */}

            {/* 12_Fatch floder import */}
                    {/* <Todos /> */}
                    {/* <Products/> */}

            {/* 13_Reducer flosder import */}
                   {/* <ReducerCounter/> */}
                   {/* <ReducerTodo/> */}

            {/* 14_CoustomHook floder import */}
                   {/* <Users/> */}

            {/* 15_MemoAndCallback floder import */}
                    <MemoExample/>
                    <MemoChild/>


            {/* 16_Roughting floder import*/}
                   {/* <Dashbord/> */}
    
            {/* Practics folder import */}

                {/* <CounterP/>
                <ThemesP/>
                <ShowHideText/> */}
                {/* <PropsP/> */}
             



            {/* Assiment folder import */}

                 {/* <StateTask1 /> */}
        </>
    )
}
export default App