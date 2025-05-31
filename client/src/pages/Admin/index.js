import Header from "../../components/Header";
import {Tabs} from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";
import { useEffect } from "react";

const {TabPane} =Tabs;

function Admin() {

  useEffect(()=>{
    if(!localStorage.getItem("token")){
        window.location.href="/login"
    }
  },[])
  
  const onChange=(key)=>{
    console.log(key);
  }  

  return (
  <div>
        <Header />
        <div className="mt-5 p-5">
             <h1 className="text-primary text-2xl">Portfolio Admin</h1>
            <hr />
            <Tabs defaultActiveKey="1" onChange={onChange} tabPosition="left">
                <TabPane tab="Intro" key="1">
                    <AdminIntro />
                </TabPane>
                <TabPane tab="About" key="2">
                    <AdminAbout />
                </TabPane>
                <TabPane tab="Experience" key="3">
                    <AdminExperiences />
                </TabPane>
                <TabPane tab="Project" key="4">
                    <AdminProjects />
                </TabPane>
                <TabPane tab="Course" key="5">
                    <AdminCourses />
                </TabPane>
                <TabPane tab="Contact" key="6">
                    <AdminContact />
                </TabPane>
            </Tabs>
        </div>

  </div>
  );
}

export default Admin;