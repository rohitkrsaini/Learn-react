import StatesInFBC from "./AllTopics/02_States/StatesInFBC"
import ClassBassed from "./AllTopics/01_TypeOfCompontes/ClassBassed"
import HeaderComp from "./components/HeaderComp"
import ThemeChange from "./AllTopics/02_States/ThemeChange"
import Counter from "./AllTopics/02_States/Counter"
import CounterP from "./Assimeant/Practics/CounterP"
import ThemesP from "./Assimeant/Practics/ThemesP"
import ShowHideText from "./Assimeant/Practics/ShowHideText"
// import StateTask1 from "./Assimeant/StateTask1"
import PropsParent from "./AllTopics/03_Props/PropsParent"
import ReactCss from "./AllTopics/09_ReactCss/ReactCss"
import Navbar from "./AllTopics/09_ReactCss/navbar"

import TailwintsPratics1 from "./AllTopics/10_TailwinetCss/TailwintsPratice1"
import PropP from "./AllTopics/03_Props/PropP"
import ProDP from "./AllTopics/03_Props/ProDP"
import UpliftingParent from "./AllTopics/04_StateUplifting/UpliftingParent"
import DrilingParents from "./AllTopics/05_propsDriling/DrilingParents"
import LifeCycleInCbc from "./AllTopics/11_LifeCycle/LifeCycleCbc"
import { useState } from "react"
import LifeCycleInFbc from "./AllTopics/11_LifeCycle/LifeCycleInFbc"
import ContextProvider from "./AllTopics/06_Context/ContextProvider"
import ContextParent from "./AllTopics/06_Context/ContextParent"
import ControllerdFrom1 from "./AllTopics/07_Froms/ControllerdFrom1"



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
                    <ControllerdFrom1/>

                    
           {/* 09_ReactCss floder import */}
               {/* <ReactCss/>
    
               <Navbar/> */}


            {/* 
            10_Tailwinds floder import */}

                {/* <TailwintsPratics1/> */}

            {/* 11_LifeCycle floder import     */}
                {/* <button onClick={handleToggle} toggle me></button>
                {toggle && <LifeCycleInCbc/>}

                <LifeCycleInFbc/> */}


    
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