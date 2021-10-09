import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { listData } from '../MapFunction/data';
import { tabsData, tabsData2 } from './data';

function MainTabs(){
    return(
        <div className="main-tabs">
        <Tabs>
            <TabList>
                <Tab>Domains</Tab>
                 <Tab>Web Hosting</Tab>
                 <Tab>Virtual Cloud </Tab>
                 <Tab>Dedicated Servers</Tab>
                 <Tab>Email Hosting</Tab>
                 <Tab>WordPress Hosting</Tab>
            </TabList>
            <TabPanel>
                <Panel list={tabsData}/>
            </TabPanel>
            <TabPanel>
                <Panel list={tabsData2}/>
            </TabPanel>
            <TabPanel>
                <Panel list={tabsData}/>
            </TabPanel>
            <TabPanel>
                <Panel list={tabsData2}/>
            </TabPanel>
            <TabPanel>
                <Panel list={tabsData}/>
            </TabPanel>
            <TabPanel>
                <Panel list={tabsData2}/>
            </TabPanel>
        </Tabs>
        </div>
    )
};
export default MainTabs ;

export function Card(props){
    return(
        <div className="tab-card">
            <h1>{props.title}</h1>
            <h3>{props.price}</h3>
            <p>Instead of {props.offPrice}/yr</p>
            <button>Buy Now</button>
        </div>
    )
};
export function Panel(props){
    return(
        <div className="panel">
            {props.list.map((d) =>{
                return(
                    <Card {...d}/>
                )
            })}
        </div>
    )
}